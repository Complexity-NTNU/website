import React from "react";

interface HomepageBigCardProps {
	category: string;
	title: string;
	body: string;
	buttonLink: string;
	buttonText: string;
	background: boolean;
}

export default function HomepageBigCard(props: HomepageBigCardProps) {
	return (
		<div className="bg-white min-w-80 rounded-3xl flex-1 p-6 ">
			<p className="text-zinc-300 pb-2 text-sm font-bold">{props.category} </p>
			<h1 className="text-xl pb-2 text-[#3B3B3B] md:text-2xl font-semibold">
				{props.title}
			</h1>
			<p className="pb-8 ">{props.body}</p>
			<a href={props.buttonLink}>
				<button
					className={`bg-[#3B3B3B] hover:bg-[#555555] transition duration-300  rounded-xl w-full py-3 px-4 ${
						props.background
							? "bg-[#3B3B3B] text-white "
							: "bg-white border-2 border-black hover:border-[#555555] hover:text-white text-black"
					} `}
				>
					{props.buttonText}
				</button>
			</a>
		</div>
	);
}
