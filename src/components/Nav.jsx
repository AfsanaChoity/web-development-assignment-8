
import { Link, NavLink } from "react-router-dom";



const Nav = () => {
   
    return (
        <div className="lg:mx-20 mt-8">
            

            
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/' className={({ isActive }) => isActive && ' text-green-500'}>Home</NavLink>
                            <NavLink to='/listedBooks' className={({ isActive }) => isActive && ' text-green-500'}>Listed Books</NavLink>
                            <NavLink to='/pageToRead' className={({ isActive }) => isActive && ' text-green-500'}>Pages to Read</NavLink>
                            {/* <NavLink to='/bookDetails' className={({ isActive }) => isActive && ' text-green-500'}>Book Details</NavLink> */}
                            <NavLink to='/contact' className={({ isActive }) => isActive && ' text-green-500'}>Contact Us</NavLink>
                            <NavLink to='/faq' className={({ isActive }) => isActive && ' text-green-500 border border-green-500 rounded-md py-2 px-4'}>FAQ</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost gap-0 text-3xl normal-case font-bold">BoiBazar</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-6 lg:items-center">
                        <NavLink to='/' className={({ isActive }) => isActive && ' text-green-500 border border-green-500 rounded-md py-2 px-4'}>Home</NavLink>
                        <NavLink to='/listedBooks' className={({ isActive }) => isActive && ' text-green-500 border border-green-500 rounded-md py-2 px-4'}>Listed Books</NavLink>
                        <NavLink to='/pageToRead' className={({ isActive }) => isActive && ' text-green-500 border border-green-500 rounded-md py-2 px-4'}>Pages to Read</NavLink>
                        {/* <NavLink to='/bookDetails' className={({ isActive }) => isActive && ' text-green-500 border border-green-500 rounded-md py-2 px-4'}>Book Details</NavLink> */}
                        <NavLink to='/contact' className={({ isActive }) => isActive && ' text-green-500 border border-green-500 rounded-md py-2 px-4'}>Contact Us</NavLink>
                        <NavLink to='/faq' className={({ isActive }) => isActive && ' text-green-500 border border-green-500 rounded-md py-2 px-4'}>FAQ</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <button className="btn btn-success text-white bg-green-500">Sign in</button>

                    <button className="btn btn-success text-white bg-blue-500">Sign Up</button>
                </div>
            </div>

        </div>
    );
};

export default Nav;