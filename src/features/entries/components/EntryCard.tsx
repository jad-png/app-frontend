"use client"

import type React from "react"
import { useRef, useState } from "react"
import Image from "next/image"

interface EntryCardProps {
  title: string
  subtitle: string
  imageUrl: string
  videoUrl: string
  date: string
}

const EntryCard: React.FC<EntryCardProps> = ({
  title,
  subtitle,
  imageUrl,
  videoUrl,
  date,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static Image - Default State */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Video - Hover State */}
      <video
        ref={videoRef}
        src={videoUrl}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content Overlay - Title, Subtitle, Date */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <p className="text-sm font-medium text-white/80 mb-1">{date}</p>
        <h3 className="text-2xl font-bold mb-1 leading-tight">{title}</h3>
        <p className="text-base font-light text-white/90">{subtitle}</p>
      </div>
    </div>
  )
}

export default EntryCard
