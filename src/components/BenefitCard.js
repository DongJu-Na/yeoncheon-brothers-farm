export default function BenefitCard({ number, title, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
        <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-amber-800 text-xl font-bold">{number}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-amber-900">{title}</h3>
        <p className="text-amber-700">{description}</p>
      </div>
    );
  }