import { useState, useEffect } from "react";
import { Cat, Heart, Info } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive markings and blue eyes." },
  { name: "Persian", description: "Characterized by their long fur and flat faces." },
  { name: "Maine Coon", description: "One of the largest domesticated cat breeds." },
  { name: "Bengal", description: "Known for their wild appearance and spotted coat." },
  { name: "Sphynx", description: "Distinctive for their lack of fur." },
];

const catCareTips = [
  { title: "Proper Nutrition", content: "Feed your cat a balanced diet appropriate for their age and health status." },
  { title: "Regular Vet Check-ups", content: "Schedule annual check-ups to keep your cat healthy and catch any issues early." },
  { title: "Mental Stimulation", content: "Provide toys and play sessions to keep your cat mentally stimulated and happy." },
  { title: "Grooming", content: "Brush your cat regularly to prevent matting and reduce hairballs." },
];

const Index = () => {
  const [factOfTheDay, setFactOfTheDay] = useState("");

  useEffect(() => {
    const facts = [
      "Cats have been domesticated for over 4,000 years.",
      "They can make over 100 different vocal sounds.",
      "A group of cats is called a 'clowder'.",
      "Cats spend 70% of their lives sleeping.",
      "They have an excellent sense of balance and flexible bodies.",
    ];
    setFactOfTheDay(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-purple-800 flex items-center justify-center">
          <Cat className="mr-3 text-pink-600" size={48} /> Purrfect Felines
        </h1>

        <Carousel className="mb-12">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img src={src} alt={`Cat ${index + 1}`} className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center">
              <Info className="mr-2 text-blue-500" /> Cat Fact of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg italic">{factOfTheDay}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <Heart className="mr-2 text-red-500" /> Popular Cat Breeds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {catBreeds.map((breed) => (
                  <div key={breed.name} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg">{breed.name}</h3>
                    <p className="text-gray-600">{breed.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Cat Care Tips</CardTitle>
              <CardDescription>Essential advice for cat owners</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {catCareTips.map((tip, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{tip.title}</AccordionTrigger>
                    <AccordionContent>{tip.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
