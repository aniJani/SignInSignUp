import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='bg-emerald-500'>
            <div className="flex justify-between items-center mx-auto p-3 text-white">
                <Link to='/'>
                    <h1 className='font-bold'>DrivNepal</h1>
                </Link>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
