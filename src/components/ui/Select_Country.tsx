import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "@/components/ui/command"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

const frameworks = [
   {
      value: "mexico",
      label: "+52 - Mexico",
   },
   {
      value: "estados unidos",
      label: "+1 - Estados Unidos",
   },
   {
      value: "ecuador",
      label: "+593 - Ecuador",
   },
   {
      value: "colombia",
      label: "+57 - Colombia",
   },
   {
      value: "argentina",
      label: "+54 - Argentina",
   },
   {
      value: "peru",
      label: "+51 - Peru",
   },
   {
      value: "uruguay",
      label: "+598 - Uruguay",
   },
   {
      value: "brazil",
      label: "+55 - Brazil"
   }, {
      value: "chile",
      label: "+56 - Chile",
   },
]

export function Select_Country() {
   const [open, setOpen] = useState(false)
   const [value, setValue] = useState("")

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className="w-full h-[40px] justify-between"
            >
               {value
                  ? frameworks.find((framework) => framework.value === value)?.label
                  : "Selecciona tu país"}
               <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[200px] p-0">
            <Command>
               <CommandInput placeholder="Search framework..." className="h-9" />
               <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                     {frameworks.map((framework) => (
                        <CommandItem
                           key={framework.value}
                           value={framework.value}
                           onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              setOpen(false)
                           }}
                        >
                           {framework.label}
                           <CheckIcon
                              className={cn(
                                 "ml-auto h-4 w-4",
                                 value === framework.value ? "opacity-100" : "opacity-0"
                              )}
                           />
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   )
}
