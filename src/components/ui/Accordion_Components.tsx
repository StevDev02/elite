import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"

export function Accordion_Demo() {
   return (
      <Accordion type="single" collapsible className="w-full lg:w-[881px] lg:max-w-[821px] mt-10">
         <AccordionItem value="item-1">
            <AccordionTrigger>¿Qué es la academia élite?</AccordionTrigger>
            <AccordionContent>
               Academia Élite es una plataforma de aprendizaje en línea que ofrece diferentes materias en diversas áreas del conocimiento, diseñados para proporcionar educación de alto valor a estudiantes de todo el mundo.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-2">
            <AccordionTrigger>¿Cómo se que la academia élite es para ti?</AccordionTrigger>
            <AccordionContent>
               Es ideal para ti si buscas adquirir conocimientos y habilidades de alto valor. Si valoras el aprendizaje interactivo, y el acceso a soporte académico, nuestra academia es perfecta para tus necesidades educativas y profesionales.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-3">
            <AccordionTrigger>¿Cómo se evalúa mi progreso?</AccordionTrigger>
            <AccordionContent>
               Tu progreso en Academia Élite se evalúa a través de rangos donde para avanzar debes ver tus clases, realizar ejercicios prácticos y proyectos. Además, recibirás retroalimentación continua de nuestros instructores para resolver dudas y mejorar tu comprensión de los temas.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-4">
            <AccordionTrigger>¿Cómo funciona la política de reembolso?</AccordionTrigger>
            <AccordionContent>
               Ofrecemos reembolso dentro de un período de 7 días después de la inscripción si no estás satisfecho con la academia. Consulta nuestra política de reembolso completa en nuestro sitio web para más detalles.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-5">
            <AccordionTrigger>¿Puedo interactuar con otros estudiantes?</AccordionTrigger>
            <AccordionContent>
               Sí, en Academia Élite puedes interactuar con otros estudiantes a través de nuestro servidor de discord privado, tu grupo asignado al suscribirte y en sesiones en vivo, lo que facilita el intercambio de ideas y la colaboración en el aprendizaje.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-6">
            <AccordionTrigger>¿Puedo acceder a mis clases en cualquier dispositivo?</AccordionTrigger>
            <AccordionContent>
               Sí, nuestra plataforma es compatible con ordenadores, tabletas, y smartphones, permitiéndote aprender desde cualquier lugar y en cualquier momento.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-7">
            <AccordionTrigger>¿La academia élite es confiable?</AccordionTrigger>
            <AccordionContent>
               Sí, claro que es confiable. Contamos con una sólida política de reembolsos, soporte técnico y académico disponible. Nuestra plataforma es segura y fácil de usar está diseñada para proporcionar una experiencia de aprendizaje efectiva y accesible para todos nuestros estudiantes.
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}
