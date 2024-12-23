import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/applied-jobs">Abplied Jobs</NavLink></li>
    </>

    return (

        <div className="bg-[#F9F9FF]">
            <div className="navbar container mx-auto flex">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl md:text-4xl text-black">Career<span className="gradient_text">Hub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg text-[#757575] gradient_text_hover">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/jobs'}>
                <a className="text-lg border-none btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r text-white hover:from-[#9873FF] hover:to-[#7E90FE]">Apply Now</a>
                </Link>
            </div>
        </div>
        </div>

    );
};

export default Header;