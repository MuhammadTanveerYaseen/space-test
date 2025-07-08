import { CRMProvider, Lead, CRMResponse } from './types';

export class HubSpotCRM implements CRMProvider {
  name = 'HubSpot';
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.HUBSPOT_API_KEY || '';
  }

  isConfigured(): boolean {
    return !!this.apiKey;
  }

  async createLead(lead: Lead): Promise<CRMResponse> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'HubSpot API key not configured',
        error: 'Missing API key'
      };
    }

    try {
      const payload = {
        properties: {
          email: lead.email,
          firstname: lead.firstName,
          lastname: lead.lastName,
          phone: lead.phone || '',
          company: lead.company || '',
          hs_lead_status: 'NEW',
          lifecyclestage: 'lead',
          lead_source: lead.source,
          service_interest: lead.service,
          initial_message: lead.message,
          utm_source: lead.utm_source || '',
          utm_medium: lead.utm_medium || '',
          utm_campaign: lead.utm_campaign || ''
        }
      };

      const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          id: data.id,
          message: 'Lead successfully created in HubSpot'
        };
      } else {
        return {
          success: false,
          message: 'Failed to create lead in HubSpot',
          error: data.message || 'Unknown error'
        };
      }
    } catch (error) {
      console.error('HubSpot API Error:', error);
      return {
        success: false,
        message: 'Error connecting to HubSpot',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}