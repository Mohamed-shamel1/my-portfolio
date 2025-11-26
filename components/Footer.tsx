"use client";

import { FaArrowRight, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";
import dynamic from "next/dynamic";

const FloatingShapeScene = dynamic(() => import("./ui/FloatingShape"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

function Footer() {
  return (
    // 1. شيلنا الـ height الثابت وخليناه min-h عشان لو الكلام كتر في الموبايل
    <div className="relative flex mt-14 min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-black-100 pb-10">
      
      {/* -------------------------------------------------- */}
      {/* 2. تعديل مكان الـ 3D Model للـ Responsiveness */}
      {/* - Mobile: خلينا العرض كامل w-full ومكانه تحت bottom-0 وشفافيته قليلة opacity-40 عشان ميعملش دوشة مع الكلام
          - Desktop (md): رجعناه يمين وكبرنا حجمه والشفافية عالية
          - z-0: عشان يبقى خلفية ورا الكلام
      */}
      <div className="absolute 
        /* إعدادات الموبايل */
        bottom-0 left-0 w-full h-[350px] opacity-30
        /* إعدادات الديسك توب والشاشات الكبيرة */
        md:w-[700px] md:h-[700px] md:right-[-15%] md:bottom-[-20%] md:left-auto md:opacity-80
        z-[0] pointer-events-none">
        <FloatingShapeScene />
      </div>
      {/* -------------------------------------------------- */}

      {/* الكلام: z-10 عشان يبقى فوق الكوكب */}
      <footer className="w-full pt-20 pb-10 container z-10 relative flex flex-col items-center" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] text-center relative z-20">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 my-3 md:mt-10 text-center relative z-20">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          
          <a href="mailto:mshamel460@gmail.com" className="relative z-20 mt-5">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        
        <div className="flex mt-16 md:flex-row flex-col gap-5 justify-between items-center relative z-20 w-full">
          <p className="md:text-base text-sm md:font-normal font-light flex items-center gap-2 group">
            Follow Me On Social Media
            <span className="group-hover:translate-x-3 transition">
              <FaArrowRight />
            </span>
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <Link
                href={info.link}
                target="_blank"
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-all"
              >
                {/* التعديل هنا:
                  1. شيلنا وسم <img> لأنه كان بيدور على info.img ومش لاقيه
                  2. استخدمنا info.icon مباشرة لأنه React Component
                  3. حطيناه جوه div واخد text-xl عشان يظبط الحجم (حوالي 20px)
                */}
                <div className="text-xl text-white">
                    {info.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <div className="w-full absolute left-0 bottom-0 min-h-60 z-[0]">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-60 object-cover"
        />
      </div>
    </div>
  );
}

export default Footer;