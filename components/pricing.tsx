import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  const plans = [
    {
      name: "Standard License",
      price: "$297",
      description: "Perfect for individual traders",
      features: [
        "Single MT4 Account",
        "All Banana Pattern Types",
        "Basic Trade Management",
        "Email Support",
        "1 Year of Updates",
        "30-Day Money-Back Guarantee",
      ],
      cta: "Buy Now",
    },
    {
      name: "Professional License",
      price: "$497",
      description: "For serious traders",
      features: [
        "Up to 3 MT4 Accounts",
        "All Banana Pattern Types",
        "Advanced Trade Management",
        "Priority Email Support",
        "Lifetime Updates",
        "60-Day Money-Back Guarantee",
        "1-Hour Strategy Consultation",
      ],
      cta: "Buy Now",
      popular: true,
    },
    {
      name: "Enterprise License",
      price: "$997",
      description: "For trading firms and professionals",
      features: [
        "Up to 10 MT4 Accounts",
        "All Banana Pattern Types",
        "Advanced Trade Management",
        "Priority Support with 24h Response",
        "Lifetime Updates",
        "90-Day Money-Back Guarantee",
        "3-Hour Strategy Consultation",
        "Custom Parameter Optimization",
      ],
      cta: "Contact Us",
    },
  ]

  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-700">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select the right license for your trading needs
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Card key={i} className={`flex flex-col ${plan.popular ? "border-yellow-500 shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4 text-4xl font-bold">{plan.price}</div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? "bg-yellow-500 hover:bg-yellow-600" : ""}`}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          All plans require a license key to activate the EA. Licenses are tied to your MT4 account.
        </div>
      </div>
    </section>
  )
}
