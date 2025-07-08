import { NextResponse } from 'next/server';
import { CRMManager } from '@/lib/crm/manager';

export async function GET() {
  try {
    const crmManager = new CRMManager();
    const status = crmManager.getStatus();
    
    return NextResponse.json({
      success: true,
      configured_providers: status.configured,
      available_providers: status.available,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('CRM status error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to get CRM status'
    }, { status: 500 });
  }
}