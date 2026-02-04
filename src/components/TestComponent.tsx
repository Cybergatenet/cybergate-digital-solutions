export default function TestComponent() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-royal-blue-600 mb-4">
          Tailwind is working! 🎉
        </h1>
        <p className="text-gray-600 mb-4">
          If you see royal blue text and proper styling, Tailwind CSS is working correctly.
        </p>
        <button className="btn-primary">
          Test Button
        </button>
        <button className="btn-secondary ml-4">
          Secondary Button
        </button>
      </div>
    </div>
  )
}