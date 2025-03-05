'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/page/navbar/Navbar';
import Footer from '@/components/page/Footer';

export default function Home() {
	const [showUndertitle, setShowUndertitle] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowUndertitle(true);
		}, 500);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
			<div>
				<Navbar />
				<main className="bg-[#F6F6F6]">
					<div className="max-w-6xl mx-auto md:pt-52 pt-32 px-4">
						<h1 className="animate-fadeUp flex gap-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#3B3B3B]">
							Building the Future
						</h1>
						{showUndertitle && (
							<div className="block pt-6 text-xl md:text-2xl animate-fadeUp text-[#7C7C7C] italic">
								We educate the AI researchers of tomorrow{' '}
							</div>
						)}
					</div>
					<div className="py-40 overflow-hidden">
						<div className="flex gap-8 animate-slide whitespace-nowrap">
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
							<div className="bg-black rounded-xl w-96 h-60 flex-shrink-0"></div>
						</div>
					</div>
				</main>
				<section></section>
				<section></section>
				<Footer />
			</div>
		</div>
	);
}
