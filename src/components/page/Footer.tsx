import Image from 'next/image';
export default function Footer() {
	return (
		<footer className="bg-[#1E1E1E] w-full">
			<div className="p-2 hidden md:block">
				<Image src="logo_white.svg" alt="logo" width={50} height={50} />
			</div>

			<div className="max-w-5xl mx-auto  flex md:justify-between justify-center p-8 pb-32">
				<div className=" text-white w-full">
					<h1 className=" text-3xl font-bold pb-4">The future starts now</h1>
					<div className="grid grid-cols-2 md:grid-cols-3 justyfy-between ">
						<div>
							<h1 className="text-[#A1A1A1] pt-2 ">Social Media</h1>
							<div className="text-xl">
								<a href="/">
									<p className="py-2">LinkedIn</p>
								</a>
								<a href="/">
									<p>Instagram</p>
								</a>
							</div>
						</div>
						<div className="pl-10 md:pl-0">
							<h1 className="text-[#A1A1A1] pt-2 ">Website</h1>
							<div className="text-xl ">
								<a href="/about">
									<p className="py-2">About</p>
								</a>
								<a href="/members">
									<p className="py-2">Members</p>
								</a>
								<a href="/sponsors">
									<p className="pt-2">Sponsors</p>
								</a>
							</div>
						</div>
						<div>
							<h1 className="text-[#A1A1A1] pt-2 ">Contact</h1>
							<div className="text-xl">
								<p className="py-2">nikolaiborbe@gmail.com</p>
								<p className="py-2">hellandtrym@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center md:flex-row text-md md:text-xl md:justify-between p-2">
				<div className="text-white">© 2025 Compexity NTNU</div>

				<div className="text-[#565656]">
					Creative Direction by Ari &{' '}
					<a href="https://nikolai.vip/">
						<u>Nikolai</u>
					</a>
				</div>
			</div>
		</footer>
	);
}
