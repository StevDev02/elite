const prices = [
    {
        value: "goup_one",
        label: [
            {
                value: "Acceso a la academia",
                label_one: "6 meses",
                label_two: "1 año",
                label_three: "Completa",
            }
        ]
    }, {
        value: "goup_two",
        label: [
            {
                value: "Nivel de aprendizaje",
                label_one: "Novato - Intermedio",
                label_two: "Basico - Intermedio",
                label_three: "Basico - Master",
            }
        ]
    }, {
        value: "goup_three",
        label: [
            {
                value: "flexibilidad con los turnos",
                label_one: "Matutina",
                label_two: "Incluido",
                label_three: "Incluido",
            }
        ]
    }, {
        value: "goup_four",
        label: [
            {
                value: "Soporte y ayuda",
                label_one: "Basico",
                label_two: "Full",
                label_three: "Prioritario (Live)",
            }
        ]
    }, {
        value: "goup_five",
        label: [
            {
                value: "Biblioteca digital",
                label_one: "Vista previa",
                label_two: "Costo adiccional",
                label_three: "Incluido",
            }
        ]
    }, {
        value: "goup_six",
        label: [
            {
                value: "Acceso a discord",
                label_one: "Incluido",
                label_two: "Incluido",
                label_three: "VIP",
            }
        ]
    }, {
        value: "goup_seven",
        label: [
            {
                value: "Descargar las clases",
                label_one: "-",
                label_two: "-",
                label_three: "Incluido",
            }
        ]
    }, {
        value: "goup_eight",
        label: [
            {
                value: "Eventos exlusivos",
                label: "-",
                label_two: "-",
                label_three: "Incluido",
            }
        ]
    }
];

export function PricingPcComponent() {
    return (
        <>
            <ul className="w-full hidden lg:grid -mt-8">
                {prices.map((group, index) => (
                    <li key={index} className={`grid grid-cols-4 text-start items-center justify-center gap-x-28 px-[49px] text-sm font-medium h-[44px] w-[1005px] ${index % 2 === 0 ? 'text-white bg-black rounded-full' : 'border border-black rounded-full'}`}>
                        <h3 className="font-medium">{group.label[0].value}</h3>
                        <p>{group.label[0].label_one}</p>
                        <p>{group.label[0].label_two}</p>
                        <p>{group.label[0].label_three}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

