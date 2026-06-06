"use client";

import { motion } from "framer-motion";
import { testimonials } from "../data/portfolio";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { GlassCard } from "./ui/glass-card";

export function FeedbackSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="feedback" className="py-24 px-6 relative z-10 bg-card/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Client <span className="premium-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what founders and engineering managers have to say.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4 -mx-4" ref={emblaRef}>
            <div className="flex -ml-6 py-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <GlassCard className="p-8 h-full flex flex-col relative bg-card/40 border-white/5 hover:-translate-y-2 transition-all duration-300">
                    <Quote className="text-primary/20 w-16 h-16 absolute top-6 right-6" />
                    
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} size={16} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>

                    <p className="text-foreground leading-relaxed mb-8 relative z-10 text-lg">
                      "{testimonial.content}"
                    </p>

                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between z-10 relative">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-heading font-bold shadow-lg text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground font-heading">{testimonial.name}</h4>
                          <span className="text-muted-foreground text-sm font-medium flex items-center gap-2">
                            <img 
                              src={`https://flagcdn.com/w20/${testimonial.countryCode}.png`}
                              srcSet={`https://flagcdn.com/w40/${testimonial.countryCode}.png 2x`}
                              width="20"
                              alt={`${testimonial.country} flag`}
                              className="inline-block rounded-sm shadow-sm"
                            />
                            {testimonial.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`p-4 rounded-full border transition-all z-10 group flex items-center justify-center ${
                canScrollPrev 
                  ? "bg-background border-border text-foreground hover:border-primary hover:text-primary shadow-sm" 
                  : "bg-background/50 border-border/50 text-muted-foreground opacity-50 cursor-not-allowed"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className={canScrollPrev ? "group-hover:-translate-x-1 transition-transform" : ""} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`p-4 rounded-full border transition-all z-10 group flex items-center justify-center ${
                canScrollNext 
                  ? "bg-background border-border text-foreground hover:border-primary hover:text-primary shadow-sm" 
                  : "bg-background/50 border-border/50 text-muted-foreground opacity-50 cursor-not-allowed"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className={canScrollNext ? "group-hover:translate-x-1 transition-transform" : ""} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
