import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: "All information required for me to invest has been laid out in a transparent manner. Webinar has helped me take an informed decision.",
    name: "NIDHI AGARWAL",
  },
  {
    text: "The platform provides great insights and a seamless experience for investing. Highly recommended!",
    name: "RAHUL MEHTA",
  },
  {
    text: "I feel more confident about my investments after using this platform. The transparency is commendable.",
    name: "PRIYA SHARMA",
  },
];

const TestimonialSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="flex flex-col items-center text-center pb-20">
      <h2 className="text-2xl lg:text-4xl font-bold mb-10">Trusted by 1,50,000+ customers</h2>
      
      <div className="relative w-full max-w-5xl">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 lg:left-0 z-10 top-1/2 cursor-pointer -translate-y-1/2 p-2 rounded-full text-white bg-primary hover:bg-primaryhover hover:text-white transition duration-500"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">
                <p className="text-lg text-gray-700 italic mb-2">“{testimonial.text}”</p>
                <h3 className="text-sm font-bold text-gray-600">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 p-2 rounded-full text-white bg-primary hover:bg-primaryhover hover:text-white transition duration-500"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* CTA Button */}
      <Link to="#" className="mt-6 btn-secondary">
        Start investing
      </Link>
    </div>
  );
};

export default TestimonialSlider;