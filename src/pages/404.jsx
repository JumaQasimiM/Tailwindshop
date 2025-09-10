import { Link } from "react-router-dom"
const P404 = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-lg">
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="404 illustration"
          className="w-64 mx-auto mb-8"
        />
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-2">Oops! Page Not Found 😔</p>
        <p className="text-gray-500 mb-6">
          The page you're looking for might have been removed or is temporarily unavailable.
        </p>
        {/* Button */}
        <h3
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          <Link to="/"> 🔙 Go Back Home</Link>
        </h3>
      </div>
    </div>
  )
}
export default P404