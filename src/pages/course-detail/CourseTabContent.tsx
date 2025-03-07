
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CourseContent } from "./CourseContent";
import { CourseOverview } from "./CourseOverview";
import { CourseResources } from "./CourseResources";
import { Module } from "./types";

interface CourseTabContentProps {
  modules: Module[];
}

export const CourseTabContent = ({ modules }: CourseTabContentProps) => {
  return (
    <Tabs defaultValue="content">
      <TabsList className="mb-6">
        <TabsTrigger value="content">Konten Kursus</TabsTrigger>
        <TabsTrigger value="overview">Ringkasan</TabsTrigger>
        <TabsTrigger value="resources">Sumber Daya</TabsTrigger>
      </TabsList>
      
      <TabsContent value="content">
        <CourseContent modules={modules} />
      </TabsContent>
      
      <TabsContent value="overview">
        <CourseOverview />
      </TabsContent>
      
      <TabsContent value="resources">
        <CourseResources />
      </TabsContent>
    </Tabs>
  );
};
