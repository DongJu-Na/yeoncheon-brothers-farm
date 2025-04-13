import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-amber-900 mb-6">연락처</h1>
            <p className="text-lg md:text-xl text-amber-800 max-w-3xl mx-auto">
              궁금한 점이 있으시거나 주문을 원하시면 언제든지 연락주세요. 정성을 다해 답변 드리겠습니다.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8">문의하기</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-amber-900">
                        이름
                      </label>
                      <Input id="name" placeholder="이름을 입력해주세요" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-amber-900">
                        연락처
                      </label>
                      <Input id="phone" placeholder="연락처를 입력해주세요" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-amber-900">
                      이메일
                    </label>
                    <Input id="email" type="email" placeholder="이메일을 입력해주세요" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-amber-900">
                      제목
                    </label>
                    <Input id="subject" placeholder="제목을 입력해주세요" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-amber-900">
                      문의 내용
                    </label>
                    <Textarea id="message" placeholder="문의 내용을 입력해주세요" className="min-h-[150px]" />
                  </div>
                  <Button className="w-full px-6 py-2">문의하기</Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8">연락처 정보</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-amber-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">주소</h3>
                      <p className="text-amber-800">-</p>
                      <p className="text-amber-800 mt-1">우편번호: -</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-amber-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">전화</h3>
                      <p className="text-amber-800">010-1234-5678</p>
                      <p className="text-amber-800 mt-1">070-1234-5678 (팩스)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-amber-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">이메일</h3>
                      <p className="text-amber-800">info@heukgoat.com</p>
                      <p className="text-amber-800 mt-1">order@heukgoat.com (주문문의)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-amber-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">영업시간</h3>
                      <p className="text-amber-800">월-금: 9:00 - 18:00</p>
                      <p className="text-amber-800">토: 9:00 - 13:00</p>
                      <p className="text-amber-800">일요일 및 공휴일 휴무</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-white rounded-lg shadow-sm border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-4">농장 방문 안내</h3>
                  <p className="text-amber-800 mb-2">
                    저희 농장은 사전 예약을 통해 방문하실 수 있습니다. 흙염소를 직접 보고, 진액 제조 과정을 견학하실 수
                    있습니다.
                  </p>
                  <p className="text-amber-800">방문을 원하시는 분은 최소 3일 전에 전화로 예약해 주세요.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">찾아오시는 길</h2>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              {/* 실제 지도를 넣을 자리입니다. 현재는 플레이스홀더 이미지로 대체합니다. */}
              <div className="absolute inset-0 bg-amber-200 flex items-center justify-center">
                <p className="text-amber-800 text-lg font-medium">지도가 표시될 영역입니다</p>
              </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              <h3 className="font-semibold text-amber-900 mb-4">오시는 방법</h3>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-amber-200">
                  <h4 className="font-medium text-amber-900 mb-2">자가용 이용 시</h4>
                  <p className="text-amber-800">
                    -
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-sm border border-amber-200">
                  <h4 className="font-medium text-amber-900 mb-2">대중교통 이용 시</h4>
                  <p className="text-amber-800">
                    -
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}