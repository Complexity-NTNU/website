'use client';
import RandomImage from '@/components/objects/RandomImage';
import { useEffect, useState } from 'react';
import Navbar from '@/components/objects/navbar/Navbar';
import Footer from '@/components/objects/Footer';
import Brain from '@/components/objects/Brain';

export default function Home() {
	const [showUndertitle, setShowUndertitle] = useState(false);
	const [showBrain, setShowBrain] = useState(false);
	const [seed, setSeed] = useState(Date.now());

	const regenerateSeed = () => {
		setSeed(Date.now());
	};

	const imageCount = 5;
	const images = Array.from({ length: imageCount });

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowUndertitle(true);
		}, 500);
		const timer1 = setTimeout(() => {
			setShowBrain(true);
		}, 1000);
		return () => {
			clearTimeout(timer);
			clearTimeout(timer1);
		};
	}, []);

	return (
		<div>
			<Navbar />
			<main className="bg-[#D9D9D9]">
				<div className="bg-[#F1F1F1] rounded-b-3xl md:rounded-b-[50px]">
					<div className="relative h-[600px]  max-w-6xl mx-auto md:pt-52  pt-32 px-4 md:pl-10">
						<div 
						className={`absolute inset-0 pt-10 md:pt-2 transition-all duration-700 ${
									showUndertitle
										? 'opacity-100 translate-y-0 delay-300'
										: 'opacity-0 translate-y-4'
								}`}
						>
							<Brain />
						</div>
						<div className="relative z-10">
							<h1 className="animate-fadeUp w-fit flex gap-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#3B3B3B]">
								Building the Future
							</h1>
							<div
								className={`pt-4 md:pt-10 text-xl md:text-2xl w-fit text-[#7C7C7C] italic transition-all duration-300 ${
									showUndertitle
										? 'opacity-100 translate-y-0 delay-300'
										: 'opacity-0 translate-y-4'
								}`}
							>
								We educate the AI researchers of tomorrow
							</div>
						</div>
					</div>
					<div className="pb-32 overflow-hidden">
						<div className="flex gap-8 animate-slide">
							<RandomImage />
							<RandomImage />
							<RandomImage />
							<RandomImage />
							<RandomImage />
							<RandomImage />
							<RandomImage />
							<RandomImage />
							<RandomImage />
							<RandomImage />
						</div>
					</div>
				</div>
				<div>
					<div className="max-w-4xl mx-auto py-16 md:py-52 px-3 flex flex-col">
						<div className="self-center flex items-center gap-10">
							<div className="w-10 md:w-20 bg-[#C5C5C5] h-[3px] rounded-full"></div>
							<h1 className="text-[#414141] text-3xl md:text-5xl font-bold">
								Project 2026
							</h1>
							<div className="w-10 md:w-20 bg-[#C5C5C5] h-[3px] rounded-full"></div>
						</div>
						<p className="pt-10 md:text-lg px-4">
							Join us in creating an ambitious AI project from the ground up
							through 2025—2026. Our goal is to build intelligent, adaptive
							systems capable of sophisticated decision-making, harnessing
							cutting-edge AI technologies.
						</p>
						<p className="pt-4 md:text-lg px-4">
							We're seeking talented and driven students in computer science,
							engineering, physics, and related fields to pioneer innovations in
							artificial intelligence. Students passionate about marketing,
							business, and leadership are also invited to help drive the
							project's growth and visibility.
						</p>
						<p className="pt-4 md:text-lg px-4">
							Are you ready to shape the future of AI with Project 2026?
						</p>
					</div>
				</div>
				<div className="bg-white rounded-t-3xl md:rounded-t-[50px] mb-10 md:mb-40">
					<div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row py-4 md:pt-28 px-2">
						<div className="p-10 md:pr-2">
							<img
								src={`https://picsum.photos/seed/${seed}/1500/1100`}
								alt="Random placeholder"
								className="rounded-3xl"
							/>
						</div>

						<div className="flex flex-col gap-4 p-4 px-4 md:px-8">
							<div>
								<h1 className="text-[#343434] font-bold text-2xl pb-2">
									Work with complexity
								</h1>
								<p className="pb-6">
									Passionate about AI? Project 2026 is recruiting enthusiastic
									students from technical, business, and creative backgrounds to
									work together on one major AI initiative throughout the year.
									Join us to collaborate, innovate, and create something
									noteworthy!
								</p>
								<a href="/applications">
									<div className="bg-[#343434] text-[#F1F1F1] py-3 rounded-xl hover:bg-[#3A3A3A] transition w-44 text-center">
										See open roles
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
