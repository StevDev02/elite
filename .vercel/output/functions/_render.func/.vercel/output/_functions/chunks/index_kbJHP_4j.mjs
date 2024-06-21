/* empty css                             */
import { q as createComponent, s as renderTemplate, w as renderComponent, t as maybeRenderHead } from './astro/server_BW4OokxZ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { $ as $$Layout } from './Layout_BzrTBzrA.mjs';
/* empty css                         */

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: " overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

function Carousel_Demo() {
  const images = [{
    imagen_one: "https://i.ibb.co/z8r7LcJ/Comidas.jpg",
    imagen_two: "https://i.ibb.co/B3Sszfh/Especializaciones.jpg",
    imagen_three: "https://i.ibb.co/MfqMsfM/Eventos.jpg",
    imagen_four: "https://i.ibb.co/37B8xWs/Masterminds.jpg",
    imagen_five: "https://i.ibb.co/54XF3sV/Networking.jpg"
  }];
  const imagePaths = Object.values(images[0]);
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "start"
      },
      className: "w-full lg:w-[1051px] lg:max-w-[1051px] mt-10",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: imagePaths.map((image, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsx("div", { className: "p-1 relative", children: /* @__PURE__ */ jsxs(Card, { className: "h-[170px] relative ", children: [
          /* @__PURE__ */ jsx("h2", { className: "absolute glasssCards -translate-y-[50%] -translate-x-[50%] top-[50%] left-[50%] text-white z-50", children: "PROXIMAMENTE" }),
          /* @__PURE__ */ jsx("img", { className: "w-full -z-50 rounded-lg h-full bg-cover", src: image, alt: `Image ${index + 1}` })
        ] }) }) }, index)) }),
        /* @__PURE__ */ jsx(CarouselPrevious, {}),
        /* @__PURE__ */ jsx(CarouselNext, {})
      ]
    }
  );
}

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

