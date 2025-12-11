"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content Block - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Headline */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Exclusive Premium Content
        </h1>

        {/* Subtext */}
        <p className="text-white text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-2xl leading-relaxed opacity-95">
          Discover a world of curated experiences designed exclusively for discerning members. Join our community today.
        </p>

        {/* CTA Button */}
        <Link
          href="/join"
          className="
            px-10 py-4 text-base md:text-lg font-bold 
            bg-[#4D73BE] text-white 
            rounded-full shadow-lg 
            transition-all duration-300
            hover:bg-[#4D73BE]/90 hover:-translate-y-0.5 hover:shadow-xl
          "
        >
          Join Now
        </Link>
      </div>
    </section>
  )
}

export default HeroBanner

