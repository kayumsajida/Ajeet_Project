import { useState } from "react";

const JourneyWealthCreations = [
    { question: "Low ticket sizes", answer: "Start investing in unlisted shares with just 1 share, and in bonds and fixed deposits at very low ticket sizes. It is our goal to make high-performing investments accessible to all." },
    { question: "Zero-commissions, no hidden fees", answer: "Your earnings on InCred Money are yours alone. No transaction fee, no hidden charges and no commission" },
    { question: "No-cost access to experts", answer: "Speak to our experts at no cost, at every step of your investment journey. They are always reachable, and will also offer critical suggestion proactively" }
];

export default function JourneyWealthCreation() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleJourneyWealthCreation = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-10 pb-20">
            <div className="container mx-auto mt-10 bg-white px-4 lg:px-0">
                <div className="text-neutral-400 text-center mb-2">WHY Frontier Asia Capital</div>
                <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">                
                    Your alternate journey to <br/> wealth creation
                </h2>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-3">
                            {JourneyWealthCreations.map((JourneyWealthCreation, index) => (
                                <div key={index} className="border-b border-dashed border-neutral-300 pb-5">
                                    <button
                                        className="w-full flex justify-between items-center py-2 cursor-pointer text-lg focus:outline-none"
                                        onClick={() => toggleJourneyWealthCreation(index)}
                                    >
                                        {JourneyWealthCreation.question}
                                        <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                    {openIndex === index && (
                                        <p className="mt-2 text-gray-600">{JourneyWealthCreation.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src="src/assets/images/right_image.svg" className="h-full object-cover" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}