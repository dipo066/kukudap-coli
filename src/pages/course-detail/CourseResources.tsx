
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CourseResources = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-4">Sumber Daya Kursus</h3>
        <p className="mb-4">
          Kursus ini menyediakan berbagai sumber daya yang dapat Anda unduh untuk mendukung pembelajaran Anda.
        </p>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border rounded-md">
            <span>Template Photoshop - Proyek 1</span>
            <Button variant="ghost" size="sm">Unduh</Button>
          </div>
          <div className="flex justify-between items-center p-3 border rounded-md">
            <span>Asset Gambar - Paket 1</span>
            <Button variant="ghost" size="sm">Unduh</Button>
          </div>
          <div className="flex justify-between items-center p-3 border rounded-md">
            <span>Cheatsheet Shortcut Photoshop</span>
            <Button variant="ghost" size="sm">Unduh</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
