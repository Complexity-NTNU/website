"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/objects/navbar/Navbar";
import Footer from "@/components/objects/Footer";
import Brain from "@/components/objects/Brain";
import HomepageBigCard from "@/components/objects/HomepageBigCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	const [showUndertitle, setShowUndertitle] = useState(false);
	const [showCard1, setShowCard1] = useState(false);
	const [showCard2, setShowCard2] = useState(false);

	useEffect(() => {
		const timers = [
			setTimeout(() => {
				setShowUndertitle(true);
			}, 300),
			setTimeout(() => {
				setShowCard1(true);
			}, 1200),
			setTimeout(() => {
				setShowCard2(true);
			}, 1300),
		];
		return () => timers.forEach(clearTimeout);
	}, []);

	return (
		<div>
			<Navbar />
			<main className="bg-[#D9D9D9]">
				<div className="bg-[#F1F1F1] shadow-md pb-96 md:pb-40 ">
					<div className="relative h-[600px]   max-w-6xl mx-auto md:pt-52  pt-32 px-4 md:pl-10">
						<div
							className={`absolute inset-0  md:pt-2 transition-all duration-700 ${
								showUndertitle
									? "opacity-100 translate-y-0 delay-300"
									: "opacity-0 translate-y-4"
							}`}
						>
							<Brain />
						</div>
						<div className="relative z-10 ">
							<h1 className="animate-fadeUp w-fit flex gap-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#3B3B3B]">
								Building the Future
							</h1>
							<div
								className={`pt-4 md:pt-10 text-xl md:text-2xl w-fit text-[#7C7C7C] italic transition-all duration-300 ${
									showUndertitle
										? "opacity-100 translate-y-0 delay-300"
										: "opacity-0 translate-y-4"
								}`}
							>
								We educate the AI researchers of tomorrow
							</div>
							<div className="flex flex-wrap justify-center gap-8 py-24">
								<div
									className={`flex-1 transition-all duration-500 ${
										showCard1
											? "opacity-100 translate-y-0 delay-300"
											: "opacity-0 translate-y-4"
									}`}
								>
									<HomepageBigCard
										category="About"
										title="Our Vision"
										body="We’re on a mission to develop world-class AI projects and partnerships, shaping Norway’s role in the global AI race."
										buttonLink="/about"
										buttonText="Read more"
										background={true}
									/>
								</div>
								<div
									className={`flex-1 transition-all duration-500 ${
										showCard2
											? "opacity-100 translate-y-0 delay-300"
											: "opacity-0 translate-y-4"
									}`}
								>
									<HomepageBigCard
										category="Apply"
										title="Join the Project"
										body="Collaborate on advanced AI projects, gain real-world experience, and help define the future of AI."
										buttonLink="/applications"
										buttonText="Get involved"
										background={false}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative">
					{/* Background Image Container - Ensure proper sizing */}
					<div className="absolute inset-0 z-0 h-full">
						<Image
							src="/move_37.png"
							alt="move 37"
							fill
							className="object-cover"
							priority
						/>
						{/* Gradient overlay for inner shadow effect */}
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0.9)_100%)]" />
					</div>

					{/* Content Container */}
					<div className="relative z-10 max-w-6xl mx-auto py-16 md:py-52 px-5 ">
						{/* Title Section */}
						<div className="flex justify-center flex-col  w-fit">
							<div className="flex justify-center items-center gap-4 mb-12">
								<div className="w-10 md:w-20 bg-white/50 h-[2px] rounded-full" />
								<h1 className="text-white text-3xl md:text-5xl font-bold">
									Project 2026
								</h1>
								<div className="w-10 md:w-20 bg-white/50 h-[2px] rounded-full" />
							</div>

							{/* Text Content */}
							<div className="max-w-2xl text-white space-y-6">
								<p className="md:text-lg">
									Join us in creating an ambitious AI project from the ground up
									through 2025—2026. Our goal is to build intelligent, adaptive
									systems capable of sophisticated decision-making, harnessing
									cutting-edge AI technologies.
								</p>

								<p className="md:text-lg">
									We&apos;re seeking talented and driven students in computer
									science, engineering, physics, and related fields to pioneer
									innovations in artificial intelligence. Students passionate
									about marketing, business, and leadership are also invited to
									help drive the project&apos;s growth and visibility.
								</p>

								<p className="md:text-xl text-lg font-semibold">
									Are you ready to shape the future of AI with Project 2026?
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white shadow-2xl max-h-screen  pb-10 md:pb-40">
					<div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row py-4 md:pt-28 px-2">
						<div className="p-10 md:pr-2">
							<Image
								src={"/students_working.jpeg"}
								alt="Random placeholder"
								width={2000}
								height={400}
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
								<Link href="/applications">
									<div className="bg-[#1E4E98] text-[#F1F1F1] py-3 rounded-xl hover:bg-[#364967] transition w-44 text-center">
										See open roles
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
