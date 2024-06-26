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
            <AccordionTrigger className="font-bold text-xl text-start">¿Puedo cambiar mi plan de suscripción?</AccordionTrigger>
            <AccordionContent>
            Sí, puedes cambiar tu plan de suscripción en cualquier momento. Simplemente accede a tu cuenta, ve a la sección de planes y pagos, y selecciona el plan al que deseas cambiar y el cambio se aplicará inmediatamente.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-xl text-start">¿Hay alguna diferencia de contenido entre diferentes planes?</AccordionTrigger>
            <AccordionContent>
            Los planes cuentan con diferentes beneficios y contenido, el cual cambia respecto al plan, en ellos ofrecemos diferentes niveles de aprendizaje desde Basic – Master, los planes superiores incluyen beneficios adicionales.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-xl text-start">¿Cómo cancelo mi suscripción?</AccordionTrigger>
            <AccordionContent>
            Puedes cancelar en cualquier momento accediendo a la configuración de suscripción. Una vez cancelada, tendrás acceso a la academia hasta el final del período de suscripción y no se te cobrará en el próximo ciclo.
            </AccordionContent>
         </AccordionItem>
         <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-xl text-start">¿Cómo funciona la política de reembolsos?</AccordionTrigger>
            <AccordionContent>
            Ofrecemos reembolsos dentro de un período de 7 días después de la inscripción si no estás satisfecho con la academia. Consulta nuestra política de reembolsos completa en nuestro sitio web para más detalles.
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}
