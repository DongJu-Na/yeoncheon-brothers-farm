export default function Testimonial({ quote, name, location }) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-amber-200">
        <p className="text-amber-800 text-lg italic mb-6">"{quote}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-amber-200 rounded-full mr-4"></div>
          <div>
            <p className="font-semibold text-amber-900">{name}</p>
            <p className="text-amber-700 text-sm">{location}</p>
          </div>
        </div>
      </div>
    );
  }