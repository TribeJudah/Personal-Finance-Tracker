export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Track your income and expenses in real time
          </h1>
          <p className="mt-4 text-gray-600">
            Visualize your spending habits and stay in control of your finances.
          </p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
            Start Tracking
          </button>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/illustration.png"
            alt="Finance Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}