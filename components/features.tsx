import { BarChart3, Clock, Cog, LineChart, Lock, Percent, Shield, Sliders, TrendingUp } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Pattern Recognition",
      description: "Identifies three distinct Banana patterns for precise entry and exit points",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Multiple Confirmation Filters",
      description: "EMA filters, linear regression slope, and volatility filters for high-probability trades",
    },
    {
      icon: <Sliders className="h-6 w-6" />,
      title: "Flexible Risk Management",
      description: "Risk-based position sizing with customizable risk percentage per trade",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Advanced Trailing Stop Methods",
      description: "Five trailing stop methods including ATR, candle-based, R-multiple, and MA-based",
    },
    {
      icon: <Percent className="h-6 w-6" />,
      title: "Partial Close Strategies",
      description: "Automatically secure profits with customizable partial close triggers",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time-Based Trading Controls",
      description: "Set specific trading hours and automatic session close functionality",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Break-Even Protection",
      description: "Multiple methods to move stop loss to break-even when in profit",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Highly Customizable",
      description: "Over 50 parameters to fine-tune the EA to your trading style and preferences",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Licensing System",
      description: "Protected with advanced licensing technology for your investment security",
    },
  ]

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 dark:bg-yellow-900 px-3 py-1 text-sm text-yellow-700 dark:text-yellow-300">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Trading Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BananaEA combines sophisticated pattern recognition with advanced trade management to give you an edge in
              the markets
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="rounded-full bg-yellow-100 dark:bg-yellow-900 p-3 text-yellow-600 dark:text-yellow-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
