
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  level: "Pemula" | "Menengah" | "Lanjutan";
  duration: string;
}

const CourseCard = ({ id, title, description, image, level, duration }: CourseCardProps) => {
  const navigate = useNavigate();
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Pemula":
        return "bg-green-100 text-green-700";
      case "Menengah":
        return "bg-yellow-100 text-yellow-700";
      case "Lanjutan":
        return "bg-red-100 text-red-700";
      default:
        return "bg-purple-100 text-purple-700";
    }
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(level)}`}>{level}</span>
          <span className="text-xs text-gray-500 flex items-center"><Clock className="h-3 w-3 mr-1" />{duration}</span>
        </div>
        <CardTitle className="line-clamp-1 text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="text-sm text-gray-600 flex items-center">
          <User className="h-4 w-4 mr-2" />
          <span>400+ siswa telah mendaftar</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          onClick={() => navigate(`/course/${id}`)} 
          className="w-full bg-purple-700 hover:bg-purple-800"
        >
          Lihat Kursus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
