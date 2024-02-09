
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='absolute bg-transparent flex justify-center w-[100%] top-0 z-20'>
            <div className="flex justify-between items-center m-4 p-6 text-[#ffffff]">
                <ul className='flex gap-8'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/'>
                        <h1 className='font-extrabold border-x-2 border-y-2 border-dotted '>DrivNepal</h1>
                     </Link>
                    <Link to='/sign-in'>
                        <li>Sign In</li>
                    </Link>
                    <Link>
                        <li>Guest</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