function Accordion_Demo() {
  return /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "w-full lg:w-[881px] lg:max-w-[821px] mt-10", children: [
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "¿Qué es la academia élite?" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Academia Élite es una plataforma de aprendizaje en línea que ofrece diferentes materias en diversas áreas del conocimiento, diseñados para proporcionar educación de alto valor a estudiantes de todo el mundo." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-2", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "¿Cómo se que la academia élite es para ti?" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Es ideal para ti si buscas adquirir conocimientos y habilidades de alto valor. Si valoras el aprendizaje interactivo, y el acceso a soporte académico, nuestra academia es perfecta para tus necesidades educativas y profesionales." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-3", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "¿Cómo se evalúa mi progreso?" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Tu progreso en Academia Élite se evalúa a través de rangos donde para avanzar debes ver tus clases, realizar ejercicios prácticos y proyectos. Además, recibirás retroalimentación continua de nuestros instructores para resolver dudas y mejorar tu comprensión de los temas." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-4", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "¿Cómo funciona la política de reembolso?" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Ofrecemos reembolso dentro de un período de 7 días después de la inscripción si no estás satisfecho con la academia. Consulta nuestra política de reembolso completa en nuestro sitio web para más detalles." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-5", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "¿Puedo interactuar con otros estudiantes?" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Sí, en Academia Élite puedes interactuar con otros estudiantes a través de nuestro servidor de discord privado, tu grupo asignado al suscribirte y en sesiones en vivo, lo que facilita el intercambio de ideas y la colaboración en el aprendizaje." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-6", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "¿Puedo acceder a mis clases en cualquier dispositivo?" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Sí, nuestra plataforma es compatible con ordenadores, tabletas, y smartphones, permitiéndote aprender desde cualquier lugar y en cualquier momento." })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-7", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "¿La academia élite es confiable?" }),
      /* @__PURE__ */ jsx(AccordionContent, { children: "Sí, claro que es confiable. Contamos con una sólida política de reembolsos, soporte técnico y académico disponible. Nuestra plataforma es segura y fácil de usar está diseñada para proporcionar una experiencia de aprendizaje efectiva y accesible para todos nuestros estudiantes." })
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Home", $$Layout, { "title_page": "Inicio", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""], "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="flex items-center justify-start w-full px-8 py-1 h-14" data-astro-cid-j7pv25f6> <div class="w-full lg:hidden md:hidden" data-astro-cid-j7pv25f6> <div class="flex items-center justify-between w-full" data-astro-cid-j7pv25f6> <div class="cursor-pointer active:bg-[#e4e4e7] p-2 rounded-full" data-astro-cid-j7pv25f6> <svg class="dark:text-white" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path fill="none" stroke="currentColor" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-j7pv25f6></path></svg> </div> </div> </div> <div class="grid place-content-center w-full" data-astro-cid-j7pv25f6> <div class="md:w-[639px] lg:w-[1039px] lg:max-w-[1039px] items-center justify-between hidden w-full h-full p-0 m-0 md:flex lg:flex" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center p-0 m-0 md:cursor-pointer lg:cursor-pointer lg:w-14 md:h-14 md:w-14 lg:h-14" data-astro-cid-j7pv25f6> <a href="/" data-astro-cid-j7pv25f6> <svg class="dark:text-white" fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet" data-astro-cid-j7pv25f6> <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" stroke="none" data-astro-cid-j7pv25f6> <path d="M6105 6208 l-1117 -1123 -1114 1120 -1114 1120 0 -2217 c0 -2101 1
                    -2218 18 -2227 14 -9 185 157 1120 1092 l1102 1102 0 -1108 0 -1107 1115 0
                    1115 0 0 2235 c0 1229 -2 2235 -4 2235 -2 0 -507 -505 -1121 -1122z" data-astro-cid-j7pv25f6></path> </g> </svg> </a> </div> <div class="flex items-center justify-center gap-6" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center gap-1 lg:text-base" data-astro-cid-j7pv25f6> <a href="/signin" class="cursor-pointer dark:text-white md:text-sm lg:text-sm md:lg:font-semibold lg:font-semibold " data-astro-cid-j7pv25f6>Iniciar Sesion</a> </div> <a href="/register" class="md:w-[120px] lg:w-[120px] md:h-7 lg:h-7 hover:font-medium dark:hover:font-light dark:font-medium bg-black dark:bg-white  my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full  before:w-full before:h-full dark:hover:text-white before:shadow-2xl before:bg-gradient-to-r before:from-[#fff] hover:text-black before:to-[#fff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 dark:before:from-[#000] dark:before:to-[#000] text-white dark:text-black" data-astro-cid-j7pv25f6>Unete</a> </div> </div> </div> </nav> <main class="grid place-content-center w-full" data-astro-cid-j7pv25f6> <section class="w-full grid place-content-center" data-astro-cid-j7pv25f6> <section class="w-full lg:w-[1039px]  pt-20 flex-col-reverse text-center items-center justify-center md:pt-32 lg:flex-row flex" data-astro-cid-j7pv25f6> <div class="flex flex-col p-2 dark:text-white md:gap-3 lg:gap-5" data-astro-cid-j7pv25f6> <h1 class="flex flex-col flex-wrap pb-5 text-xl lg:text-3xl md:text-3xl" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>¿Estas cansado de esas aburridas</span> <span data-astro-cid-j7pv25f6>materias de tu escuela?</span> </h1> <p class="flex flex-col text-sm font-medium md:text-base md:font-medium lg:text-lg lg:font-medium" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Deja los libros de texto por un momento y</span> <span data-astro-cid-j7pv25f6>sumérgete en el mundo de conocimientos</span> <span data-astro-cid-j7pv25f6>que solo la Academia Elite te puede ofrecer.</span> <span data-astro-cid-j7pv25f6>Aprende, innova y lidera!</span> </p> </div> <img src="/ilustraciones/ilustration_one.png" alt="" data-astro-cid-j7pv25f6> </section> </section> <section class="flex flex-col items-center justify-center gap-8 p-2 mt-20 lg:gap-4 md:gap-0 " data-astro-cid-j7pv25f6> <h2 class="text-2xl text-center lg:text-3xl md:text-3xl" data-astro-cid-j7pv25f6>El punto de partida de todo <br data-astro-cid-j7pv25f6>logro es el deseo</h2> <ul class="grid items-center justify-center gap-6 md:mt-12 md:grid-cols-2" data-astro-cid-j7pv25f6> <li class="w-[350px] lg:w-[380px] lg:p-0 lg:h-[210px] md:text-sm p-2 flex flex-col items-center justify-center text-center h-[240px] rounded-lg border border-[#0000007c] lg:gap-1 " data-astro-cid-j7pv25f6> <img class="w-[18%] " src="/ilustraciones/llamadas_ilustration.png" alt="" data-astro-cid-j7pv25f6> <h2 class="text-xl" data-astro-cid-j7pv25f6>Llamadas semanales</h2> <p data-astro-cid-j7pv25f6>Habra llamadas semanales todos los <br data-astro-cid-j7pv25f6>
