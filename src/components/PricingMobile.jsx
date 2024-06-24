import React from 'react';

const prices = [
    {
        value: "Basico",
        label: [
            {
                value: "Acceso a la academia",
                label: "6 meses",
            }, {
                value: "Nivel de aprendizaje",
                label: "Novato - Intermedio",
            }, {
                value: "flexibilidad con los turnos",
                label: "Matutina",
            }, {
                value: "Soporte y ayuda",
                label: "Basico",
            }, {
                value: "Biblioteca digital",
                label: "Vista previa",
            }, {
                value: "Acceso a discord",
                label: "incluido",
            }, {
                value: "Descargar las clases",
                label: "-",
            }, {
                value: "Eventos exlusivos",
                label: "-",
            }
        ]
    }, {
        value: "Estandar",
        label: [
            {
                value: "Acceso a la academia",
                label: "1 año",
            }, {
                value: "Nivel de aprendizaje",
                label: "Basico - Intermedio",
            }, {
                value: "flexibilidad con los turnos",
                label: "Incluido",
            }, {
                value: "Soporte y ayuda",
                label: "Full",
            }, {
                value: "Biblioteca digital",
                label: "Costo adiccional",
            }, {
                value: "Acceso a discord",
                label: "incluido",
            }, {
                value: "Descargar las clases",
                label: "-",
            }, {
                value: "Eventos exlusivos",
                label: "-",
            }
        ]
    }, {
        value: "Premium",
        label: [
            {
                value: "Acceso a la academia",
                label: "Completa",
            }, {
                value: "Nivel de aprendizaje",
                label: "Basico - Master",
            }, {
                value: "flexibilidad con los turnos",
                label: "Incluido",
            }, {
                value: "Soporte y ayuda",
                label: "Prioritario (Live)",
            }, {
                value: "Biblioteca digital",
                label: "Incluido",
            }, {
                value: "Acceso a discord",
                label: "VIP",
            }, {
                value: "Descargar las clases",
                label: "Incluido",
            }, {
                value: "Eventos exlusivos",
                label: "Incluido",
            }
        ]
    }
];

export function PricingComponents() {
    return (
        <>
            {prices.map((price) => (
                <div className='lg:hidden' key={price.value}>
                    <h2 className="text-3xl pb-5 lg:text-4xl md:text-3xl">Detalles - {price.value}</h2>
                    <ul className="w-full">
                        {price.label.map((detail) => (
                            <li key={detail.value} className="grid w-full font-normal">
                                <h3 className="bg-black rounded-full px-12 py-1 text-white">{detail.value}</h3>
                                <p className="rounded-full px-12 py-1 border border-black">{detail.label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

