import posts from '../../../data/data.json'
import Link from 'next/link';

export default function Blog({ params }) {

 
  return (
    <div className='text-center pt-5'>
        <div className='font-bold text-xl'>
            Post list
        </div>
        {posts.map(p => 
        <p key={p.id}><Link key={p.id} href={`/blog/${p.id}`} className="hover:text-blue-700">{p.title}</Link></p>
      )}
    </div>
  );
}
