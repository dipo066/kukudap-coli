
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareUrlCardProps {
  shareUrl: string;
}

export const ShareUrlCard = ({ shareUrl }: ShareUrlCardProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopied(true);
        toast({
          title: "Link disalin!",
          description: "Link kukudap-coli telah disalin ke clipboard",
        });
        
        // Reset copied state after 3 seconds
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((error) => {
        toast({
          title: "Gagal menyalin link",
          description: "Terjadi kesalahan saat menyalin link",
          variant: "destructive",
        });
        console.error("Error copying link:", error);
      });
  };

  return (
    <Card className="mb-6">
      <CardContent className="py-4 flex items-center justify-between">
        <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {shareUrl}
        </div>
        <Button 
          variant="ghost" 
          className="ml-2" 
          onClick={handleCopyLink}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </CardContent>
    </Card>
  );
};
