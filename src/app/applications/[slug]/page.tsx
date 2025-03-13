import { notFound } from "next/navigation";
import rolesData from "@/data/roles.json";
import Navbar from "@/components/objects/navbar/Navbar";
import Footer from "@/components/objects/Footer";

interface Props {
	params: Promise<{ slug: string }>;
	// Add searchParams even if unused
	searchParams?: Promise<Record<string, string | string[]>>;
}

export async function generateStaticParams() {
	const data = rolesData as Record<
		string,
		Array<{
			name: string;
			category: string;
			description: string;
			responsibilities: string[];
			will_learn: string[];
		}>
	>;

	return Object.values(data)
		.flat()
		.map((role) => ({
			slug: role.name.toLowerCase().replace(/\s+/g, "-"),
		}));
}

export default async function RolePage(props: Props) {
	// Await both params and searchParams
	const [params] = await Promise.all([props.params, props.searchParams]);
	const { slug } = params;

	const role = Object.values(rolesData)
		.flat()
		.find((r) => r.name.toLowerCase().replace(/\s+/g, "-") === slug);

	if (!role) notFound();

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="bg-[#F1F1F1] flex-1 pb-40">
				<div className="pt-28 md:pt-32 max-w-4xl mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<div className="flex flex-col items-center gap-6 pb-20">
							<p className="text-gray-400 opacity-50 text-sm">Role</p>
							<h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
								{role.name}
							</h1>
							<p className="text-zinc-600">
								{role.category.charAt(0).toUpperCase() + role.category.slice(1)}
							</p>
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSe968iTlLdVUBTj53ThZVLhtT67W7KQxtVznMGPJRnFP0IQXA/viewform?usp=dialog">
								<button className="flex items-center gap-2 bg-white px-6 py-2 rounded-full">
									<p>Apply now</p>
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
								</button>
							</a>
						</div>
						<h1 className="font-bold pb-2">About</h1>
						<p className="mb-12 text-lg">{role.description}</p>
						<section className="mb-12">
							<h2 className="font-bold pb-2">Responsibilities</h2>
							<ul className="list-disc text-lg list-inside">
								{role.responsibilities.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</section>
						<section>
							<h2 className="font-bold pb-2">Will Learn</h2>
							<ul className="list-disc list-inside text-lg">
								{role.will_learn.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</section>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
