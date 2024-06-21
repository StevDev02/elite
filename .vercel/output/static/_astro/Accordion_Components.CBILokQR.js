import{j as a}from"./jsx-runtime.BQrSPCSS.js";import{r as i,R as C,a as ge}from"./index.Cj_FO6QK.js";import{u as w,S as $,c as be,a as q}from"./utils.HhGvp5I1.js";import{r as Ae}from"./index.DQ3ZIq-x.js";function z(e,t=[]){let o=[];function n(s,c){const d=i.createContext(c),u=o.length;o=[...o,c];function l(p){const{scope:A,children:v,...x}=p,g=A?.[e][u]||d,h=i.useMemo(()=>x,Object.values(x));return a.jsx(g.Provider,{value:h,children:v})}function m(p,A){const v=A?.[e][u]||d,x=i.useContext(v);if(x)return x;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${s}\``)}return l.displayName=s+"Provider",[l,m]}const r=()=>{const s=o.map(c=>i.createContext(c));return function(d){const u=d?.[e]||s;return i.useMemo(()=>({[`__scope${e}`]:{...d,[e]:u}}),[d,u])}};return r.scopeName=e,[n,Ne(r,...t)]}function Ne(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const c=n.reduce((d,{useScope:u,scopeName:l})=>{const p=u(s)[`__scope${l}`];return{...d,...p}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return o.scopeName=t.scopeName,o}function Re(e){const t=e+"CollectionProvider",[o,n]=z(t),[r,s]=o(t,{collectionRef:{current:null},itemMap:new Map}),c=v=>{const{scope:x,children:g}=v,h=C.useRef(null),b=C.useRef(new Map).current;return a.jsx(r,{scope:x,itemMap:b,collectionRef:h,children:g})};c.displayName=t;const d=e+"CollectionSlot",u=C.forwardRef((v,x)=>{const{scope:g,children:h}=v,b=s(d,g),f=w(x,b.collectionRef);return a.jsx($,{ref:f,children:h})});u.displayName=d;const l=e+"CollectionItemSlot",m="data-radix-collection-item",p=C.forwardRef((v,x)=>{const{scope:g,children:h,...b}=v,f=C.useRef(null),N=w(x,f),y=s(l,g);return C.useEffect(()=>(y.itemMap.set(f,{ref:f,...b}),()=>void y.itemMap.delete(f))),a.jsx($,{[m]:"",ref:N,children:h})});p.displayName=l;function A(v){const x=s(e+"CollectionConsumer",v);return C.useCallback(()=>{const h=x.collectionRef.current;if(!h)return[];const b=Array.from(h.querySelectorAll(`[${m}]`));return Array.from(x.itemMap.values()).sort((y,P)=>b.indexOf(y.ref.current)-b.indexOf(P.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:u,ItemSlot:p},A,n]}function Y(e,t,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e?.(r),o===!1||!r.defaultPrevented)return t?.(r)}}function J(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...o)=>t.current?.(...o),[])}function H({prop:e,defaultProp:t,onChange:o=()=>{}}){const[n,r]=ye({defaultProp:t,onChange:o}),s=e!==void 0,c=s?e:n,d=J(o),u=i.useCallback(l=>{if(s){const p=typeof l=="function"?l(e):l;p!==e&&d(p)}else r(l)},[s,e,r,d]);return[c,u]}function ye({defaultProp:e,onChange:t}){const o=i.useState(e),[n]=o,r=i.useRef(n),s=J(t);return i.useEffect(()=>{r.current!==n&&(s(n),r.current=n)},[n,r,s]),o}var je=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_=je.reduce((e,t)=>{const o=i.forwardRef((n,r)=>{const{asChild:s,...c}=n,d=s?$:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(d,{...c,ref:r})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),O=globalThis?.document?i.useLayoutEffect:()=>{};function Ie(e,t){return i.useReducer((o,n)=>t[o][n]??o,e)}var X=e=>{const{present:t,children:o}=e,n=Se(t),r=typeof o=="function"?o({present:n.isPresent}):i.Children.only(o),s=w(n.ref,Pe(r));return typeof o=="function"||n.isPresent?i.cloneElement(r,{ref:s}):null};X.displayName="Presence";function Se(e){const[t,o]=i.useState(),n=i.useRef({}),r=i.useRef(e),s=i.useRef("none"),c=e?"mounted":"unmounted",[d,u]=Ie(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const l=E(n.current);s.current=d==="mounted"?l:"none"},[d]),O(()=>{const l=n.current,m=r.current;if(m!==e){const A=s.current,v=E(l);e?u("MOUNT"):v==="none"||l?.display==="none"?u("UNMOUNT"):u(m&&A!==v?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),O(()=>{if(t){const l=p=>{const v=E(n.current).includes(p.animationName);p.target===t&&v&&Ae.flushSync(()=>u("ANIMATION_END"))},m=p=>{p.target===t&&(s.current=E(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",l),t.addEventListener("animationend",l),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",l),t.removeEventListener("animationend",l)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:i.useCallback(l=>{l&&(n.current=getComputedStyle(l)),o(l)},[])}}function E(e){return e?.animationName||"none"}function Pe(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var we=ge.useId||(()=>{}),_e=0;function Z(e){const[t,o]=i.useState(we());return O(()=>{o(n=>n??String(_e++))},[e]),t?`radix-${t}`:""}var V="Collapsible",[Ee,ee]=z(V),[Oe,W]=Ee(V),te=i.forwardRef((e,t)=>{const{__scopeCollapsible:o,open:n,defaultOpen:r,disabled:s,onOpenChange:c,...d}=e,[u=!1,l]=H({prop:n,defaultProp:r,onChange:c});return a.jsx(Oe,{scope:o,disabled:s,contentId:Z(),open:u,onOpenToggle:i.useCallback(()=>l(m=>!m),[l]),children:a.jsx(_.div,{"data-state":G(u),"data-disabled":s?"":void 0,...d,ref:t})})});te.displayName=V;var oe="CollapsibleTrigger",ne=i.forwardRef((e,t)=>{const{__scopeCollapsible:o,...n}=e,r=W(oe,o);return a.jsx(_.button,{type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":G(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled,...n,ref:t,onClick:Y(e.onClick,r.onOpenToggle)})});ne.displayName=oe;var B="CollapsibleContent",re=i.forwardRef((e,t)=>{const{forceMount:o,...n}=e,r=W(B,e.__scopeCollapsible);return a.jsx(X,{present:o||r.open,children:({present:s})=>a.jsx(Me,{...n,ref:t,present:s})})});re.displayName=B;var Me=i.forwardRef((e,t)=>{const{__scopeCollapsible:o,present:n,children:r,...s}=e,c=W(B,o),[d,u]=i.useState(n),l=i.useRef(null),m=w(t,l),p=i.useRef(0),A=p.current,v=i.useRef(0),x=v.current,g=c.open||d,h=i.useRef(g),b=i.useRef();return i.useEffect(()=>{const f=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(f)},[]),O(()=>{const f=l.current;if(f){b.current=b.current||{transitionDuration:f.style.transitionDuration,animationName:f.style.animationName},f.style.transitionDuration="0s",f.style.animationName="none";const N=f.getBoundingClientRect();p.current=N.height,v.current=N.width,h.current||(f.style.transitionDuration=b.current.transitionDuration,f.style.animationName=b.current.animationName),u(n)}},[c.open,n]),a.jsx(_.div,{"data-state":G(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!g,...s,ref:m,style:{"--radix-collapsible-content-height":A?`${A}px`:void 0,"--radix-collapsible-content-width":x?`${x}px`:void 0,...e.style},children:g&&r})});function G(e){return e?"open":"closed"}var Te=te,De=ne,ke=re,Le=i.createContext(void 0);function $e(e){const t=i.useContext(Le);return e||t||"ltr"}var R="Accordion",Ue=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[K,qe,ze]=Re(R),[T,nt]=z(R,[ze,ee]),F=ee(),se=C.forwardRef((e,t)=>{const{type:o,...n}=e,r=n,s=n;return a.jsx(K.Provider,{scope:e.__scopeAccordion,children:o==="multiple"?a.jsx(Be,{...s,ref:t}):a.jsx(We,{...r,ref:t})})});se.displayName=R;var[ae,He]=T(R),[ce,Ve]=T(R,{collapsible:!1}),We=C.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:r=()=>{},collapsible:s=!1,...c}=e,[d,u]=H({prop:o,defaultProp:n,onChange:r});return a.jsx(ae,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:u,onItemClose:C.useCallback(()=>s&&u(""),[s,u]),children:a.jsx(ce,{scope:e.__scopeAccordion,collapsible:s,children:a.jsx(ie,{...c,ref:t})})})}),Be=C.forwardRef((e,t)=>{const{value:o,defaultValue:n,onValueChange:r=()=>{},...s}=e,[c=[],d]=H({prop:o,defaultProp:n,onChange:r}),u=C.useCallback(m=>d((p=[])=>[...p,m]),[d]),l=C.useCallback(m=>d((p=[])=>p.filter(A=>A!==m)),[d]);return a.jsx(ae,{scope:e.__scopeAccordion,value:c,onItemOpen:u,onItemClose:l,children:a.jsx(ce,{scope:e.__scopeAccordion,collapsible:!0,children:a.jsx(ie,{...s,ref:t})})})}),[Ge,D]=T(R),ie=C.forwardRef((e,t)=>{const{__scopeAccordion:o,disabled:n,dir:r,orientation:s="vertical",...c}=e,d=C.useRef(null),u=w(d,t),l=qe(o),p=$e(r)==="ltr",A=Y(e.onKeyDown,v=>{if(!Ue.includes(v.key))return;const x=v.target,g=l().filter(L=>!L.ref.current?.disabled),h=g.findIndex(L=>L.ref.current===x),b=g.length;if(h===-1)return;v.preventDefault();let f=h;const N=0,y=b-1,P=()=>{f=h+1,f>y&&(f=N)},k=()=>{f=h-1,f<N&&(f=y)};switch(v.key){case"Home":f=N;break;case"End":f=y;break;case"ArrowRight":s==="horizontal"&&(p?P():k());break;case"ArrowDown":s==="vertical"&&P();break;case"ArrowLeft":s==="horizontal"&&(p?k():P());break;case"ArrowUp":s==="vertical"&&k();break}const he=f%b;g[he].ref.current?.focus()});return a.jsx(Ge,{scope:o,disabled:n,direction:r,orientation:s,children:a.jsx(K.Slot,{scope:o,children:a.jsx(_.div,{...c,"data-orientation":s,ref:u,onKeyDown:n?void 0:A})})})}),M="AccordionItem",[Ke,Q]=T(M),le=C.forwardRef((e,t)=>{const{__scopeAccordion:o,value:n,...r}=e,s=D(M,o),c=He(M,o),d=F(o),u=Z(),l=n&&c.value.includes(n)||!1,m=s.disabled||e.disabled;return a.jsx(Ke,{scope:o,open:l,disabled:m,triggerId:u,children:a.jsx(Te,{"data-orientation":s.orientation,"data-state":ve(l),...d,...r,ref:t,disabled:m,open:l,onOpenChange:p=>{p?c.onItemOpen(n):c.onItemClose(n)}})})});le.displayName=M;var de="AccordionHeader",ue=C.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=D(R,o),s=Q(de,o);return a.jsx(_.h3,{"data-orientation":r.orientation,"data-state":ve(s.open),"data-disabled":s.disabled?"":void 0,...n,ref:t})});ue.displayName=de;var U="AccordionTrigger",pe=C.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=D(R,o),s=Q(U,o),c=Ve(U,o),d=F(o);return a.jsx(K.ItemSlot,{scope:o,children:a.jsx(De,{"aria-disabled":s.open&&!c.collapsible||void 0,"data-orientation":r.orientation,id:s.triggerId,...d,...n,ref:t})})});pe.displayName=U;var fe="AccordionContent",me=C.forwardRef((e,t)=>{const{__scopeAccordion:o,...n}=e,r=D(R,o),s=Q(fe,o),c=F(o);return a.jsx(ke,{role:"region","aria-labelledby":s.triggerId,"data-orientation":r.orientation,...c,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});me.displayName=fe;function ve(e){return e?"open":"closed"}var Fe=se,Qe=le,Ye=ue,xe=pe,Ce=me;/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Xe=Fe,j=i.forwardRef(({className:e,...t},o)=>a.jsx(Qe,{ref:o,className:q("border-b",e),...t}));j.displayName="AccordionItem";const I=i.forwardRef(({className:e,children:t,...o},n)=>a.jsx(Ye,{className:"flex",children:a.jsxs(xe,{ref:n,className:q("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...o,children:[t,a.jsx(Je,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));I.displayName=xe.displayName;const S=i.forwardRef(({className:e,children:t,...o},n)=>a.jsx(Ce,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:a.jsx("div",{className:q("pb-4 pt-0",e),children:t})}));S.displayName=Ce.displayName;function rt(){return a.jsxs(Xe,{type:"single",collapsible:!0,className:"w-full lg:w-[881px] lg:max-w-[821px] mt-10",children:[a.jsxs(j,{value:"item-1",children:[a.jsx(I,{children:"¿Qué es la academia élite?"}),a.jsx(S,{children:"Academia Élite es una plataforma de aprendizaje en línea que ofrece diferentes materias en diversas áreas del conocimiento, diseñados para proporcionar educación de alto valor a estudiantes de todo el mundo."})]}),a.jsxs(j,{value:"item-2",children:[a.jsx(I,{children:"¿Cómo se que la academia élite es para ti?"}),a.jsx(S,{children:"Es ideal para ti si buscas adquirir conocimientos y habilidades de alto valor. Si valoras el aprendizaje interactivo, y el acceso a soporte académico, nuestra academia es perfecta para tus necesidades educativas y profesionales."})]}),a.jsxs(j,{value:"item-3",children:[a.jsx(I,{children:"¿Cómo se evalúa mi progreso?"}),a.jsx(S,{children:"Tu progreso en Academia Élite se evalúa a través de rangos donde para avanzar debes ver tus clases, realizar ejercicios prácticos y proyectos. Además, recibirás retroalimentación continua de nuestros instructores para resolver dudas y mejorar tu comprensión de los temas."})]}),a.jsxs(j,{value:"item-4",children:[a.jsx(I,{children:"¿Cómo funciona la política de reembolso?"}),a.jsx(S,{children:"Ofrecemos reembolso dentro de un período de 7 días después de la inscripción si no estás satisfecho con la academia. Consulta nuestra política de reembolso completa en nuestro sitio web para más detalles."})]}),a.jsxs(j,{value:"item-5",children:[a.jsx(I,{children:"¿Puedo interactuar con otros estudiantes?"}),a.jsx(S,{children:"Sí, en Academia Élite puedes interactuar con otros estudiantes a través de nuestro servidor de discord privado, tu grupo asignado al suscribirte y en sesiones en vivo, lo que facilita el intercambio de ideas y la colaboración en el aprendizaje."})]}),a.jsxs(j,{value:"item-6",children:[a.jsx(I,{children:"¿Puedo acceder a mis clases en cualquier dispositivo?"}),a.jsx(S,{children:"Sí, nuestra plataforma es compatible con ordenadores, tabletas, y smartphones, permitiéndote aprender desde cualquier lugar y en cualquier momento."})]}),a.jsxs(j,{value:"item-7",children:[a.jsx(I,{children:"¿La academia élite es confiable?"}),a.jsx(S,{children:"Sí, claro que es confiable. Contamos con una sólida política de reembolsos, soporte técnico y académico disponible. Nuestra plataforma es segura y fácil de usar está diseñada para proporcionar una experiencia de aprendizaje efectiva y accesible para todos nuestros estudiantes."})]})]})}export{rt as Accordion_Demo};