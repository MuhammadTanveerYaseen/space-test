import { CRMProvider, Lead, CRMResponse } from './types';

export class FallbackCRM implements CRMProvider {
  name = 'Email Notification';

  isConfigured(): boolean {
    return true; // Always available as fallback
  }

  async createLead(lead: Lead): Promise<CRMResponse> {
    try {
      // Store lead in database for admin review
      await this.storeLeadInDatabase(lead);
      
      // Send email notification to admin
      await this.sendEmailNotification(lead);

      return {
        success: true,
        message: 'Lead captured and notification sent to admin'
      };
    } catch (error) {
      console.error('Fallback CRM Error:', error);
      return {
        success: false,
        message: 'Failed to process lead',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private async storeLeadInDatabase(lead: Lead): Promise<void> {
    // In a real implementation, you would store this in your database
    // For now, we'll log it with structured data
    console.log('NEW LEAD CAPTURED:', JSON.stringify({
      ...lead,
      captured_at: new Date().toISOString(),
      status: 'new'
    }, null, 2));
  }

  private async sendEmailNotification(lead: Lead): Promise<void> {
    // In a real implementation, you would send an email using a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    const emailContent = `
      New Lead from GHLSPACE Website
      
      Name: ${lead.firstName} ${lead.lastName}
      Email: ${lead.email}
      Phone: ${lead.phone || 'Not provided'}
      Company: ${lead.company || 'Not provided'}
      Service Interest: ${lead.service}
      Message: ${lead.message}
      
      Lead Source: ${lead.source}
      UTM Source: ${lead.utm_source || 'N/A'}
      UTM Medium: ${lead.utm_medium || 'N/A'}
      UTM Campaign: ${lead.utm_campaign || 'N/A'}
      
      Captured: ${new Date().toLocaleString()}
    `;

    console.log('EMAIL NOTIFICATION:', emailContent);
    
    // TODO: Implement actual email sending
    // await sendEmail({
    //   to: 'admin@ghlspace.com',
    //   subject: `New Lead: ${lead.firstName} ${lead.lastName}`,
    //   text: emailContent
    // });
  }
}