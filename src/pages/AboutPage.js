import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-amber-900 mb-6">
              형제의 이야기
            </h1>
            <p className="text-lg md:text-xl text-amber-800 max-w-3xl mx-auto">
              20년 넘게 흙염소를 직접 키우고 전통 방식으로 진액을 만들어온 형제의 이야기를 소개합니다.
            </p>
          </div>
        </section>

        {/* Brothers Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="형제의 어린 시절"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900">어린 시절부터 이어온 전통</h2>
                <p className="text-amber-800">
                  저희 형제는 어린 시절부터 할아버지, 아버지를 따라 흙염소를 키우며 자랐습니다. 할아버지께서
                  1950년대부터 시작하신 흙염소 사육과 진액 제조 방법을 3대에 걸쳐 이어오고 있습니다.
                </p>
                <p className="text-amber-800">
                  어린 시절 방과 후에는 항상 염소들에게 먹이를 주고, 방목하는 일을 도왔습니다. 자연스럽게 흙염소의
                  습성과 건강한 사육 방법을 배우게 되었고, 이것이 지금의 저희를 만들었습니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-4 order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900">도시 생활을 뒤로하고</h2>
                <p className="text-amber-800">
                  저희 형제는 각자 서울에서 직장 생활을 하다가 10년 전, 아버지께서 건강이 악화되시면서 고향으로 돌아와
                  가업을 이어받기로 결심했습니다. 처음에는 쉽지 않은 결정이었지만, 자연 속에서 정직하게 일하는 삶의
                  가치를 깨닫게 되었습니다.
                </p>
                <p className="text-amber-800">
                  도시의 편리함을 뒤로하고 시골로 돌아온 것이 처음에는 어색했지만, 맑은 공기와 자연의 리듬에 맞춰 사는
                  삶이 저희에게 더 큰 행복을 가져다 주었습니다. 무엇보다 조상님의 지혜를 이어받아 건강한 먹거리를
                  만든다는 자부심이 큽니다.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <img
                  src="images/main.png"
                  alt="고향으로 돌아온 형제"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="정성을 다해 만드는 과정"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900">정성을 다해 만드는 과정</h2>
                <p className="text-amber-800">
                  저희는 매일 아침 일찍 일어나 흙염소들에게 신선한 풀과 깨끗한 물을 줍니다. 넓은 초원에서 자유롭게
                  뛰어놀 수 있도록 하고, 정기적으로 건강 상태를 확인합니다.
                </p>
                <p className="text-amber-800">
                  진액을 만드는 과정은 시간과 정성이 많이 필요합니다. 엄선된 재료를 깨끗이 손질하고, 전통 방식 그대로
                  72시간 동안 저온에서 정성껏 달입니다. 이 과정에서 어떠한 첨가물도 사용하지 않으며, 자연 그대로의
                  영양소를 최대한 보존하기 위해 노력합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">저희의 철학</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 text-center">
                <h3 className="text-lg font-semibold mb-4 text-amber-900">자연과의 조화</h3>
                <p className="text-amber-700">
                  자연의 순환을 존중하고, 환경에 부담을 주지 않는 지속 가능한 방식으로 흙염소를 사육합니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 text-center">
                <h3 className="text-lg font-semibold mb-4 text-amber-900">정직한 생산</h3>
                <p className="text-amber-700">
                  어떠한 타협 없이 최고 품질의 원료만을 사용하며, 모든 생산 과정을 투명하게 공개합니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 text-center">
                <h3 className="text-lg font-semibold mb-4 text-amber-900">고객과의 신뢰</h3>
                <p className="text-amber-700">
                  가족에게 대접하는 마음으로 정성을 다해 제품을 만들고, 고객님과의 약속을 소중히 지킵니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Farm Images */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-amber-900">저희 농장의 모습</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="농장 전경"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="흙염소 방목"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="진액 제조 과정"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
                <img
                  src="images/main.png"
                  alt="포장 과정"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}