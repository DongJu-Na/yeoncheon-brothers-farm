import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">흙염소 진액</h3>
            <p className="mb-2">자연에서 온 건강, 진심을 담았습니다.</p>
            <div className="flex items-center mt-4">
              <Link to="https://instagram.com" className="text-amber-100 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">연락처</h3>
            <p className="mb-2">전화: 010-1234-5678</p>
            <p className="mb-2">이메일: info@heukgoat.com</p>
            <p>주소: -</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">영업시간</h3>
            <p className="mb-2">월-금: 9:00 - 18:00</p>
            <p className="mb-2">토: 9:00 - 13:00</p>
            <p>일요일 및 공휴일 휴무</p>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} 형제농장. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}