meses para aclarar tus dudas sobre <br data-astro-cid-j7pv25f6>
ciertos temas.</p> </li> <li class="w-[350px] lg:w-[380px] lg:p-0 lg:h-[210px] md:text-sm p-2 flex flex-col items-center justify-center text-center h-[240px] rounded-lg border border-[#0000007c] lg:gap-1 " data-astro-cid-j7pv25f6> <img class="w-[18%]" src="ilustraciones/contenido_ilustration.png" alt="" data-astro-cid-j7pv25f6> <h2 class="text-xl" data-astro-cid-j7pv25f6>+120 hrs de contenido</h2> <p data-astro-cid-j7pv25f6>Disfruta de una valiosa biblioteca con <br data-astro-cid-j7pv25f6>
+120 horas de contenido de formacion, <br data-astro-cid-j7pv25f6>
impartida por expertos en cada disciplina</p> </li> <li class="w-[350px] lg:w-[380px] lg:p-0 lg:h-[210px] md:text-sm p-2 flex flex-col items-center justify-center text-center h-[240px] rounded-lg border border-[#0000007c] lg:gap-1 " data-astro-cid-j7pv25f6> <img class="w-[18%] " src="ilustraciones/discord_ilustration.png" alt="" data-astro-cid-j7pv25f6> <h2 class="text-xl" data-astro-cid-j7pv25f6>Acceso a la comunidad</h2> <p data-astro-cid-j7pv25f6>Ten acceso a nuestra comunidad de <br data-astro-cid-j7pv25f6>
discord en donde conoceras a gente <br data-astro-cid-j7pv25f6>
con tu misma mentalidad</p> </li> <li class="w-[350px] lg:w-[380px] lg:p-0 lg:h-[210px] md:text-sm p-2 flex flex-col items-center justify-center text-center h-[240px] rounded-lg border border-[#0000007c] lg:gap-1 " data-astro-cid-j7pv25f6> <img class="w-[18%] " src="/ilustraciones/biblioteca_ilustration.png" alt="" data-astro-cid-j7pv25f6> <h2 class="text-xl" data-astro-cid-j7pv25f6>Biblioteca digital</h2> <p data-astro-cid-j7pv25f6>
Ten acceso a toda un libreria digiltal <br data-astro-cid-j7pv25f6>
con +1,000 libros, con los cuales podras <br data-astro-cid-j7pv25f6>
reforzar tu aprendizaje obtenido
</p> </li> </ul> </section> <section class="flex flex-col items-center justify-center gap-8 p-2 mt-20 lg:gap-4 md:gap-0" data-astro-cid-j7pv25f6> <h2 class="text-2xl text-center lg:text-3xl md:text-3xl" data-astro-cid-j7pv25f6>La plataforma que te permitirá <br data-astro-cid-j7pv25f6>elevar tu potencial al maximo</h2> <ul class="grid gap-4 text-center md:grid-cols-2 lg:grid-cols-4 md:p-8" data-astro-cid-j7pv25f6> <li class="px-6 py-1 text-white bg-black rounded-full" data-astro-cid-j7pv25f6>Finanzas</li> <li class="px-8 py-1 border border-black rounded-full cursor-pointer hover:bg-black hover:text-white" data-astro-cid-j7pv25f6>Desarrollo P.</li> <li class="px-8 py-1 border border-black rounded-full cursor-pointer hover:bg-black hover:text-white" data-astro-cid-j7pv25f6>Emprendimiento </li> <li class="px-8 py-1 border border-black rounded-full cursor-pointer hover:bg-black hover:text-white" data-astro-cid-j7pv25f6>Deporte y nutrición</li> </ul> <div class="flex lg:ml-32 flex-col items-center justify-center lg:flex-row" data-astro-cid-j7pv25f6> <div class="w-[500px] lg:grid lg:place-content-center lg:h-[349px] " data-astro-cid-j7pv25f6> <img class="cover" src="/ilustraciones/ilustration_dos.png" alt="" data-astro-cid-j7pv25f6> </div> <div class="flex lg:-ml-12 lg:w-[520px] lg:gap-3 px-20 justify-center flex-col gap-6" data-astro-cid-j7pv25f6> <h5 class="" data-astro-cid-j7pv25f6>Finanzas</h5> <h2 class="text-xl text-center lg:text-start lg:text-3xl md:text-3xl" data-astro-cid-j7pv25f6>Vence los desafios del Mundo financiero</h2> <ul class="flex flex-col gap-4 lg:gap-4" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6> <p class="lg:text-sm" data-astro-cid-j7pv25f6><span class="font-bold lg:text-base" data-astro-cid-j7pv25f6>• Presupuestos:</span>
planifica tus gastos estableciendo
                      prioridades y organizando tus ingresos</p> </li> <li data-astro-cid-j7pv25f6> <p class="lg:text-sm" data-astro-cid-j7pv25f6><span class="font-bold lg:text-base" data-astro-cid-j7pv25f6>• Inversion:</span>
