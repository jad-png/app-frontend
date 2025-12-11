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
        <div className="border-2 border-red-500 flex items-center justify-center">
            <div className="border-2 border-yellow-500 w-full m-10 flex items-center justify-center">
                <div
                    className=" border-2 border-blue-500 relative w-[90%] h-[90%] m-4 aspect-video shadow-lg cursor-pointer transition-transform duration-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Layer 1: Static Thumbnail Image (Bottom Layer) */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={false}
                        />
                    </div>

                    {/* Layer 2: Video Player (Middle Layer) */}
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    />

                    {/* Layer 3: Netflix-Style Gradient Overlay (Top Layer - Bottom Positioned) */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

                    {/* Layer 4: Text Content (Topmost Layer) */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 p-6 text-white z-30 transition-transform duration-300 ${isHovered ? "-translate-y-1" : "translate-y-0"
                            }`}
                    >
                        <p className="text-sm text-gray-200 mb-2">{date}</p>
                        <h3 className="text-lg font-bold leading-tight mb-1">{title}</h3>
                        <p className="text-sm text-gray-200">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryCard
