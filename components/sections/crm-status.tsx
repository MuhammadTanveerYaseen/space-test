'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface CRMStatus {
  configured_providers: string[];
  available_providers: string[];
  timestamp: string;
}

export default function CRMStatus() {
  const [status, setStatus] = useState<CRMStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/crm-status');
        const data = await response.json();
        if (data.success) {
          setStatus(data);
        }
      } catch (error) {
        console.error('Failed to fetch CRM status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-sm">CRM Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  if (!status) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-sm">CRM Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <XCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm">Unable to load status</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-sm">CRM Integration Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-1">Active Providers</div>
          <div className="flex flex-wrap gap-1">
            {status.configured_providers.map((provider) => (
              <Badge key={provider} variant="default" className="text-xs">
                <CheckCircle className="h-3 w-3 mr-1" />
                {provider}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-1">Available Providers</div>
          <div className="flex flex-wrap gap-1">
            {status.available_providers.map((provider) => (
              <Badge 
                key={provider} 
                variant={status.configured_providers.includes(provider) ? "default" : "secondary"}
                className="text-xs"
              >
                {status.configured_providers.includes(provider) ? (
                  <CheckCircle className="h-3 w-3 mr-1" />
                ) : (
                  <AlertCircle className="h-3 w-3 mr-1" />
                )}
                {provider}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Last updated: {new Date(status.timestamp).toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  );
}