import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CourseCategory from "@/components/CourseCategory";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Data kursus yang dikelompokkan berdasarkan kategori
  const courseCategories = [{
    id: "basics",
    title: "Dasar-dasar Desain Grafis",
    description: "Pelajari konsep fundamental desain grafis untuk membangun fondasi yang kuat",
    courses: [{
      id: "photoshop-101",
      title: "Pengantar Adobe Photoshop",
      description: "Pelajari dasar-dasar Adobe Photoshop, mulai dari antarmuka hingga manipulasi gambar dasar.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3",
      level: "Pemula" as "Pemula",
      duration: "10 jam"
    }, {
      id: "illustrator-101",
      title: "Dasar-dasar Adobe Illustrator",
      description: "Pelajari cara menggunakan Adobe Illustrator untuk membuat gambar vektor dan ilustrasi.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3",
      level: "Pemula" as "Pemula",
      duration: "8 jam"
    }, {
      id: "design-principles",
      title: "Prinsip-prinsip Desain",
      description: "Memahami prinsip dasar desain seperti kesatuan, keseimbangan, hierarki, dan kontras.",
      image: "https://images.unsplash.com/photo-1634986666676-ec9f8ec8f221?ixlib=rb-4.0.3",
      level: "Pemula" as "Pemula",
      duration: "6 jam"
    }]
  }, {
    id: "intermediate",
    title: "Desain Grafis Tingkat Menengah",
    description: "Tingkatkan keterampilan Anda dengan teknik dan konsep desain lanjutan",
    courses: [{
      id: "typography",
      title: "Tipografi Lanjutan",
      description: "Pelajari seni tipografi dan bagaimana menggunakannya secara efektif dalam desain Anda.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
      level: "Menengah" as "Menengah",
      duration: "7 jam"
    }, {
      id: "branding-design",
      title: "Desain Branding",
      description: "Pelajari cara membuat identitas visual yang kuat untuk brand.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3",
      level: "Menengah" as "Menengah",
      duration: "12 jam"
    }, {
      id: "digital-illustration",
      title: "Ilustrasi Digital",
      description: "Teknik ilustrasi digital untuk desainer, dari sketsa hingga artwork final.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3",
      level: "Menengah" as "Menengah",
      duration: "9 jam"
    }]
  }, {
    id: "advanced",
    title: "Desain Grafis Tingkat Lanjut",
    description: "Kuasai teknik desain tingkat lanjut dan alat-alat profesional",
    courses: [{
      id: "motion-graphics",
      title: "Motion Graphics",
      description: "Pelajari prinsip animasi dan buat motion graphics menarik untuk konten digital.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3",
      level: "Lanjutan" as "Lanjutan",
      duration: "14 jam"
    }, {
      id: "3d-design",
      title: "Desain 3D Fundamental",
      description: "Pelajari dasar-dasar modeling 3D dan integrasi dengan desain grafis 2D.",
      image: "https://images.unsplash.com/photo-1618005198919-177e9dd3b230?ixlib=rb-4.0.3",
      level: "Lanjutan" as "Lanjutan",
      duration: "16 jam"
    }, {
      id: "ux-design",
      title: "UX Design untuk Desainer Grafis",
      description: "Perluas keterampilan Anda ke bidang UX design dengan pendekatan berbasis desain grafis.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3",
      level: "Lanjutan" as "Lanjutan",
      duration: "15 jam"
    }]
  }];
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic would go here
    console.log("Searching for:", searchQuery);
  };
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Jadilah Ahli pencoli pradana Desain Grafis</h1>
              <p className="text-lg md:text-xl mb-8 text-purple-100">Tingkatkan keterampilan desain grafis Anda dengan melihat aji coli kursus-kursus interaktif dari para profesional industri. Mulai dari pemula hingga tingkat lanjut.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-100">
                  Mulai Belajar
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
                  Jelajahi Kursus
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="https://images.unsplash.com/photo-1611162616475-46592b321bf6?ixlib=rb-4.0.3" alt="Designer working" className="rounded-lg w-full max-w-md shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <Input placeholder="Cari kursus desain grafis..." className="pl-10 pr-4 py-6 text-base w-full" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <Button type="submit" className="absolute right-1.5 top-1.5 bg-purple-700 hover:bg-purple-800">
                Cari
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-purple-800">50+</h3>
              <p className="text-gray-600">Kursus Berkualitas</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-800">30+</h3>
              <p className="text-gray-600">Mentor Profesional</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-800">10.000+</h3>
              <p className="text-gray-600">Siswa Aktif</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-800">95%</h3>
              <p className="text-gray-600">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jelajahi Kursus Desain Grafis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tingkatkan keterampilan desain Anda dari dasar hingga tingkat profesional dengan kursus-kursus interaktif kami.
            </p>
          </div>
          
          {courseCategories.map(category => <CourseCategory key={category.id} title={category.title} description={category.description} courses={category.courses} />)}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Menjadi Desainer Grafis Profesional?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan kreatif Anda hari ini dengan kursus-kursus desain grafis kami. 
            Belajar di mana saja dan kapan saja dengan akses seumur hidup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-800 hover:bg-purple-100">
              Daftar Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700/70">
              Hubungi Tim Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DesainPro</h3>
              <p className="text-gray-400">
                Platform pembelajaran desain grafis terbaik di Indonesia dengan mentor-mentor profesional dari industri kreatif.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kursus</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Desain Grafis</a></li>
                <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white">Motion Graphics</a></li>
                <li><a href="#" className="hover:text-white">Ilustrasi Digital</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white">Karir</a></li>
                <li><a href="#" className="hover:text-white">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-white">Kebijakan Privasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 DesainPro. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;