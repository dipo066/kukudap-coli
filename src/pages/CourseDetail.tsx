
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Play } from "lucide-react";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  // Placeholder data - in a real app, you would fetch this based on the ID
  const courseData = {
    title: "Pengantar Adobe Photoshop",
    description: "Pelajari dasar-dasar Adobe Photoshop, mulai dari antarmuka hingga manipulasi gambar dasar.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3",
    level: "Pemula",
    duration: "10 jam",
    instructor: "Budi Santoso",
    progress: 10,
    modules: [
      {
        id: "1",
        title: "Pengenalan dan Antarmuka",
        duration: "45 menit",
        lessons: [
          { id: "1-1", title: "Apa itu Adobe Photoshop", duration: "10 menit", isCompleted: true },
          { id: "1-2", title: "Mengenal Antarmuka Photoshop", duration: "15 menit", isCompleted: false },
          { id: "1-3", title: "Menu dan Toolbar", duration: "20 menit", isCompleted: false },
        ]
      },
      {
        id: "2",
        title: "Dasar-dasar Editing",
        duration: "1 jam 30 menit",
        lessons: [
          { id: "2-1", title: "Layer dan Masking", duration: "30 menit", isCompleted: false },
          { id: "2-2", title: "Selection Tools", duration: "30 menit", isCompleted: false },
          { id: "2-3", title: "Adjustment Layers", duration: "30 menit", isCompleted: false },
        ]
      }
    ]
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Link to="/" className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Beranda
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
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
          
          <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
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
          
          <Tabs defaultValue="content">
            <TabsList className="mb-6">
              <TabsTrigger value="content">Konten Kursus</TabsTrigger>
              <TabsTrigger value="overview">Ringkasan</TabsTrigger>
              <TabsTrigger value="resources">Sumber Daya</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content">
              <div className="space-y-4">
                {courseData.modules.map((module, index) => (
                  <Card key={module.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">
                          Modul {index + 1}: {module.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">{module.duration}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <div 
                            key={lesson.id} 
                            className="flex justify-between items-center p-3 rounded-md hover:bg-secondary"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${lesson.isCompleted ? 'bg-primary' : 'border border-muted-foreground'}`}>
                                {lesson.isCompleted && <span className="text-xs text-white">✓</span>}
                              </div>
                              <span className={lesson.isCompleted ? 'line-through text-muted-foreground' : ''}>
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="overview">
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
            </TabsContent>
            
            <TabsContent value="resources">
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
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="sticky top-8">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Progres Kursus</h3>
              <div className="flex justify-between text-sm mb-2">
                <span>Selesai: {courseData.progress}%</span>
                <span>{courseData.progress}% dari 100%</span>
              </div>
              <Progress value={courseData.progress} className="mb-6" />
              
              <Button className="w-full mb-4">Lanjutkan Belajar</Button>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-4">Instruktur</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium">
                    {courseData.instructor.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium">{courseData.instructor}</p>
                    <p className="text-sm text-muted-foreground">Desainer Grafis Senior</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
