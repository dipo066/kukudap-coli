
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CourseData } from "./types";

interface CourseSidebarProps {
  courseData: CourseData;
}

export const CourseSidebar = ({ courseData }: CourseSidebarProps) => {
  return (
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
  );
};
