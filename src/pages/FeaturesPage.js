import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/Button';

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-amber-900 mb-6">
              제품 특징
            </h1>
            <p className="text-lg md:text-xl text-amber-800 max-w-3xl mx-auto">
              흙염소 진액은 자연 그대로의 영양을 담아 건강에 도움을 드립니다. 정성을 다해 만든 저희 제품의 특별한 점을
              소개합니다.
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="직접 사육한 흙염소"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900">100% 직접 사육한 흙염소 사용</h2>
                <p className="text-amber-800">
                  저희 형제가 직접 키운 건강한 흙염소만을 사용합니다. 깨끗한 환경에서 자연 그대로의 먹이를 먹고 자란
                  흙염소는 영양가가 풍부하고 건강에 좋은 성분을 가득 담고 있습니다.
                </p>
                <p className="text-amber-800">
                  매일 아침 신선한 풀과 깨끗한 물을 먹이고, 넓은 초원에서 자유롭게 뛰어놀 수 있도록 합니다. 이렇게
                  건강하게 자란 흙염소만을 엄선하여 진액을 만듭니다.
                </p>
                <ul className="list-disc pl-5 text-amber-800 space-y-2">
                  <li>무항생제, 무첨가물 사육</li>
                  <li>자연 방목 환경에서 건강하게 성장</li>
                  <li>엄격한 품질 관리 시스템</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-4 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900">방부제 무첨가, 전통 방식 그대로</h2>
                <p className="text-amber-800">
                  어떠한 인공 첨가물도 넣지 않고 조상님들의 방식 그대로 정성을 다해 만듭니다. 현대적인 기술로 위생을
                  철저히 관리하면서도, 전통의 맛과 영양은 그대로 보존합니다.
                </p>
                <p className="text-amber-800">
                  천연 재료만을 사용하여 오랜 시간 정성껏 달여 진액의 영양소를 최대한 추출합니다. 이러한 전통 방식은
                  시간과 정성이 많이 들지만, 건강한 제품을 만들기 위한 저희의 철학입니다.
                </p>
                <ul className="list-disc pl-5 text-amber-800 space-y-2">
                  <li>100% 천연 재료만 사용</li>
                  <li>저온 장시간 추출 방식</li>
                  <li>방부제, 색소, 향료 무첨가</li>
                </ul>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <img
                  src="images/main.png"
                  alt="전통 방식의 제조 과정"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="정직한 가격, 믿을 수 있는 품질"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900">정직한 가격, 믿을 수 있는 품질</h2>
                <p className="text-amber-800">
                  중간 유통 과정 없이 직접 생산하고 판매하여 합리적인 가격으로 제공합니다. 저희는 최고의 품질을
                  유지하면서도 고객님께 부담 없는 가격으로 제품을 전달하고자 합니다.
                </p>
                <p className="text-amber-800">
                  모든 제조 과정은 식품안전관리인증(HACCP) 기준을 준수하며, 엄격한 품질 검사를 거쳐 안전하고 믿을 수
                  있는 제품만을 고객님께 전달합니다.
                </p>
                <ul className="list-disc pl-5 text-amber-800 space-y-2">
                  <li>직거래를 통한 합리적인 가격</li>
                  <li>철저한 품질 관리 시스템</li>
                  <li>정기 구독 시 추가 할인 혜택</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Specifications */}
        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">제품 사양</h2>

            <div className="bg-white rounded-lg shadow-sm border border-amber-200 overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">기본 정보</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">제품명</span>
                      <span className="text-amber-700">흙염소 진액</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">용량</span>
                      <span className="text-amber-700">80ml × 30포</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">원재료</span>
                      <span className="text-amber-700">100% 국내산 흙염소</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">제조일자</span>
                      <span className="text-amber-700">주문 후 제조</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 md:p-8 bg-amber-50">
                  <h3 className="text-xl font-semibold mb-4 text-amber-900">영양 정보</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">열량</span>
                      <span className="text-amber-700">25kcal</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">단백질</span>
                      <span className="text-amber-700">5g</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">지방</span>
                      <span className="text-amber-700">0.5g</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800 font-medium">탄수화물</span>
                      <span className="text-amber-700">2g</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Consume */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">섭취 방법</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-800 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-amber-900">1포를 따뜻한 물에 타서</h3>
                <p className="text-amber-700">1포(80ml)를 따뜻한 물 100ml에 희석하여 드시면 좋습니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-800 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-amber-900">하루 1-2회 섭취</h3>
                <p className="text-amber-700">아침, 저녁으로 하루 1-2회 꾸준히 섭취하시는 것이 좋습니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-800 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-amber-900">공복에 섭취 권장</h3>
                <p className="text-amber-700">영양 흡수를 위해 식사 30분 전 공복에 드시는 것이 가장 효과적입니다.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="px-6 py-2">구매하기</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}