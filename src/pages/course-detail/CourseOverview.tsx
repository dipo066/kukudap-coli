
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CourseOverview = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-4">Tentang Kursus</h3>
        <p>
          Kursus ini dirancang untuk memperkenalkan Anda pada Adobe Photoshop, software editing foto dan desain grafis terkemuka di industri. 
          Anda akan belajar dari dasar hingga teknik menengah yang akan memungkinkan Anda untuk mengerjakan proyek desain grafis sendiri.
        </p>
        <h3 className="font-semibold mt-6 mb-4">Apa yang akan Anda pelajari</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Memahami antarmuka dan alat dasar Photoshop</li>
          <li>Menggunakan layer, masking, dan selection tools</li>
          <li>Dasar-dasar manipulasi gambar dan retouching foto</li>
          <li>Membuat desain grafis sederhana</li>
          <li>Bekerja dengan teks dan efek visual</li>
        </ul>
      </CardContent>
    </Card>
  );
};
