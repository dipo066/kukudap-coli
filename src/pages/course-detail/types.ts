
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface CourseData {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  instructor: string;
  progress: number;
  modules: Module[];
}
