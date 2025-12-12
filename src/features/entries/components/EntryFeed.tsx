"use client"

import type React from "react"
import { useState } from "react"
import EntryCard from "./EntryCard"

// Mock data for gallery entries
const MOCK_ENTRIES = [
    {
        id: "1",
        title: "Summer Vibes Shoot",
        subtitle: "Model: Sarah",
        date: "20th Feb",
        imageUrl: "https://picsum.photos/seed/1/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
        id: "2",
        title: "Urban Elegance",
        subtitle: "Model: Emma",
        date: "18th Feb",
        imageUrl: "https://picsum.photos/seed/2/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
        id: "3",
        title: "Golden Hour Collection",
        subtitle: "Model: Olivia",
        date: "15th Feb",
        imageUrl: "https://picsum.photos/seed/3/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
        id: "4",
        title: "Midnight Dreams",
        subtitle: "Model: Sophia",
        date: "12th Feb",
        imageUrl: "https://picsum.photos/seed/4/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
        id: "5",
        title: "Coastal Breeze",
        subtitle: "Model: Ava",
        date: "10th Feb",
        imageUrl: "https://picsum.photos/seed/5/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
        id: "6",
        title: "City Lights",
        subtitle: "Model: Mia",
        date: "8th Feb",
        imageUrl: "https://picsum.photos/seed/6/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
        id: "7",
        title: "Autumn Essence",
        subtitle: "Model: Isabella",
        date: "5th Feb",
        imageUrl: "https://picsum.photos/seed/7/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
        id: "8",
        title: "Winter Wonderland",
        subtitle: "Model: Charlotte",
        date: "1st Feb",
        imageUrl: "https://picsum.photos/seed/8/1920/1080",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
]

const EntryFeed: React.FC = () => {
    // Pagination constants and state
    const ITEMS_PER_PAGE = 4
    const [currentPage, setCurrentPage] = useState(1)
    
    // Calculate total pages dynamically based on MOCK_ENTRIES length
    const totalPages = Math.ceil(MOCK_ENTRIES.length / ITEMS_PER_PAGE)
    
    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    
    // Derive current entries to display based on pagination
    const currentEntries = MOCK_ENTRIES.slice(startIndex, endIndex)

    const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentPage(Number(e.target.value))
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Latest Shoots</h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <button className="text-sm font-medium text-[#4D73BE] hover:underline">
                        Newest
                    </button>
                </div>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                {currentEntries.map((entry) => (
                    <EntryCard
                        key={entry.id}
                        title={entry.title}
                        subtitle={entry.subtitle}
                        date={entry.date}
                        imageUrl={entry.imageUrl}
                        videoUrl={entry.videoUrl}
                    />
                ))}
            </div>

            {/* Pagination Section */}
            <div className="flex items-center justify-center gap-4 mt-12">
                {/* Page Selector Dropdown */}
                <select
                    value={currentPage}
                    onChange={handlePageChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:border-[#4D73BE] focus:outline-none focus:ring-2 focus:ring-[#4D73BE] focus:border-transparent transition-all cursor-pointer"
                >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <option key={page} value={page}>
                            Page {page}
                        </option>
                    ))}
                </select>

                {/* Next Button */}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage >= totalPages}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-[#4D73BE] hover:text-[#4D73BE] focus:outline-none focus:ring-2 focus:ring-[#4D73BE] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    Next &gt;
                </button>
            </div>
        </section>
    )
}

export default EntryFeed