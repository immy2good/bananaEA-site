import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function FeatureList() {
  const features = [
    {
      category: "Pattern Recognition",
      items: [
        "Three distinct Banana pattern types for buy and sell signals",
        "EMA filter system with fast, slow, and slowest moving averages",
        "Optional strict EMA hierarchy enforcement",
        "Moving average crossover confirmation",
        "Retracement level filters for optimal entry points",
        "Linear regression slope filter for trend direction confirmation",
        "Standard deviation filter for volatility assessment",
      ],
    },
    {
      category: "Entry Management",
      items: [
        "Multiple order types: market, pending, or limit orders",
        "Customizable buffer distances for entry points",
        "Signal expiry system to cancel outdated signals",
        "Automatic invalidation on opposite signals",
        "EMA crossover invalidation option",
        "Trading hour restrictions with customizable windows",
        "Session-based order cancellation",
      ],
    },
    {
      category: "Risk Management",
      items: [
        "Risk-based position sizing (percentage of account)",
        "Fixed lot size option",
        "Multiple stop loss calculation methods: fixed, ATR-based, or candle range",
        "Multiple take profit calculation methods: fixed, ATR-based, or candle range",
        "Customizable risk-reward ratios",
        "Maximum open trades limit",
        "Optional margin check for additional safety",
      ],
    },
    {
      category: "Trade Management",
      items: [
        "Break-even functionality with multiple activation methods",
        "Partial close capability with customizable trigger levels",
        "Five trailing stop methods: fixed, ATR-based, candle-based, R-multiple, and MA-based",
        "Customizable trailing activation levels and distances",
        "Automatic session close for open trades",
        "Pending order cancellation at session end",
        "Multiple trades management with maximum trade limits",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">BananaEA Feature List</h1>
            <p className="text-gray-500 md:text-xl">Comprehensive overview of all features and capabilities</p>
          </div>

          <div className="space-y-8">
            {features.map((category, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>
                    {category.category === "Pattern Recognition" && "Signal generation and filtering capabilities"}
                    {category.category === "Entry Management" && "Order execution and signal handling features"}
                    {category.category === "Risk Management" && "Position sizing and risk control mechanisms"}
                    {category.category === "Trade Management" && "Active trade handling and exit strategies"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-lg bg-yellow-50 p-6 text-center">
            <h3 className="text-lg font-medium text-yellow-800">License Requirement</h3>
            <p className="mt-2 text-yellow-700">
              Please note that BananaEA requires a valid license key to operate. Users will need to obtain a serial key
              through purchase to activate the Expert Advisor.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
