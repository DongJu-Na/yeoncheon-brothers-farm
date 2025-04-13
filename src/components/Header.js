import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold text-amber-900">형제농장</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/features" className="text-amber-900 hover:text-amber-700">
                제품 특징
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-amber-900 hover:text-amber-700">
                형제 이야기
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-amber-900 hover:text-amber-700">
                연락처
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button 
            className="text-amber-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-amber-200">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                to="/features" 
                className="text-amber-900 hover:text-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                제품 특징
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-amber-900 hover:text-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                형제 이야기
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-amber-900 hover:text-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                연락처
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}