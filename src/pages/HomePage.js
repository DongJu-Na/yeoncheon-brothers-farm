import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BenefitCard from '../components/BenefitCard';
import Testimonial from '../components/Testimonial';
import { Button } from '../components/Button';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Header />

      <main>
        <HeroSection />

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">
              정성으로 만든 건강한 선택
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard
                number="1"
                title="100% 직접 사육한 흙염소 사용"
                description="저희 형제가 직접 키운 건강한 흙염소만을 사용하여 최상의 품질을 보장합니다."
              />
              <BenefitCard
                number="2"
                title="방부제 무첨가, 전통 방식 그대로"
                description="어떠한 인공 첨가물도 넣지 않고 조상님들의 방식 그대로 정성을 다해 만듭니다."
              />
              <BenefitCard
                number="3"
                title="정직한 가격, 믿을 수 있는 품질"
                description="중간 유통 과정 없이 직접 생산하고 판매하여 합리적인 가격으로 제공합니다."
              />
            </div>
            <div className="text-center mt-12">
              <Link to="/features">
                <Button className="px-6 py-2">제품 특징 더보기</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Nature Image Section */}
        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <img
                src="images/main.png"
                alt="자연 속의 흙염소"
                className="object-cover rounded-lg w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-transparent flex items-center">
                <div className="p-8 md:p-12 max-w-md">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">자연 그대로의 건강함</h2>
                  <p className="text-amber-50 text-lg">
                    맑은 공기, 깨끗한 물, 신선한 풀을 먹고 자란 흙염소의 영양을 그대로 담았습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Brothers Section Preview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">형제의 이야기</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="흙염소 진액을 만드는 형제"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <p className="text-amber-800 text-lg">
                  안녕하세요, 저희는 20년 넘게 흙염소를 직접 키우고 전통 방식으로 진액을 만들어온 형제입니다. 도시의
                  삶을 뒤로하고 고향으로 돌아와 조상님의 지혜를 이어받아 정성을 다해 흙염소 진액을 만들고 있습니다.
                </p>
                <div className="pt-4">
                  <Link to="/about">
                    <Button className="px-6 py-2">더 알아보기</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">고객님의 소리</h2>
            <Testimonial
              quote="매일 아침 한 잔씩 마시고 있는데, 확실히 체력이 좋아진 것을 느낍니다. 무엇보다 첨가물 없이 정직하게 만든다는 점이 마음에 들어요. 형제분들의 정성이 느껴집니다."
              name="김지영님"
              location="서울시 거주, 3년째 애용 중"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}