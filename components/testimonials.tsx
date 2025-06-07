import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "BananaEA has completely transformed my trading. The pattern recognition is incredibly accurate, and the trade management features have helped me maximize profits while minimizing risk.",
      author: "Michael T.",
      role: "Professional Trader",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "After trying dozens of EAs over the years, BananaEA stands out for its consistency and adaptability. The multiple trailing stop methods alone are worth the investment.",
      author: "Sarah K.",
      role: "Retail Trader",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The level of customization in BananaEA is impressive. I've been able to fine-tune it to match my risk tolerance perfectly, and the results speak for themselves.",
      author: "David L.",
      role: "Fund Manager",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-700">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from traders who have experienced success with BananaEA
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="text-sm text-gray-500 italic">"{testimonial.quote}"</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
