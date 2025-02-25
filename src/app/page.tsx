import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/page/Navbar";
import Footer from "@/components/page/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold mt-8 ">Hello, world!</h1>
      <div className="">
        <Link href="/about">About</Link> |{' '}
      </div>
      <Footer />
    </div>
  );
}
