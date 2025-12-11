"use client"

import type React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#4 D73BE] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Column 1: Brand & Copyright */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold tracking-tight">MODEL APP</h3>
            <p className="text-xs text-blue-100">© {currentYear} Model App. All rights reserved.</p>
          </div>

          {/* Column 2: Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide">Support</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/faq-support"
                className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4 transition-all duration-300"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/terms"
                className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4 transition-all duration-300"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-white/10 pt-8">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Bottom Banner – Text / images</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
