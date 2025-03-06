'use client';
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/page/navbar/Navbar';
import Footer from '@/components/page/Footer';
import rolesData from '@/data/roles.json';
import Link from 'next/link';

interface Role {
	name: string;
	description: string;
	responsibilities: string[];
	will_learn: string[];
}

type RolesDataType = Record<string, Role[]>;

interface RoleWithCategory {
	role: Role;
	category: string;
}

export default function Applications() {
	const data = rolesData as RolesDataType;
	const teams: string[] = Object.keys(data);

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
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (!showDropdown) {
			setTempSelectedTeams(selectedTeams);
		}
	}, [showDropdown, selectedTeams]);

	const filteredRoles: RoleWithCategory[] = selectedTeams.flatMap(
		(team: string) =>
			(data[team] || []).map((role: Role) => ({
				role,
				category: team,
			})),
	);

	const rolesCount: number = filteredRoles.length;

	const slugify = (text: string): string => {
		return text.toLowerCase().replace(/\s+/g, '-');
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="bg-[#F1F1F1] flex-1">
				{/* Menu to select roles */}
				<div className="pt-28 md:pt-60 max-w-4xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="text-[#7C7C7C]">{rolesCount} roles</div>
						<div className="relative" ref={dropdownRef}>
							<button
								onClick={() => setShowDropdown(!showDropdown)}
								className="flex gap-2 items-center hover:text-[#7C7C7C] transition duration-300"
							>
								<p>All teams</p>
								<span>&#9662;</span>
							</button>
							{showDropdown && (
								<div className="absolute left-1/2 transform -translate-x-3/4 md:left-auto md:translate-x-0 md:right-2 mt-2 p-2 bg-white border rounded-lg shadow w-48 transition-all duration-300">
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
												{team.replace('_', ' ')}
											</span>
										</label>
									))}
									{/* Action buttons */}
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
				</div>
				{/* Roles List */}
				<div className="flex flex-wrap justify-center gap-10 pt-10 max-w-4xl mx-auto px-4 md:pb-20">
					{filteredRoles.map(({ role, category }, index: number) => (
						<div
							key={index}
							className="w-full border-b-[1px] hover:border-b-[#666666]  transition duration-300 flex justify-between items-center pb-4"
						>
							<Link
								key={index}
								href={`/applications/${slugify(role.name)}`}
								className="w-full cursor-pointer"
							>
								<div>
									<h2 className="text-lg font-medium mb-1">{role.name}</h2>
									<p className="text-gray-500 text-sm capitalize">
										{category.replace('_', ' ')}
									</p>
								</div>
							</Link>
							<Link
								className="w-max"
								href="https://docs.google.com/forms/d/e/1FAIpQLSe968iTlLdVUBTj53ThZVLhtT67W7KQxtVznMGPJRnFP0IQXA/viewform?usp=dialog"
							>
								<div className="flex group items-center justify-end bg-whtie pl-8">
									<span className="group-hover:text-zinc-600 font-semibold text-sm mr-2 transition w-max duration-300">
										Apply now
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="w-4 h-4 transition duration-300 group-hover:text-zinc-600"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7 17L17 7"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7 7h10v10"
										/>
									</svg>
								</div>
							</Link>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}
