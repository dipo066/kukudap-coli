
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CourseHeader } from "./course-detail/CourseHeader";
import { ShareUrlCard } from "./course-detail/ShareUrlCard";
import { CourseTabContent } from "./course-detail/CourseTabContent";
import { CourseSidebar } from "./course-detail/CourseSidebar";
import { CourseData } from "./course-detail/types";

const CourseDetail = () => {
  const { id } = useParams();
  const [shareUrl, setShareUrl] = useState("");

  // Generate share URL when component mounts
  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  // Placeholder data - in a real app, you would fetch this based on the ID
  const courseData: CourseData = {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CourseHeader courseData={courseData} shareUrl={shareUrl} />
          <ShareUrlCard shareUrl={shareUrl} />
          <CourseTabContent modules={courseData.modules} />
        </div>
        
        <div>
          <CourseSidebar courseData={courseData} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
