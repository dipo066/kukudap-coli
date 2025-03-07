
import React from "react";
import { ArrowRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";

interface CourseCategoryProps {
  title: string;
  description?: string;
  courses: {
    id: string;
    title: string;
    description: string;
    image: string;
    level: "Pemula" | "Menengah" | "Lanjutan";
    duration: string;
  }[];
}

const CourseCategory = ({ title, description, courses }: CourseCategoryProps) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <Button variant="ghost" className="gap-2">
          Lihat Semua <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
