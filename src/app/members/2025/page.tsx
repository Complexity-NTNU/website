"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/objects/navbar/Navbar";
import Footer from "@/components/objects/Footer";
import TeamMember from "@/components/objects/TeamMember";
import memberData from "@/data/members.json";

interface MemberCardProps {
	year: number;
	positions: {
		name: string;
		members: {
			name: string;
			role: string;
			email?: string;
			linkedin?: string;
			github?: string;
			image?: string;
		}[];
	}[];
}

export default function Members() {
	const data = memberData as MemberCardProps[];
	const yearGroup = data[0];
	const teams = yearGroup.positions.map((position) => position.name);

	const [selectedTeams, setSelectedTeams] = useState<string[]>(teams);
	const [tempSelectedTeams, setTempSelectedTeams] = useState<string[]>(teams);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleTempTeamSelection = (team: string): void => {
		setTempSelectedTeams((prevSelected) =>
			prevSelected.includes(team)
				? prevSelected.filter((t) => t !== team)
				: [...prevSelected, team],
		);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setShowDropdown(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (!showDropdown) {
			setTempSelectedTeams(selectedTeams);
		}
	}, [showDropdown, selectedTeams]);

	const filteredPositions = yearGroup.positions.filter((position) =>
		selectedTeams.includes(position.name),
	);

	const memberCount = filteredPositions.reduce(
		(sum, position) => sum + position.members.length,
		0,
	);

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="bg-[#D9D9D9] flex-1">
				<div className="bg-[#F1F1F1] pb-20 lg:pb-96 px-4">
					<div className=" max-w-6xl mx-auto">
						{memberData.length > 0 && (
							<div className="container mx-auto py-20">

								{/* Filter Header */}
								<div className="flex justify-between mb-8 pt-8 ">
									<div className="text-[#7C7C7C]">{memberCount} members</div>
									<div className="relative" ref={dropdownRef}>
										<button
											onClick={() => setShowDropdown(!showDropdown)}
											className="flex gap-2 items-center hover:text-[#7C7C7C] transition duration-300"
										>
											<p>All teams</p>
											<span>&#9662;</span>
										</button>
										{showDropdown && (
											<div className="z-50 absolute left-1/2 transform -translate-x-3/4 md:left-auto md:translate-x-0 md:right-2 mt-4 p-2 bg-white border rounded-lg shadow w-48 transition-all duration-300">
												{teams.map((team: string) => (
													<label
														key={team}
														className="flex self-center p-2 transition duration-300 cursor-pointer group"
													>
														<div className="relative">
															<input
																type="checkbox"
																checked={tempSelectedTeams.includes(team)}
																onChange={() => toggleTempTeamSelection(team)}
																className="peer cursor-pointer appearance-none w-[14px] h-[14px] border rounded-[0.3rem] checked:bg-gray-800"
															/>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="absolute w-[10px] h-[10px] fill-white hidden peer-checked:block pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-2/3"
																viewBox="0 0 24 24"
															>
																<path d="M20.285 6.708a1 1 0 0 0-1.414-1.416l-8.57 8.58-4.285-4.29a1 1 0 0 0-1.414 1.415l5 5a1 1 0 0 0 1.414 0l9-9z" />
															</svg>
														</div>
														<span className="ml-2 text-[0.92rem] capitalize">
															{team.replace("_", " ")}
														</span>
													</label>
												))}
												<div className="w-full h-[1px] bg-zinc-800 opacity-5 my-4"></div>
												<div className="flex justify-end gap-5 pb-2 pr-2">
													<button
														onClick={() => setTempSelectedTeams([])}
														className="text-sm font-medium text-zinc-400 hover:text-zinc-300 transition duration-300"
													>
														Clear All
													</button>
													<button
														onClick={() => {
															setSelectedTeams(tempSelectedTeams);
															setShowDropdown(false);
														}}
														className="text-sm text-zinc-800 font-medium hover:text-zinc-500 transition duration-300"
													>
														Apply
													</button>
												</div>
											</div>
										)}
									</div>
								</div>

								{/* Filtered Positions */}
								{filteredPositions.map((position) => (
									<div key={position.name} className="mb-12">
										<h3 className="text-lg text-zinc-400 font-semibold mb-6">
											{position.name}
										</h3>
										<div className="flex flex-wrap justify-center gap-6">
											{position.members.map((member) => (
												<TeamMember
													key={member.name}
													name={member.name}
													role={member.role}
													email={member.email}
													linkedin={member.linkedin}
													github={member.github}
													image={member.image}
												/>
											))}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
