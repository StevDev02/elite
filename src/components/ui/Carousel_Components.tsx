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
      imagen_one: 'https://i.ibb.co/z8r7LcJ/Comidas.jpg',
      imagen_two: 'https://i.ibb.co/B3Sszfh/Especializaciones.jpg',
      imagen_three: 'https://i.ibb.co/MfqMsfM/Eventos.jpg',
      imagen_four: 'https://i.ibb.co/37B8xWs/Masterminds.jpg',
      imagen_five: 'https://i.ibb.co/54XF3sV/Networking.jpg',
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
