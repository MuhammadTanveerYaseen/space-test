import { CRMProvider, Lead, CRMResponse } from './types';

export class GoHighLevelCRM implements CRMProvider {
  name = 'GoHighLevel';
  private apiKey: string;
  private locationId: string;

  constructor() {
    this.apiKey = process.env.GOHIGHLEVEL_API_KEY || '';
    this.locationId = process.env.GOHIGHLEVEL_LOCATION_ID || '';
  }

  isConfigured(): boolean {
    return !!(this.apiKey && this.locationId);
  }

  async createLead(lead: Lead): Promise<CRMResponse> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'GoHighLevel API credentials not configured',
        error: 'Missing API key or location ID'
      };
    }

    try {
      const payload = {
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        phone: lead.phone || '',
        address1: '',
        city: '',
        state: '',
        postalCode: '',
        website: '',
        timezone: 'America/New_York',
        dnd: false,
        tags: [
          'Website Lead',
          `Service: ${lead.service}`,
          `Source: ${lead.source}`
        ],
        customFields: [
          {
            key: 'service_interest',
            field_value: lead.service
          },
          {
            key: 'lead_source',
            field_value: lead.source
          },
          {
            key: 'initial_message',
            field_value: lead.message
          }
        ]
      };

      const response = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Version': '2021-07-28',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        // Create a note/opportunity for the lead
        if (data.contact?.id) {
          await this.createNote(data.contact.id, lead);
        }

        return {
          success: true,
          id: data.contact?.id,
          message: 'Lead successfully created in GoHighLevel'
        };
      } else {
        return {
          success: false,
          message: 'Failed to create lead in GoHighLevel',
          error: data.message || 'Unknown error'
        };
      }
    } catch (error) {
      console.error('GoHighLevel API Error:', error);
      return {
        success: false,
        message: 'Error connecting to GoHighLevel',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private async createNote(contactId: string, lead: Lead): Promise<void> {
    try {
      const notePayload = {
        body: `New lead from GHLSPACE website:
        
Service Interest: ${lead.service}
Message: ${lead.message}
Source: ${lead.source}
UTM Source: ${lead.utm_source || 'N/A'}
UTM Medium: ${lead.utm_medium || 'N/A'}
UTM Campaign: ${lead.utm_campaign || 'N/A'}
IP Address: ${lead.ip_address || 'N/A'}
User Agent: ${lead.user_agent || 'N/A'}`,
        userId: contactId
      };

      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Version': '2021-07-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(notePayload)
      });
    } catch (error) {
      console.error('Failed to create note:', error);
    }
  }
}