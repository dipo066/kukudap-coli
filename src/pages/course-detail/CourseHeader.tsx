
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Play, Share2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CourseData } from "./types";

interface CourseHeaderProps {
  courseData: CourseData;
  shareUrl: string;
}

export const CourseHeader = ({ courseData, shareUrl }: CourseHeaderProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopied(true);
        toast({
          title: "Link disalin!",
          description: "Link telah disalin ke clipboard",
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
    <>
      <Link to="/" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Beranda
      </Link>
      
      <div className="relative rounded-lg overflow-hidden mb-6">
        <img 
          src={courseData.image} 
          alt={courseData.title} 
          className="w-full aspect-video object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Button size="lg" className="rounded-full">
            <Play className="h-5 w-5 mr-2" /> Mulai Belajar
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{courseData.title}</h1>
        
        {/* Share Button */}
        <Button 
          variant="outline" 
          className="flex items-center gap-2" 
          onClick={handleCopyLink}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Tersalin
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4" />
              Bagikan
            </>
          )}
        </Button>
      </div>
      
      <p className="text-muted-foreground mb-6">{courseData.description}</p>
      
      <div className="flex items-center gap-6 mb-8">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          <span>{courseData.modules.length} Modul</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span>{courseData.duration}</span>
        </div>
      </div>
    </>
  );
};
