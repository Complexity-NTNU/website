'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import NavFooter from './navFooter';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isTop, setIsTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setIsTop(window.scrollY === 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleHamburgerClick = () => {
		setIsOpen(!isOpen);
	};

	const navLinks = [
		{ name: 'About', href: '/about' },
		{ name: 'Members', href: '/members' },
		{ name: 'Sponsors', href: '/sponsors' },
	];

	return (
		<div
			className={`fixed bg-[#F1F1F1] inset-x-0 top-0  border-b z-50 ${isTop ? 'border-black/5' : 'border-none'}`}
		>
			<div className="max-w-[1440px] mx-auto">
				<div className="flex h-16 md:h-20 justify-between items-center">
					<div>
						<div className="hidden md:block">
							<a href="/">
								<Image
									src="/logo_with_text.svg"
									width={250}
									height={250}
									alt="Logo"
									className="pl-4"
								/>
							</a>
						</div>
						<div className="block md:hidden p-4">
							<a href="/">
								<Image
									src="/logo.svg"
									width={47}
									height={47}
									className="h-full"
									alt="Logo"
								/>
							</a>
						</div>
					</div>
					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<ul className="flex space-x-8 items-center pr-8">
							{navLinks.map((link) => (
								<li key={link.name} className="relative group">
									<a href={link.href} className="block">
										<p className="text-[#7C7C7C] hover:text-[#4B4B4B] transition">
											{link.name}
										</p>
										<span className="absolute left-1/2 bottom-[-5px] transform -translate-x-1/2 translate-y-2 group-hover:translate-y-0 w-1 h-1 rounded-full bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#4B4B4B]"></span>
									</a>
								</li>
							))}
							<a href="/applications">
								<div className="bg-[#343434] text-[#F1F1F1] px-8 py-2 rounded-xl hover:bg-[#3A3A3A] transition">
									Apply
								</div>
							</a>
						</ul>
					</div>
					{/* Mobile Hamburger */}
					<div className="block md:hidden h-full">
						<button onClick={handleHamburgerClick} className="h-full p-4 pr-8">
							<Image src="/hamburger.svg" width={28} height={28} alt="Menu" />
						</button>
					</div>
				</div>
				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden fixed inset-0 bg-[#1E1E1E] z-50">
						{/* Close Button */}
						<div className="absolute top-4 left-4">
							<Image src="/logo_white.svg" width={47} height={47} alt="Logo" />
						</div>
						<div className="absolute w-18 h-20 p-4  white top-2 right-2">
							<button onClick={handleHamburgerClick} aria-label="Close menu">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
						</div>
						{/* Full-Screen Menu Items */}
						<div className="pt-24">
							<ul className="flex  px-8 flex-col h-full space-y-5 text-white">
								{navLinks.map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											className="block text-xl pb-5 "
											onClick={handleHamburgerClick}
										>
											{link.name}
										</a>
										<div className="w-full h-[1px] bg-white" />
									</li>
								))}
									<li key="apply">
										<a
											href="applications"
											className="block text-xl pb-5 "
											onClick={handleHamburgerClick}
										>
											Apply
										</a>
									</li>
							</ul>
							<NavFooter />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
