import Link from "next/link";

const Navbar = () => {

    return(
        <div className="bg-[#f0f9ff] text-[#082f49] border-b-2 border-neutral-600 py-4 h-20 md:h-24 font-bold">
            <div className="flex justify-center space-x-8 text-2xl py-5">
                <Link href="/" className="hover:text-blue-700">Home</Link>
                <Link href="/about" className="hover:text-blue-700">About</Link>
                <Link href="/blog" className="hover:text-blue-700">Blog</Link>
            </div>
        </div>
    )
}

export default Navbar;