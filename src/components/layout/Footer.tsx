"use client"
import Link from "next/link"

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#4D73BE] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm">© 2025 Model App. All rights reserved.</p>

					<div className="flex items-center gap-4">
						<Link href="/terms" className="text-sm hover:underline">Terms &amp; Conditions</Link>
						<Link href="/contact" className="text-sm hover:underline">Contact Us</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

