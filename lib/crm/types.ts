export interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  ip_address?: string;
  user_agent?: string;
  created_at?: Date;
}

export interface CRMResponse {
  success: boolean;
  id?: string;
  message: string;
  error?: string;
}

export interface CRMProvider {
  name: string;
  createLead(lead: Lead): Promise<CRMResponse>;
  isConfigured(): boolean;
}