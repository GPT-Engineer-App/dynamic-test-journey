import { useState, useEffect } from "react";
import { Cat, Heart, Info, Sparkles, Paw, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
];

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive markings and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
  { name: "Persian", description: "Characterized by their long fur and flat faces.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
  { name: "Maine Coon", description: "One of the largest domesticated cat breeds.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
  { name: "Bengal", description: "Known for their wild appearance and spotted coat.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
  { name: "Sphynx", description: "Distinctive for their lack of fur.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
];

const catCareTips = [
  { title: "Proper Nutrition", content: "Feed your cat a balanced diet appropriate for their age and health status." },
  { title: "Regular Vet Check-ups", content: "Schedule annual check-ups to keep your cat healthy and catch any issues early." },
  { title: "Mental Stimulation", content: "Provide toys and play sessions to keep your cat mentally stimulated and happy." },
  { title: "Grooming", content: "Brush your cat regularly to prevent matting and reduce hairballs." },
];

const catNames = [
  "Luna", "Milo", "Oliver", "Leo", "Bella", "Lucy", "Nala", "Kitty", "Loki", "Simba",
  "Jack", "Lilly", "Charlie", "Willow", "Smokey", "Oreo", "Ziggy", "Mittens", "Oscar", "Jasper"
];

const Index = () => {
  const [factOfTheDay, setFactOfTheDay] = useState("");
  const [catName, setCatName] = useState("");
  const [showGift, setShowGift] = useState(false);

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

  const generateCatName = () => {
    const randomName = catNames[Math.floor(Math.random() * catNames.length)];
    setCatName(randomName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8 overflow-hidden relative">
      <motion.div
        className="absolute top-4 right-4 z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowGift(!showGift)}
              >
                <Gift className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click for a surprise!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
      <AnimatePresence>
        {showGift && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={() => setShowGift(false)}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">You've got a gift!</h2>
              <p className="text-lg mb-4">Here's a virtual cat toy for your feline friend:</p>
              <motion.div
                className="text-6xl"
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  transition: { duration: 0.5, repeat: Infinity },
                }}
              >
                🐁
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🐾
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center text-purple-800 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <Cat className="mr-3 text-pink-600" size={56} /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Purrfect Felines
          </span>
        </motion.h1>

        <Carousel className="mb-12">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="mb-8 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <Info className="mr-2 text-blue-500" /> Cat Fact of the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p 
                className="text-lg italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {factOfTheDay}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center">
                <Sparkles className="mr-2 text-yellow-500" /> Cat Name Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <motion.p 
                className="text-lg font-medium"
                key={catName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {catName || "Click to generate a cat name!"}
              </motion.p>
              <Button 
                onClick={generateCatName} 
                variant="outline"
                className="group"
              >
                Generate Name
                <Paw className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold flex items-center">
                  <Heart className="mr-2 text-red-500" /> Popular Cat Breeds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {catBreeds.map((breed, index) => (
                    <motion.div
                      key={breed.name}
                      className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <img src={breed.image} alt={breed.name} className="w-16 h-16 rounded-full object-cover" />
                        <div>
                          <h3 className="font-semibold text-lg">{breed.name}</h3>
                          <p className="text-gray-600">{breed.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Cat Care Tips</CardTitle>
                <CardDescription>Essential advice for cat owners</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {catCareTips.map((tip, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center"
                        >
                          <Badge variant="outline" className="mr-2">Tip {index + 1}</Badge>
                          {tip.title}
                        </motion.div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {tip.content}
                        </motion.p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
