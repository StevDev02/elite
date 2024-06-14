import { Card, CardContent } from "@/components/ui/card"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"

export function Carousel_Demo() {

   const images = [{
      imagen_one: '../../../public/backgrounds/Carousel_Index/Comidas.jpg',
      imagen_two: '../../../public/backgrounds/Carousel_Index/Eventos.jpg',
      imagen_three: '../../../public/backgrounds/Carousel_Index/Networking.jpg',
      imagen_four: '../../../public/backgrounds/Carousel_Index/Masterminds.jpg',
      imagen_five: '../../../public/backgrounds/Carousel_Index/Especializaciones.jpg',
   }]

   // Extraer las rutas de las imágenes del objeto
   const imagePaths = Object.values(images[0]);

   return (
      <Carousel
         opts={{
            align: "start",
         }}
         className="w-full lg:w-[1051px] lg:max-w-[1051px] mt-10"
      >
         <CarouselContent>
            {imagePaths.map((image, index) => (
               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 relative">
                     <Card className="h-[170px] relative ">
                     <h2 className="absolute glasssCards -translate-y-[50%] -translate-x-[50%] top-[50%] left-[50%] text-white z-50">PROXIMAMENTE</h2>
                        <img className="w-full -z-50 rounded-lg h-full bg-cover" src={image} alt={`Image ${index + 1}`} />
                     </Card>
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
   )
}