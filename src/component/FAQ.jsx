import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
    { question: "What are Unlisted Shares and Pre-IPO shares?", answer: "Shares of a company that are not yet listed on the Stock Exchanges like BSE, NSE are called Unlisted Shares. Pre-IPO shares are of companies who have initiated the process of IPO (Initial Public Offer), for listing their company on a Stock Exchange" },
    { question: "Why should you invest in Unlisted Shares?", answer: "Early Access: You can invest in top unlisted companies before it is available for the masses. You may also be able to invest in unlisted companies at a discount to its listed peers." },
    { question: "What is the minimum investment?", answer: "The minimum investment on our platform is just Rs. 10,000. As a special offer on certain occasions and for certain companies, the minimum investment quantity becomes 1 share." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-10 pb-20">
            <div className="container mx-auto mt-10 bg-white px-4 lg:px-0">
                <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-dashed border-neutral-300 pb-5">
                            <button
                                className="w-full flex justify-between items-center py-2 cursor-pointer text-lg focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Link href="/" className="btn-secondary">
                        Show More
                    </Link>
                </div>                
            </div>
        </section>
    );
}
