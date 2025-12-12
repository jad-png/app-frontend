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
        // Cleaned Container: Removed debug borders & margins that squashed the card
        <div 
            className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-md cursor-pointer isolation-isolate"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Layer 1: Static Thumbnail Image (Bottom Layer) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>

            {/* Layer 2: Video Player (Middle Layer) */}
            <video
                ref={videoRef}
                src={videoUrl}
                className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                muted
                loop
                playsInline
                preload="metadata"
            />

            {/* Layer 3: Netflix-Style Gradient Overlay (Top Layer - Bottom Positioned) */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />

            {/* Layer 4: Text Content (Topmost Layer) */}
            <div className={`absolute bottom-0 left-0 right-0 p-5 text-white z-30 w-full`}>
                 {/* Optional: Add Date Badge styling if needed */}
                <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-md border border-white/10">
                    {date}
                </span>
                <h3 className="text-lg font-bold leading-tight mb-1 drop-shadow-md">{title}</h3>
                <p className="text-sm text-gray-200 opacity-90 font-medium">{subtitle}</p>
            </div>
        </div>
    )
}

export default EntryCard