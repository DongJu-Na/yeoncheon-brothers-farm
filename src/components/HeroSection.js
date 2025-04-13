import { Button } from './Button';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-amber-900">
              형제가 직접 기른 흙염소로 만든 <br/>정직한 진액
            </h1>
            <p className="text-lg md:text-xl text-amber-800">자연에서 온 건강, 진심을 담았습니다.</p>
            <div className="pt-4">
              <Button className="px-6 py-2">자세히 보기</Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              src="images/main.png"
              alt="메인 이미지"
              className="object-fill rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}