import { CRMProvider, Lead, CRMResponse } from './types';
import { GoHighLevelCRM } from './gohighlevel';
import { HubSpotCRM } from './hubspot';
import { FallbackCRM } from './fallback';

export class CRMManager {
  private providers: CRMProvider[];
  private fallback: CRMProvider;

  constructor() {
    this.providers = [
      new GoHighLevelCRM(),
      new HubSpotCRM()
    ];
    this.fallback = new FallbackCRM();
  }

  async createLead(lead: Lead): Promise<CRMResponse> {
    // Add metadata
    const enrichedLead: Lead = {
      ...lead,
      source: 'GHLSPACE Website',
      created_at: new Date()
    };

    // Try configured CRM providers first
    for (const provider of this.providers) {
      if (provider.isConfigured()) {
        console.log(`Attempting to create lead in ${provider.name}...`);
        const result = await provider.createLead(enrichedLead);
        
        if (result.success) {
          console.log(`Lead successfully created in ${provider.name}`);
          return result;
        } else {
          console.error(`Failed to create lead in ${provider.name}:`, result.error);
        }
      }
    }

    // If no CRM providers are configured or all failed, use fallback
    console.log('Using fallback CRM method...');
    return await this.fallback.createLead(enrichedLead);
  }

  getConfiguredProviders(): string[] {
    const configured = this.providers
      .filter(provider => provider.isConfigured())
      .map(provider => provider.name);
    
    return configured.length > 0 ? configured : [this.fallback.name];
  }

  getStatus(): { configured: string[], available: string[] } {
    return {
      configured: this.getConfiguredProviders(),
      available: [...this.providers.map(p => p.name), this.fallback.name]
    };
  }
}