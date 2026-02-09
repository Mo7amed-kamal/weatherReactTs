import React from 'react'
import logo from '../../assets/image/weather-app.png'
export default function Navbar() {
  return (
    <>
<nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-lg ring-1 ring-white/30" />
        <span className="text-white font-semibold text-lg tracking-wide">
          Your App Weather
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-2 cursor-pointer">
        <a className="px-4 py-2 rounded-xl text-white text-sm font-medium bg-white/10 border border-white/20 backdrop-blur-md transition hover:bg-white/20">
          Dashboard
        </a>
        <a className="px-4 py-2 rounded-xl text-white/80 text-sm font-medium border border-transparent transition hover:bg-white/10 hover:text-white">
          Team
        </a>
        <a className="px-4 py-2 rounded-xl text-white/80 text-sm font-medium border border-transparent transition hover:bg-white/10 hover:text-white">
          Projects
        </a>
        <a className="px-4 py-2 rounded-xl text-white/80 text-sm font-medium border border-transparent transition hover:bg-white/10 hover:text-white">
          Calendar
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full text-white/80 border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 hover:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
            <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-medium shadow-md">
          A
        </div>
      </div>

    </div>
  </div>
</nav>


    </>
  )
}
