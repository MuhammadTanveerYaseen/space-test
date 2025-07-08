import { NextRequest, NextResponse } from 'next/server';
import { CRMManager } from '@/lib/crm/manager';
import { Lead } from '@/lib/crm/types';

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

function extractUTMParams(url: string): { utm_source?: string, utm_medium?: string, utm_campaign?: string } {
  try {
    const urlObj = new URL(url);
    return {
      utm_source: urlObj.searchParams.get('utm_source') || undefined,
      utm_medium: urlObj.searchParams.get('utm_medium') || undefined,
      utm_campaign: urlObj.searchParams.get('utm_campaign') || undefined
    };
  } catch {
    return {};
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const referer = request.headers.get('referer') || '';
    const userAgent = request.headers.get('user-agent') || '';
    const clientIP = getClientIP(request);
    const utmParams = extractUTMParams(referer);
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.service || !data.message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Please fill in all required fields.' 
      }, { status: 400 });
    }

    // Create lead object
    const lead: Lead = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim(),
      company: data.company?.trim(),
      service: data.service,
      message: data.message.trim(),
      source: 'GHLSPACE Website Contact Form',
      ip_address: clientIP,
      user_agent: userAgent,
      ...utmParams
    };

    // Initialize CRM manager and create lead
    const crmManager = new CRMManager();
    const result = await crmManager.createLead(lead);
    
    if (result.success) {
      console.log('Lead successfully processed:', {
        id: result.id,
        email: lead.email,
        service: lead.service,
        provider: crmManager.getConfiguredProviders()[0]
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your interest! We\'ll get back to you within 24 hours.',
        leadId: result.id
      });
    } else {
      console.error('Failed to process lead:', result.error);
      
      return NextResponse.json({ 
        success: false, 
        message: 'We received your message but encountered an issue. We\'ll still get back to you soon!',
        error: result.error
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'There was an error sending your message. Please try again.' 
    }, { status: 500 });
  }
}

// Add a GET endpoint to check CRM status
export async function GET() {
  try {
    const crmManager = new CRMManager();
    const status = crmManager.getStatus();
    
    return NextResponse.json({
      success: true,
      crm_status: status
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to get CRM status'
    }, { status: 500 });
  }
}