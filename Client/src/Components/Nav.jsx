import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <>
            <nav className="flex flex-row justify-between bg-slate-800 text-white px-16 items-center">
                <div className="text-3xl">
                    <Link to='/'>Logo</Link>
                </div>
                <div className="flex flex-row">
                    <Link to='/about'><div className="w-20 h-20 flex justify-center items-center hover:text-slate-100 hover:bg-blue-700">About</div></Link>               
                    <Link to='/contact'><div className="w-20 h-20 flex justify-center items-center hover:text-slate-100 hover:bg-blue-700">Contact</div></Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;