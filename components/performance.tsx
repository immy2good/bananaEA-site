"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function Performance() {
  const performanceData = [
    { month: "Jan", profit: 4.7, drawdown: 1.2 },
    { month: "Feb", profit: 3.8, drawdown: 0.9 },
    { month: "Mar", profit: 5.1, drawdown: 1.5 },
    { month: "Apr", profit: 5.9, drawdown: 0.8 },
    { month: "May", profit: 4.7, drawdown: 1.3 },
    { month: "Jun", profit: 3.5, drawdown: 1.0 },
    { month: "Jul", profit: 5.3, drawdown: 1.4 },
    { month: "Aug", profit: 4.8, drawdown: 1.1 },
    { month: "Sep", profit: 3.9, drawdown: 0.9 },
    { month: "Oct", profit: 5.5, drawdown: 1.6 },
    { month: "Nov", profit: 4.6, drawdown: 1.2 },
    { month: "Dec", profit: 5.2, drawdown: 1.3 },
  ]

  const stats = [
    { label: "Win Rate", value: "72%" },
    { label: "Profit Factor", value: "2.7" },
    { label: "Avg. Trade", value: "+1.2%" },
    { label: "Max Drawdown", value: "7.3%" },
  ]

  return (
    <section id="performance" className="py-16 bg-muted/50">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-700">Performance</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Proven Results</h2>
            <p className="max-w-[90%] sm:max-w-[900px] text-gray-500 text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed px-4">
              BananaEA delivers consistent performance across various market conditions
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Chart Section */}
          <Card className="w-full order-2 lg:order-1">
            <CardHeader className="pb-2 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">Monthly Performance</CardTitle>
              <CardDescription className="text-sm">Profit and drawdown percentage by month</CardDescription>
            </CardHeader>
            <CardContent className="p-2 sm:p-6">
              <div className="w-full overflow-hidden">
                <ChartContainer
                  config={{
                    profit: {
                      label: "Profit %",
                      color: "hsl(47.9 95.8% 53.1%)",
                    },
                    drawdown: {
                      label: "Drawdown %",
                      color: "hsl(0 84.2% 60.2%)",
                    },
                  }}
                  className="h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={performanceData}
                      margin={{
                        top: 5,
                        right: 5,
                        left: 0,
                        bottom: 0,
                      }}
                      barCategoryGap="10%"
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis
                        dataKey="month"
                        fontSize={10}
                        tick={{ fontSize: 8 }}
                        interval={0}
                        angle={-45}
                        textAnchor="end"
                        height={40}
                      />
                      <YAxis fontSize={10} tick={{ fontSize: 8 }} width={30} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend wrapperStyle={{ fontSize: "10px" }} iconSize={8} />
                      <Bar dataKey="profit" fill="var(--color-profit)" name="Profit %" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="drawdown" fill="var(--color-drawdown)" name="Drawdown %" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Stats and Currency Pairs Section */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <Card>
              <CardHeader className="pb-2 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Key Performance Metrics</CardTitle>
                <CardDescription className="text-sm">Based on 2 years of backtesting data</CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col space-y-1 rounded-lg border p-2 sm:p-4 bg-card">
                      <div className="text-xs sm:text-sm font-medium text-muted-foreground">{stat.label}</div>
                      <div className="text-lg sm:text-2xl font-bold text-yellow-500">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Supported Markets</CardTitle>
                <CardDescription className="text-sm">Optimized Indices and Currency Pairs</CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
                  {["EURUSD", "GBPUSD", "USDJPY", "DAX40", "DOW30", "NASDAQ100", "EURGBP", "EURJPY", "GBPJPY"].map(
                    (pair, i) => (
                      <div
                        key={i}
                        className="rounded-md bg-gray-100 dark:bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 text-center text-xs sm:text-sm font-medium dark:text-gray-200"
                      >
                        {pair}
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 px-4">
          * Past performance is not indicative of future results. All trading involves risk.
        </div>
      </div>
    </section>
  )
}
