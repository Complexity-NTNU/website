import React from 'react';

interface Phase {
	id: string;
	title: string;
	description: string;
}

const phases: Phase[] = [
	{
		id: 'P1',
		title: 'First Project',
		description: `1) Brand recognition
2) Establish the organization
3) Complete our first project
4) Build infrastructure`,
	},
	{
		id: 'P2',
		title: 'Second Project',
		description: `1) Tackle a larger project
2) Strengthen team talent
3) Increase project complexity`,
	},
	{
		id: 'Pn',
		title: 'Future Projects',
		description: `The next projects will tackle even greater challenges, blending hands-on innovation and practical learning to drive real impact.`,
	},
];

export default function Roadmap() {
	return (
		<div className="mx-auto max-w-4xl py-8 px-4">
			<div className="relative flex items-center justify-center gap-8 md:gap-12 w-full">
				<div className="absolute top-1/2 left-0 right-0 h-[2px] md:h-[3px] bg-gray-500" />
				{phases.map((phase, index) => {
					const tooltipPosition =
						index === 0
							? 'left-0 translate-x-0'
							: index === phases.length - 1
								? 'right-0 translate-x-0'
								: 'left-1/2 -translate-x-1/2';

					const arrowPosition =
						index === 0
							? 'left-8'
							: index === phases.length - 1
								? 'right-8'
								: 'left-1/2 -translate-x-1/2';

					return (
						<div
							key={phase.id}
							className={`group relative flex flex-col items-center ${index === 1 ? 'mr-10 md:mr-16' : ''}`}
						>
							<div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#414141] text-white text-lg md:text-xl font-bold rounded-lg cursor-pointer hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 shadow-md z-10">
								{phase.id}
							</div>
							<div
								className={`absolute bottom-full mb-4 w-48 sm:w-56 md:w-64 p-3 sm:p-4 bg-gray-900 text-white rounded-xl shadow-xl border border-gray-700 text-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out leading-relaxed ${tooltipPosition}`}
							>
								<h3 className="font-semibold text-base mb-2">{phase.title}</h3>
								<p className="whitespace-pre-line">{phase.description}</p>
								<div
									className={`absolute -bottom-2 w-4 h-4 bg-gray-900 rotate-45 border-l border-b border-gray-700 ${arrowPosition}`}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
