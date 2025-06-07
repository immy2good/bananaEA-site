import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-yellow-500">🍌</span>
              <span className="text-xl font-bold text-white">BananaEA</span>
            </div>
            <p className="text-sm">Advanced pattern recognition trading system for MetaTrader 4</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-yellow-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-yellow-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="hover:text-yellow-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#performance" className="hover:text-yellow-500">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-yellow-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-yellow-500">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/documentation" className="hover:text-yellow-500">
                  User Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-yellow-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-yellow-500">
                  Support Portal
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-yellow-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-yellow-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-yellow-500">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-yellow-500">
                  Risk Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} iTradeAIMS. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors.
            Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}
