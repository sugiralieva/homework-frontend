import Image from "next/image";
import posts from '../../data/data.json'
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <p className='text-xl pb-5 text-center pt-10 font-bold'>Welcome to the main page of the site! </p>
        <p className='text-lg pb-5 text-center'> 
        To learn more about us, click <Link href="/about" className="text-[#0ea5e9]">here.</Link>
        To read posts click <Link href="/blog" className="text-[#0ea5e9]">here.</Link>
        </p>
    </div>
  );
}
