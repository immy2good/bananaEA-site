import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is the Banana pattern?",
      answer:
        "The Banana pattern is a specific price action formation that indicates potential market reversals or continuations. BananaEA identifies three distinct types of Banana patterns (Banana 1, 2, and 3) and uses them in conjunction with other technical filters to generate high-probability trading signals.",
    },
    {
      question: "Which timeframes does BananaEA work best with?",
      answer:
        "BananaEA is designed to work on multiple timeframes, from M15 to H4. However, it tends to perform best on H1 and H4 charts where the patterns have more significance and generate fewer false signals.",
    },
    {
      question: "Do I need any special indicators to use BananaEA?",
      answer:
        "No, BananaEA comes with all necessary components built-in. It uses standard MT4 indicators like EMAs and ATR, which are already included in the EA code.",
    },
    {
      question: "How do I obtain a license key?",
      answer:
        "After purchasing BananaEA, you'll receive a license key via email. This key is tied to your MT4 account number and needs to be entered in the EA parameters to activate the software.",
    },
    {
      question: "Can I use BananaEA on multiple accounts?",
      answer:
        "This depends on your license type. The Standard license allows usage on one MT4 account, while Professional and Enterprise licenses support multiple accounts as specified in the pricing section.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a money-back guarantee period that varies by license type (30, 60, or 90 days). If you're not satisfied with BananaEA during this period, you can request a full refund.",
    },
    {
      question: "What kind of support is provided?",
      answer:
        "We provide email support for all license types, with priority support for Professional and Enterprise licenses. Enterprise users also receive faster response times (within 24 hours) and additional consultation services.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 dark:bg-yellow-900 px-3 py-1 text-sm text-yellow-700 dark:text-yellow-300">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about BananaEA
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
