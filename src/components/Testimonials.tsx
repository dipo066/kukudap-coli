
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arya Wijaya",
      role: "UI/UX Designer",
      company: "Creative Studios",
      text: "Kursus di DesainPro membantu saya menguasai Photoshop dan Illustrator dalam waktu singkat. Materi yang disajikan sangat komprehensif dan mudah dipahami.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=128&h=128"
    },
    {
      id: 2,
      name: "Putri Sari",
      role: "Graphic Designer",
      company: "Digital Agency",
      text: "Dari pemula hingga mampu menghasilkan karya profesional. Terima kasih DesainPro sudah menyediakan kursus desain grafis yang sangat berkualitas!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=128&h=128"
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Brand Manager",
      company: "Startup Indonesia",
      text: "Materi branding dan desain logo yang diajarkan sangat aplikatif untuk kebutuhan bisnis. Mentor-mentornya juga sangat berpengalaman di bidangnya.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=128&h=128"
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Apa Kata Alumni Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman mereka yang telah mengikuti kursus desain grafis di platform kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-500 mb-4" />
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
