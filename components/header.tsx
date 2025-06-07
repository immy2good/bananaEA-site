"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-500">🍌</span>
            <span className="text-xl font-bold">BananaEA</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-yellow-500 transition-colors">
            Features
          </Link>
          <Link href="#performance" className="text-sm font-medium hover:text-yellow-500 transition-colors">
            Performance
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-yellow-500 transition-colors">
            Pricing
          </Link>
          <Link href="/documentation" className="text-sm font-medium hover:text-yellow-500 transition-colors">
            Documentation
          </Link>
          <ThemeToggle />
          <Button variant="outline" className="ml-4">
            Login
          </Button>
          <Button>Get Started</Button>
        </nav>
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#performance"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Performance
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/documentation"
              className="text-sm font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
