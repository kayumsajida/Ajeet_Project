import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link to="#" className="inline-flex items-center">
              <img src="src/assets/images/logo.svg" alt="" />
              <span className="text-2xl font-bold ms-2">Frontier Asia Capital</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Home</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Unlisted Shares</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">FDs</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Refer</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Learn</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">About</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Media</Link>
          </div>

          {/* Login/Signup (Always Visible) */}
          <div className="hidden md:flex gap-2">
            <Link to="/login" className="border border-neutral-300 hover:bg-primary hover:text-white hover:border-primary px-5 py-1 rounded-full transition duration-500">Log in</Link>
            <Link to="/signup" className="border border-neutral-300 hover:bg-primary hover:text-white hover:border-primary px-5 py-1 rounded-full transition duration-500">Sign up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Home</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Unlisted Shares</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">FDs</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Refer</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Learn</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">About</Link>
            <Link to="#" className="text-neutral-600 hover:text-primary transition font-medium">Media</Link>
            <div className="flex flex-col gap-2">
              <Link to="/login" className="border border-neutral-300 hover:bg-primary hover:text-white hover:border-primary px-5 py-1 rounded-full transition duration-500">Log in</Link>
              <Link to="/signup" className="border border-neutral-300 hover:bg-primary hover:text-white hover:border-primary px-5 py-1 rounded-full transition duration-500">Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;