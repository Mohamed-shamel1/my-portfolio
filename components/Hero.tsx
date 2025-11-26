"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { AnimatedGridPattern } from "./ui/AnimatedBgHero";
import { cn } from "@/lib/utils";
import { FadeText } from "./ui/FadeText";
import { cvUrl } from "@/data";

// 1. استدعاء مشهد الروبوت بشكل ديناميكي صحيح
// ملحوظة: شيلنا ".tsx" من المسار عشان Next.js يفهمه صح
const RobotScene = dynamic(() => import("./ui/RobotScene"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white/50">
      Loading 3D Model...
    </div>
  )
});

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      {/* 1. الإضاءة الخلفية */}
      <div>
        <Spotlight
          className="-top-[1200px] left-0 md:left-[16%] md:-top-[15%]"
          fill="white"
        />
      </div>

      {/* 2. شبكة الخلفية */}
      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
          "w-full h-full absolute top-0 left-0"
        )}
      />

      {/* 3. الحاوية الرئيسية */}
      <div className="relative z-10 container mx-auto px-5 lg:px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full">
          
          {/* ----- العمود الأيسر: النصوص والأزرار ----- */}
          <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-[50%]">
            <FadeText
              className="uppercase tracking-[2px] text-xs text-center lg:text-left text-blue-100 max-w-80 lg:max-w-full"
              direction="down"
              text="Crafting Digital Experiences with Modern Web Tech"
            />

            <TextGenerateEffect
              words="First impressions last so make it count"
              className="text-center lg:text-left text-[32px] md:text-5xl lg:text-6xl font-extrabold my-6"
            />

            <FadeText
              className="text-center lg:text-left md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-white-100"
              text="Hi! I'm Mohammed Shamel, a FULL-STACK Developer with React, Next.js & Node.js, Nest.js"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
            />

            <FadeText
              text=""
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.5 } },
              }}
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center lg:justify-start">
                <Link href={cvUrl}>
                  <MagicButton
                    title="Download CV"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </Link>
                <Link href="#projects">
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </Link>
              </div>
            </FadeText>
          </div>

          {/* ----- العمود الأيمن: موديل الـ 3D ----- */}
          {/* تم تفعيل الكود وضبط الارتفاع ليناسب الشاشات المختلفة */}
          <div className="w-full lg:w-[50%] h-[60vh] lg:h-[70vh] relative flex items-center justify-center">
            <RobotScene />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;