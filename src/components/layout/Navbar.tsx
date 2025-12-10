("use client")
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
	const [open, setOpen] = useState(false)

	return (
		<header className="bg-[#4D73BE] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex items-center gap-3">
							<span className="sr-only">Model App</span>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-white/20 rounded-md flex items-center justify-center">
									<span className="font-bold text-white">M</span>
								</div>
								<span className="font-semibold text-lg">Model App</span>
							</div>
						</Link>
					</div>

					<nav className="hidden md:flex items-center space-x-6">
						<Link href="/" className="hover:underline">Home</Link>
						<Link href="/models" className="hover:underline">Models</Link>
						<Link href="/members" className="hover:underline">Members</Link>
						<Link href="/faq" className="hover:underline">FAQ / Support</Link>
						<Link href="/contact" className="hover:underline">Contact</Link>

						<Link
							href="/join"
							className="ml-4 inline-block bg-white text-[#4D73BE] px-4 py-2 rounded-md font-semibold"
						>
							Join
						</Link>
					</nav>

					<div className="md:hidden">
						<button
							onClick={() => setOpen(!open)}
							aria-label="Toggle menu"
							className="p-2 rounded-md bg-white/10 hover:bg-white/20"
						>
							{open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
						</button>
					</div>
				</div>
			</div>

			{open && (
				<div className="md:hidden border-t border-white/10">
					<div className="px-4 pt-4 pb-6 space-y-3">
						<Link href="/" className="block text-white">Home</Link>
						<Link href="/models" className="block text-white">Models</Link>
						<Link href="/members" className="block text-white">Members</Link>
						<Link href="/faq" className="block text-white">FAQ / Support</Link>
						<Link href="/contact" className="block text-white">Contact</Link>

						<Link
							href="/join"
							className="block mt-2 bg-white text-[#4D73BE] px-4 py-2 rounded-md font-semibold text-center"
						>
							Join
						</Link>
					</div>
				</div>
			)}
		</header>
	)
}

export default Navbar

