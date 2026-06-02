import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { testimonials } from "../data/portfolio";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export function FeedbackSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="feedback" className="py-20 px-4 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Client <span className="text-accent">Feedback</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients from around the globe have to say about our collaboration.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="glass-morphism p-8 rounded-2xl cosmic-glow relative flex flex-col h-full select-none">
                    <Quote className="text-accent/40 w-12 h-12 absolute top-6 right-6" />
                    <div className="flex-grow">
                      <p className="text-white/90 italic leading-relaxed mb-6 mt-4 z-10 relative">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between z-10 relative">
                      <div>
                        <h4 className="text-lg font-semibold text-white font-orbitron">{testimonial.name}</h4>
                        <span className="text-primary-foreground text-sm font-medium flex items-center gap-2">
                          <img 
                            src={`https://flagcdn.com/w20/${testimonial.countryCode}.png`}
                            srcSet={`https://flagcdn.com/w40/${testimonial.countryCode}.png 2x`}
                            width="20"
                            alt={`${testimonial.country} flag`}
                            className="inline-block rounded-sm"
                          />
                          {testimonial.country}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-accent transition-all z-10 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-accent transition-all z-10 group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
