"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BadgeData {
  text: string;
  className: string;
}

const badges: BadgeData[] = [
  {
    text: "WEB DESIGN",
    className: "badge-1 left-[5%] top-[18%] rotate-[-8deg] bg-[#c8ff00]",
  },
  {
    text: "BRANDING",
    className: "badge-2 right-[8%] top-[20%] rotate-[7deg] bg-[#ff725c]",
  },
  {
    text: "DIGITAL",
    className: "badge-3 left-[15%] top-[48%] rotate-[5deg] bg-[#c6bdf2]",
  },
  {
    text: "DEVELOPMENT",
    className: "badge-4 right-[12%] top-[52%] rotate-[-6deg] bg-[#ffd447]",
  },
  {
    text: "CREATIVE",
    className: "badge-5 left-[7%] bottom-[17%] rotate-[8deg] bg-[#ff8bd1]",
  },
  {
    text: "STRATEGY",
    className: "badge-6 right-[6%] bottom-[15%] rotate-[-8deg] bg-[#9be7ff]",
  },
];

export default function OurWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const title = titleRef.current;

      if (!title) return;

      const letters = title.querySelectorAll<HTMLElement>(".letter");
      const badgeElements =
        section.querySelectorAll<HTMLElement>(".work-badge");

      /*
       * ==========================================
       * INITIAL STATE
       * ==========================================
       */

      gsap.set(letters, {
        y: 180,
        opacity: 0,
      });

      gsap.set(badgeElements, {
        opacity: 0,
        scale: 0.7,
      });

      /*
       * ==========================================
       * MAIN TIMELINE
       * ==========================================
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /*
       * ==========================================
       * TITLE ENTER
       * ==========================================
       */

      timeline.to(letters, {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1.2,
        ease: "power4.out",
      });

      /*
       * ==========================================
       * BADGES ENTER
       * ==========================================
       */

      timeline.to(
        badgeElements,
        {
          opacity: 1,
          scale: 1.3,
          stagger: 0.08,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.7",
      );

      /*
       * ==========================================
       * BADGES CROSS THE TITLE
       * ==========================================
       */

      timeline.to(
        ".badge-1",
        {
          x: "55vw",
          y: "12vh",
          rotation: 10,
          duration: 1.5,
          ease: "none",
        },
        "<",
      );

      timeline.to(
        ".badge-2",
        {
          x: "-55vw",
          y: "18vh",
          rotation: -12,
          duration: 1.5,
          ease: "none",
        },
        "<",
      );

      timeline.to(
        ".badge-3",
        {
          x: "48vw",
          y: "-5vh",
          rotation: -8,
          duration: 1.5,
          ease: "none",
        },
        "<",
      );

      timeline.to(
        ".badge-4",
        {
          x: "-45vw",
          y: "-8vh",
          rotation: 12,
          duration: 1.5,
          ease: "none",
        },
        "<",
      );

      /*
       * ==========================================
       * SECOND BADGE MOVEMENT
       * ==========================================
       */

      timeline.to(".badge-5", {
        x: "60vw",
        y: "-25vh",
        rotation: -15,
        duration: 1.3,
        ease: "none",
      });

      timeline.to(
        ".badge-6",
        {
          x: "-60vw",
          y: "-25vh",
          rotation: 14,
          duration: 1.3,
          ease: "none",
        },
        "<",
      );

      /*
       * ==========================================
       * TITLE SLIGHT SCALE
       * ==========================================
       */

      timeline.to(
        title,
        {
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "<",
      );

      /*
       * ==========================================
       * BADGES LEAVE SCREEN
       * ==========================================
       */

      timeline.to(badgeElements, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.in",
      });

      /*
       * ==========================================
       * TITLE EXIT
       * ==========================================
       */

      timeline.to(title, {
        y: "-15vh",
        opacity: 0,
        scale: 1.2,
        duration: 1,
        ease: "power3.inOut",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[var(--color-bg)]
      "
    >
      {/* ==========================================
          TOP INFORMATION
      ========================================== */}

      {/* ==========================================
          BADGES
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 z-30">
        {badges.map((badge) => (
          <div
            key={badge.text}
            className={`
              work-badge
              absolute
              whitespace-nowrap
              rounded-full
              border
              border-black
              px-5
              py-2.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-black
              shadow-[4px_4px_0px_#000]
              md:px-7
              md:py-3
              md:text-xs
              ${badge.className}
            `}
          >
            {badge.text}
          </div>
        ))}
      </div>

      {/* ==========================================
          MAIN TITLE
      ========================================== */}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h2
          ref={titleRef}
          className="
            select-none
            whitespace-nowrap
            text-center
            text-[19vw]
            font-black
            uppercase
            leading-[0.7]
            tracking-[-0.09em]
            text-black
            md:text-[17vw]
          "
        >
          <span className="letter inline-block">N</span>
          <span className="letter inline-block">U</span>
          <span className="letter inline-block">E</span>
          <span className="letter inline-block">S</span>
          <span className="letter inline-block">T</span>
          <span className="letter inline-block">R</span>
          <span className="letter inline-block">O</span>

          <br />

          <span className="letter inline-block">T</span>
          <span className="letter inline-block">R</span>
          <span className="letter inline-block">A</span>
          <span className="letter inline-block">B</span>
          <span className="letter inline-block">A</span>
          <span className="letter inline-block">J</span>
          <span className="letter inline-block">O</span>
        </h2>
      </div>

      {/* ==========================================
          BOTTOM INFORMATION
      ========================================== */}
    </section>
  );
}
