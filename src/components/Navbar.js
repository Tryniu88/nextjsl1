import Link from 'next/link';


export default function Navbar(){


return(

<div className="flex justify-center gap-4">
<Link className='text-cyan-400'   href="/">Home</Link>
<Link className='text-red-400' href="/strona1">Strona1</Link>
 <Link className='text-yellow-400' href="/strona2">Strona2</Link>
 <Link className ='text-green-400' href ="/strona3">Strona3</Link>
 <Link className='text-purple-400' href="/strona4">Strona4</Link>
 <Link className='text-pink-400' href="/strona5">Strona5</Link>
 <Link className='text-blue-800' href="/strona6">Strona6</Link>
</div>

)

   


}