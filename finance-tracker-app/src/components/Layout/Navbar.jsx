import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">

          {/* Logo / App Name */}
          <div className="text-lg font-semibold text-gray-800">
            Personal Finance Tracker
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-600 hover:text-gray-900">
              App
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
              Get Ripple
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button className="block w-full text-left text-gray-700">
              App
            </button>

            <button className="w-full bg-green-600 text-white py-2 rounded-md">
              Get Ripple
            </button>
          </div>
        )}
      </Container>
    </nav>
  )
}