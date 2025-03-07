
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Module } from "./types";

interface CourseContentProps {
  modules: Module[];
}

export const CourseContent = ({ modules }: CourseContentProps) => {
  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
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
  );
};
