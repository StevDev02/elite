import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"

export function Accordion_Demo_Pricing() {
   return (
      <Accordion type="single" collapsible className="w-full lg:w-[881px] lg:max-w-[821px] mt-10">
         <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-xl text-start">¿Cómo puedo cambiar mi plan de membresía?</AccordionTrigger>
            <AccordionContent>
               Academia Élite es una plataforma de aprendizaje en línea que ofrece diferentes materias en diversas áreas del conocimiento, diseñados para proporcionar educación de alto valor a estudiantes de todo el mundo.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-xl text-start">¿Puedo cancelar mi membresía en cualquier momento?</AccordionTrigger>
            <AccordionContent>
               Es ideal para ti si buscas adquirir conocimientos y habilidades de alto valor. Si valoras el aprendizaje interactivo, y el acceso a soporte académico, nuestra academia es perfecta para tus necesidades educativas y profesionales.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-xl text-start">¿Cómo puedo acceder al contenido exclusivo para miembros?</AccordionTrigger>
            <AccordionContent>
               Tu progreso en Academia Élite se evalúa a través de rangos donde para avanzar debes ver tus clases, realizar ejercicios prácticos y proyectos. Además, recibirás retroalimentación continua de nuestros instructores para resolver dudas y mejorar tu comprensión de los temas.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-xl text-start">¿Cuál es la política de reembolso en caso de insatisfacción?</AccordionTrigger>
            <AccordionContent>
               Ofrecemos reembolso dentro de un período de 7 días después de la inscripción si no estás satisfecho con la academia. Consulta nuestra política de reembolso completa en nuestro sitio web para más detalles.
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}
