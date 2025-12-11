"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/models", label: "Models" },
    { href: "/members", label: "Members" },
    { href: "/faq-support", label: "FAQ/Support" },
    { href: "/contact", label: "Contact" },
  ]

  const isActiveLink = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-[#4D73BE] text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            MODEL APP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 text-sm font-medium text-white 
                    rounded-full transition-all duration-300
                    ${isActive ? "bg-white/20" : "hover:bg-white/10"}
                  `}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/join"
              className="
                ml-4 px-6 py-2 text-sm font-bold 
                bg-white text-[#4D73BE] 
                rounded-full shadow-sm 
                transition-transform duration-300
                hover:scale-105
              "
            >
              Join
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-1 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    block px-4 py-3 text-sm font-medium text-white 
                    rounded-full transition-all duration-300
                    ${isActive ? "bg-white/20" : "hover:bg-white/10"}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/join"
              className="
                block mx-4 mt-4 px-6 py-3 text-center text-sm font-bold 
                bg-white text-[#4D73BE] 
                rounded-full shadow-sm 
                transition-transform duration-300
                hover:scale-105
              "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
