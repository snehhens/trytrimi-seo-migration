import { useState, useCallback, Fragment } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import tr1 from "@/assets/transformations/tr_1.png";
import tr2 from "@/assets/transformations/tr_2.png";
import tr5 from "@/assets/transformations/tr_5.png";
import tr6 from "@/assets/transformations/tr_6.png";
import tr7 from "@/assets/transformations/tr_7.png";
import tr8 from "@/assets/transformations/tr_8.png";
import tr9 from "@/assets/transformations/tr_9.png";
import tr10 from "@/assets/transformations/tr_10.png";
import tr from "@/assets/transformations/tr.png";

interface Transformation {
  name: string;
  beforeImg: string;
  afterImg: string;
  stats: { label?: string; weightBefore: string; weightAfter: string; height: string }[];
  months: number;
  quote: string;
}

const transformations: Transformation[] = [
  {
    name: "Jessica T.",
    beforeImg: tr9,
    afterImg: tr9,
    stats: [{ weightBefore: "218 lbs", weightAfter: "140 lbs", height: "5'5\"" }],
    months: 16,
    quote: "Trimi changed my life. Their GLP-1 program made weight loss easier and safer, and I emerged not just lighter but more confident, energetic, and positive. The team's consistent support made all the difference.",
  },
  {
    name: "Michael & Lisa B.",
    beforeImg: tr7,
    afterImg: tr7,
    stats: [
      { label: "Michael", weightBefore: "310 lbs", weightAfter: "168 lbs", height: "6'1\"" },
      { label: "Lisa", weightBefore: "210 lbs", weightAfter: "145 lbs", height: "5'6\"" },
    ],
    months: 23,
    quote: "My wife and I did this together and it transformed our lives. We're more active, more confident, and healthier than we've been in over a decade.",
  },
  {
    name: "Emily S.",
    beforeImg: tr1,
    afterImg: tr1,
    stats: [{ weightBefore: "230 lbs", weightAfter: "145 lbs", height: "5'6\"" }],
    months: 11,
    quote: "After dealing with my weight my entire life, I finally decided to make a change. Trimi made it easy, affordable and accessible for me to get on a GLP-1.",
  },
  {
    name: "Sarah M.",
    beforeImg: tr,
    afterImg: tr,
    stats: [{ weightBefore: "205 lbs", weightAfter: "135 lbs", height: "5'5\"" }],
    months: 24,
    quote: "I never thought I could feel this good about myself again. The program was straightforward and the results were incredible. I finally have my confidence back!",
  },
  {
    name: "Rachel P.",
    beforeImg: tr5,
    afterImg: tr5,
    stats: [{ weightBefore: "210 lbs", weightAfter: "130 lbs", height: "5'7\"" }],
    months: 14,
    quote: "The support from the Trimi team was amazing. They were with me every step of the way. I feel like a completely new person.",
  },
  {
    name: "Lauren W.",
    beforeImg: tr6,
    afterImg: tr6,
    stats: [{ weightBefore: "235 lbs", weightAfter: "148 lbs", height: "5'6\"" }],
    months: 12,
    quote: "I tried every diet imaginable. Nothing worked until I started with Trimi. The medication combined with their guidance changed everything for me.",
  },
  {
    name: "Brittany H.",
    beforeImg: tr8,
    afterImg: tr8,
    stats: [{ weightBefore: "175 lbs", weightAfter: "132 lbs", height: "5'10\"" }],
    months: 7,
    quote: "The whole process was seamless from start to finish. I got approved quickly and the medication was delivered right to my door.",
  },
  {
    name: "Christina V.",
    beforeImg: tr10,
    afterImg: tr10,
    stats: [{ weightBefore: "230 lbs", weightAfter: "155 lbs", height: "5'6\"" }],
    months: 15,
    quote: "I was skeptical at first, but the results speak for themselves. I've lost 75 pounds and I feel better than I did in my 20s. Thank you Trimi!",
  },
];
export const TransformationCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 md:-left-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
        aria-label="Previous transformation"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 md:-right-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
        aria-label="Next transformation"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="overflow-hidden px-6 md:px-0" ref={emblaRef}>
        <div className="flex gap-6">
          {transformations.map((t, i) => (
            <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
              <Card className="p-5 h-full flex flex-col">
                {/* Weight badges */}
                <div className="mb-3 min-h-[52px] flex items-center justify-center">
                  {t.stats.length > 1 ? (
                    <div className="border border-border rounded-lg p-2.5 bg-muted/30 w-full">
                      <div className="grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-1.5 items-center">
                        {t.stats.map((s, si) => (
                          <Fragment key={`stat-${si}`}>
                            <span key={`label-${si}`} className="text-[11px] font-semibold text-muted-foreground text-right">{s.label}:</span>
                            <span key={`weight-${si}`} className="inline-flex items-center justify-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style={{ background: 'hsl(212, 60%, 35%)' }}>
                              {s.weightBefore} <span className="opacity-80">→</span> {s.weightAfter}
                            </span>
                            <span key={`height-${si}`} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border border-border text-foreground bg-muted">
                              {s.height}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style={{ background: 'hsl(212, 60%, 35%)' }}>
                        {t.stats[0].weightBefore} <span className="opacity-80">→</span> {t.stats[0].weightAfter}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border border-border text-foreground bg-muted">
                        {t.stats[0].height}
                      </span>
                    </div>
                  )}
                </div>

                {/* Before/After image */}
                <div className="relative mb-4">
                  <img
                    src={t.beforeImg}
                    alt="Before and after transformation"
                    className="w-full aspect-[4/3] object-cover object-top rounded-lg"
                  />
                  <div className="absolute bottom-2 left-4 bg-foreground/70 text-background text-xs font-semibold px-3 py-1 rounded-full">
                    Month 0
                  </div>
                  <div className="absolute bottom-2 right-4 bg-foreground/70 text-background text-xs font-semibold px-3 py-1 rounded-full">
                    Month {t.months}
                  </div>
                </div>

                {/* Name & Quote */}
                <p className="text-sm font-semibold text-foreground text-center mb-1">{t.name}</p>
                <p className="text-sm text-foreground text-center leading-relaxed flex-1">
                  "{t.quote}"
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
