'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/objects/navbar/Navbar';
import Footer from '@/components/objects/Footer';
import Image from 'next/image';
import Roadmap from '@/components/objects/Roadmap';

export default function AboutPage() {
	const [showUndertitle, setShowUndertitle] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowUndertitle(true);
		}, 500);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="bg-[#D9D9D9] flex-1">
				<div className="bg-[#F1F1F1] rounded-b-3xl md:rounded-b-[50px] pb-40 md:pb-96 ">
					<div className="max-w-6xl mx-auto md:pt-96  pt-32 px-4">
						<h1 className="animate-fadeUp sm:mx-20 md:mx-40  tracking-wide text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B3B3B] ">
							Empowering Students to Shape the Future of AI
						</h1>

						<div
							className={`pt-14 md:pt-20 px-4 text-xl md:text-2xl text-[#7C7C7C] italic transition-all duration-300 ${
								showUndertitle
									? 'opacity-100 translate-y-0 delay-300'
									: 'opacity-0 translate-y-4'
							}`}
						>
							“Our mission is to become one of the most technically skilled AI
							student organizations in the world, building partnerships with the
							biggest AI companies, and paving a path for Norway to enter the
							global AI race.”{' '}
						</div>
					</div>
				</div>

				<div className='md:pb-24'>
					<div className="max-w-4xl mx-auto py-24 md:py-24 px-3 flex flex-col">
						<div className="self-center flex items-center gap-10 md:pb-10">
							<div className="w-10 md:w-20 bg-[#C5C5C5] h-[3px] rounded-full"></div>
							<h1 className="text-[#414141] text-3xl md:text-5xl font-bold ">
								Our Roadmap
							</h1>
							<div className="w-10 md:w-20 bg-[#C5C5C5] h-[3px] rounded-full"></div>
						</div>
						<p className="text-lg pt-6 pb-6 md:pb-32 px-4">
							We’re tackling a challenging AI project that no one could achieve
							alone—developing our skills, connecting with industry, and putting
							Norway on the global AI map.
						</p>
						<Roadmap />
					</div>
				</div>

				<div className="bg-white rounded-t-3xl md:rounded-t-[50px]">
					<div className="max-w-4xl mx-auto py-24 md:pt-24 px-3 flex flex-col">
						<div className="self-center flex items-center gap-10 md:pb-10">
							<div className="w-10 md:w-20 bg-[#C5C5C5] h-[3px] rounded-full"></div>
							<h1 className="text-[#414141] text-3xl md:text-5xl font-bold ">
								What we offer
							</h1>
							<div className="w-10 md:w-20 bg-[#C5C5C5] h-[3px] rounded-full"></div>
						</div>
						<div className="flex flex-wrap gap-8 justify-center pt-10">
							<div className="bg-[#E5E5E5] shadow-md rounded-2xl w-64 h-80 flex flex-col justify-between pt-10 p-6 items-center hover:scale-105 transition duration-300">
								<Image
									src={'/gear_icon.png'}
									width={100}
									height={100}
									alt="gear icon"
								/>

								<div className="">
									<h1 className="font-bold text-[#969696]">Technical Skills</h1>
									<p className="text-lg text-[#3B3B3B]">
										Master cutting-edge AI, machine learning, and data science
										skills.
									</p>
								</div>
							</div>

							<div className="bg-[#E5E5E5] shadow-md  rounded-2xl w-64 h-80 flex flex-col justify-around pb-8 px-6 items-center hover:scale-105 transition duration-300">
								<Image
									src={'/handshake_icon.png'}
									width={140}
									height={140}
									alt="gear icon"
								/>
								<div className="">
									<h1 className="font-bold text-[#969696]">
										Collaborative Projects
									</h1>
									<p className="text-lg text-[#3B3B3B]">
										Work together on exciting real-world AI projects.
									</p>
								</div>
							</div>

							<div className="bg-[#E5E5E5] shadow-md rounded-2xl w-64 h-80 flex flex-col justify-between pt-10 p-6 items-center hover:scale-105 transition duration-300">
								<Image
									src={'/rocket_icon.png'}
									width={100}
									height={100}
									alt="gear icon pt-"
								/>
								<div className="">
									<h1 className="font-bold text-[#969696]">Career Growth</h1>
									<p className="text-lg text-[#3B3B3B]">
										Boost your career through workshops, mentoring, and industry
										connections.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