sobre cómo invertir para obtener
                      rendimientos y aumentar eI patrimonio</p> </li> <li data-astro-cid-j7pv25f6> <p class="lg:text-sm" data-astro-cid-j7pv25f6><span class="font-bold lg:text-base" data-astro-cid-j7pv25f6>• Credito:</span>
Entender las ventajas y desventajas de
                      los créditos, y cómo utilizarlos de manera inteligente</p> </li> </ul> </div> </div> </section> <section class="flex flex-col items-center justify-center gap-8 p-2 px-8 mt-20 md:px-16 lg:px-60 lg:gap-4 md:gap-0" data-astro-cid-j7pv25f6> <h2 class="text-xl text-center uppercase lg:text-3xl md:text-3xl" data-astro-cid-j7pv25f6>Preguntas frecuentes</h2> ${renderComponent($$result2, "Accordion_Demo", Accordion_Demo, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/Accordion_Components", "client:component-export": "Accordion_Demo", "data-astro-cid-j7pv25f6": true })} <button class="px-10 py-1 mt-8 text-white bg-black rounded-full" data-astro-cid-j7pv25f6>Unete</button> </section> <section class="flex flex-col items-center justify-center gap-8 p-2 px-8 mt-20 md:px-16 lg:px-60 lg:gap-4 md:gap-0" data-astro-cid-j7pv25f6> <h2 class="text-xl text-center uppercase lg:text-3xl md:text-3xl" data-astro-cid-j7pv25f6>Proximamente</h2> ${renderComponent($$result2, "Carousel_Demo", Carousel_Demo, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ui/Carousel_Components", "client:component-export": "Carousel_Demo", "data-astro-cid-j7pv25f6": true })} </section> <section class="w-full lg:flex lg:flex-row lg:mx-0 lg:gap-20 md:grid md:grid-cols-2 items-center justify-center mt-40 md:h-[40vh] h-[92vh] flex flex-col gap-8 " data-astro-cid-j7pv25f6> <ul class="flex flex-col items-center justify-center gap-2" data-astro-cid-j7pv25f6> <li class="px-6 py-1 text-white bg-black rounded-full" data-astro-cid-j7pv25f6>Sobre Nosotros</li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Sobre la Academia</a></li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Iniciar Sesion</a></li> </ul> <ul class="flex flex-col items-center justify-center gap-2 md:mt-8" data-astro-cid-j7pv25f6> <li class="px-6 py-1 text-white bg-black rounded-full" data-astro-cid-j7pv25f6>Recursos</li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Archivos Adjuntos</a></li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Podcasts</a></li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Libro Recomendados</a></li> </ul> <ul class="flex flex-col items-center justify-center gap-2 md:mt-8" data-astro-cid-j7pv25f6> <li class="px-6 py-1 text-white bg-black rounded-full" data-astro-cid-j7pv25f6>Enlaces de Ayuda</li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Politica de Privacidad</a></li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Politica de Cookies</a></li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Terminos y Condiciones</a></li> </ul> <ul class="flex flex-col items-center justify-center gap-2" data-astro-cid-j7pv25f6> <li class="px-6 py-1 text-white bg-black rounded-full" data-astro-cid-j7pv25f6>Datos de Contacto</li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Correo Electrónico</a></li> <li class="mt-1 hover_li" data-astro-cid-j7pv25f6><a href="" data-astro-cid-j7pv25f6>Redes Sociales</a></li> </ul> </section> </main> ` })} `;
}, "C:/Users/stevd/Github/elite/src/pages/index.astro", void 0);

const $$file = "C:/Users/stevd/Github/elite/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
