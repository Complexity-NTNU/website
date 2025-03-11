export default function NavFooter() {
	return (
		<div className="mt-10 w-full h-screen ">
			<div className="px-8">
				<h1 className="font-bold text-white text-2xl">The future starts now</h1>
				<div className="grid text-white gap-8 pt-4">
					<div className="">
						<div className="text-sm text-[#A1A1A1]">Social Media</div>
						<div>
							<p className="py-2">LinkedIn</p>
							<p>Instagram</p>
						</div>
					</div>
					<div className="">
						<div className="text-sm text-[#A1A1A1]">Contact</div>
						<div>
							<p className="py-2">nikolaiborbe@gmail.com</p>
							<p className="">hellandtrym@gmail.com</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center pt-6 ">
				<p className="text-white">© 2025 Compexity NTNU</p>
				<p className="text-[#A1A1A1]">
					Website create by Ari &{' '}
					<u>
						<a href="https://nikolai.vip/">Nikolai</a>
					</u>
				</p>
			</div>
		</div>
	);
}
