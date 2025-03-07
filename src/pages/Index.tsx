
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CourseCategory from "@/components/CourseCategory";

const Index = () => {
  // Data kursus yang dikelompokkan berdasarkan kategori
  const courseCategories = [
    {
      id: "basics",
      title: "Dasar-dasar Desain Grafis",
      description: "Pelajari konsep fundamental desain grafis untuk membangun fondasi yang kuat",
      courses: [
        {
          id: "photoshop-101",
          title: "Pengantar Adobe Photoshop",
          description: "Pelajari dasar-dasar Adobe Photoshop, mulai dari antarmuka hingga manipulasi gambar dasar.",
          image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3",
          level: "Pemula",
          duration: "10 jam"
        },
        {
          id: "illustrator-101",
          title: "Dasar-dasar Adobe Illustrator",
          description: "Pelajari cara menggunakan Adobe Illustrator untuk membuat gambar vektor dan ilustrasi.",
          image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3",
          level: "Pemula",
          duration: "8 jam"
        },
        {
          id: "design-principles",
          title: "Prinsip-prinsip Desain",
          description: "Memahami prinsip dasar desain seperti kesatuan, keseimbangan, hierarki, dan kontras.",
          image: "https://images.unsplash.com/photo-1634986666676-ec9f8ec8f221?ixlib=rb-4.0.3",
          level: "Pemula",
          duration: "6 jam"
        }
      ]
    },
    {
      id: "intermediate",
      title: "Desain Grafis Tingkat Menengah",
      description: "Tingkatkan keterampilan Anda dengan teknik dan konsep desain lanjutan",
      courses: [
        {
          id: "typography",
          title: "Tipografi Lanjutan",
          description: "Pelajari seni tipografi dan bagaimana menggunakannya secara efektif dalam desain Anda.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
          level: "Menengah",
          duration: "7 jam"
        },
        {
          id: "branding-design",
          title: "Desain Branding",
          description: "Pelajari cara membuat identitas visual yang kuat untuk brand.",
          image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3",
          level: "Menengah",
          duration: "12 jam"
        },
        {
          id: "digital-illustration",
          title: "Ilustrasi Digital",
          description: "Teknik ilustrasi digital untuk desainer, dari sketsa hingga artwork final.",
          image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3",
          level: "Menengah",
          duration: "9 jam"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pelajari Desain Grafis Bersama Kami</h1>
            <p className="text-lg md:text-xl mb-8 text-purple-100">
              Tingkatkan keterampilan desain grafis Anda dengan kursus-kursus interaktif 
              dari para profesional industri. Mulai dari pemula hingga tingkat lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-100">
                Mulai Belajar
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
                Jelajahi Kursus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-purple-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Cari kursus desain grafis..."
                className="pl-10 pr-4 py-6 text-base w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {courseCategories.map((category) => (
            <CourseCategory
              key={category.id}
              title={category.title}
              description={category.description}
              courses={category.courses}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Menjadi Desainer Grafis Profesional?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan kreatif Anda hari ini dengan kursus-kursus desain grafis kami. 
            Belajar di mana saja dan kapan saja.
          </p>
          <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
            Daftar Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
