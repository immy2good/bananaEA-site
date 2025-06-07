import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                BananaEA: Advanced Pattern Recognition Trading System
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Harness the power of Banana pattern recognition with our sophisticated MT4 Expert Advisor. Designed for
                serious traders who demand precision, flexibility, and consistent results.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Get Started
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/documentation">View Documentation</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="BananaEA Trading Chart"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg shadow-lg p-4 w-48">
                <div className="text-sm font-medium">Performance</div>
                <div className="text-2xl font-bold text-yellow-500">+215%</div>
                <div className="text-xs text-muted-foreground">Annual return*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
