import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='container mx-auto p-4 flex justify-between items-center'>
            <Link to='/' className='text-2xl font-bold text-slate-800'>
      <h1 className='font-bold-text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Sahand</span>
        <span className='text-slate-700'>Estate</span>

      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="search" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64' />
        <FaSearch className='text-slate-500'/>
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/signin'>
        <li className='text-slate-700 hover:underline'>Signin</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}
