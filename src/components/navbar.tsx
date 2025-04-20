import React from 'react'
import {useTheme} from "../context/theme-provider"
import { Link } from "react-router-dom";

function Navbar() {
    const {theme, setTheme} = useTheme()
    return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link to={"/"}>
        <img
          src='clouds.png'
          alt="ClimateX logo"
          className="h-14"
        />
      </Link>

      <div>
        {/* search */}
        {/* theme-toggle  */}
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌜" : "☀️"}
        </button> 
      </div>

      
    </div>
  </header>
  )
}

export default Navbar