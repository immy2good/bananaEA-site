import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-c from-white to-gray-50">
      <Header />
      <main className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">BananaEA Documentation</h1>
            <p className="text-gray-500 md:text-xl">Complete guide to installing, configuring, and using BananaEA</p>
          </div>

          <Tabs defaultValue="installation" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
              <TabsTrigger value="parameters">Parameters</TabsTrigger>
              <TabsTrigger value="strategies">Strategies</TabsTrigger>
            </TabsList>
            <TabsContent value="installation" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Guide</CardTitle>
                  <CardDescription>Follow these steps to install BananaEA on your MT4 platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Step 1: Download Files</h3>
                    <p className="text-gray-500">
                      After purchasing BananaEA, you will receive an email with download links for the EA files.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Step 2: Locate MT4 Directory</h3>
                    <p className="text-gray-500">
                      Open your MT4 platform and click on File &gt; Open Data Folder to locate your MT4 directory.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Step 3: Copy Files</h3>
                    <p className="text-gray-500">
                      Copy the BananaEA.ex4 file to the /MQL4/Experts/ folder and the iTradeAIMSLib.ex4 file to the
                      /MQL4/Libraries/ folder.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Step 4: Restart MT4</h3>
                    <p className="text-gray-500">Restart your MT4 platform to ensure the EA is properly loaded.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Step 5: Activate License</h3>
                    <p className="text-gray-500">
                      Enter your license key in the EA parameters when attaching it to a chart. The EA will validate
                      your license automatically.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="configuration" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Configuration</CardTitle>
                  <CardDescription>Essential settings to get started with BananaEA</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">License Setup</h3>
                    <p className="text-gray-500">
                      Enter your license key in the SerialKey parameter. This is required for the EA to function.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Risk Management</h3>
                    <p className="text-gray-500">
                      Set your risk percentage using the InpRiskPercent parameter. The default is 1%, which means each
                      trade will risk 1% of your account balance.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Trading Hours</h3>
                    <p className="text-gray-500">
                      Configure trading hours using UseTimeWindow, StartHour, StartMinute, EndHour, and EndMinute
                      parameters to restrict trading to specific times.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Stop Loss & Take Profit</h3>
                    <p className="text-gray-500">
                      Choose your preferred SL and TP methods using SLMethod and TPMethod parameters. Options include
                      fixed values, ATR-based, or candle range-based calculations.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Configuration</CardTitle>
                  <CardDescription>Fine-tune BananaEA for optimal performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Pattern Filters</h3>
                    <p className="text-gray-500">
                      Adjust EMA filter settings (Filter_EMA_Fast, FastEMA_Value, etc.) to control which signals are
                      valid based on moving average relationships.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Trailing Stop Methods</h3>
                    <p className="text-gray-500">
                      Configure your preferred trailing stop method using TrailingMethod parameter and its associated
                      settings for each method type.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Break-Even Settings</h3>
                    <p className="text-gray-500">
                      Enable and configure break-even functionality using UseSLtoBE and related parameters to protect
                      profits once a trade moves in your favor.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Partial Close Strategy</h3>
                    <p className="text-gray-500">
                      Set up partial profit taking with UseClose50 and related parameters to secure profits while
                      letting winners run.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="parameters" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Parameter Reference</CardTitle>
                  <CardDescription>Complete list of BananaEA parameters and their descriptions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 text-left font-medium">Parameter</th>
                          <th className="py-2 text-left font-medium">Description</th>
                          <th className="py-2 text-left font-medium">Default</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-2 font-medium">SerialKey</td>
                          <td className="py-2 text-gray-500">Your license key for activation</td>
                          <td className="py-2 text-gray-500">""</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">SymbolSuffix</td>
                          <td className="py-2 text-gray-500">Suffix for broker-specific symbol names</td>
                          <td className="py-2 text-gray-500">""</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Magic</td>
                          <td className="py-2 text-gray-500">Magic number to identify EA trades</td>
                          <td className="py-2 text-gray-500">50000</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">InpRiskPercent</td>
                          <td className="py-2 text-gray-500">Risk percentage per trade</td>
                          <td className="py-2 text-gray-500">1</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">SLMethod</td>
                          <td className="py-2 text-gray-500">Stop loss calculation method</td>
                          <td className="py-2 text-gray-500">SL_CandleRange</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">TPMethod</td>
                          <td className="py-2 text-gray-500">Take profit calculation method</td>
                          <td className="py-2 text-gray-500">TP_CandleRange</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">OrderType</td>
                          <td className="py-2 text-gray-500">Type of orders to use</td>
                          <td className="py-2 text-gray-500">UsePendingOrders</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">UseTrailingStop</td>
                          <td className="py-2 text-gray-500">Enable trailing stop functionality</td>
                          <td className="py-2 text-gray-500">true</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">TrailingMethod</td>
                          <td className="py-2 text-gray-500">Method for trailing stop calculation</td>
                          <td className="py-2 text-gray-500">Trail_ATR</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">UseSLtoBE</td>
                          <td className="py-2 text-gray-500">Enable break-even functionality</td>
                          <td className="py-2 text-gray-500">true</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">UseClose50</td>
                          <td className="py-2 text-gray-500">Enable partial close functionality</td>
                          <td className="py-2 text-gray-500">false</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="strategies" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Banana Pattern Types</CardTitle>
                  <CardDescription>Understanding the three Banana pattern types</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Banana Pattern 1</h3>
                    <p className="text-gray-500">
                      The first pattern type identifies a specific price action sequence where the current bar's high is
                      lower than the previous bar's high, and the current bar's low is lower than the previous bar's
                      low. This pattern is confirmed with an impulse move where the previous bars show increasing highs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Banana Pattern 2</h3>
                    <p className="text-gray-500">
                      The second pattern type is an extension of Pattern 1, looking for a deeper pullback over multiple
                      bars while maintaining the overall trend direction. It requires specific high-low relationships
                      across 5 bars.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Banana Pattern 3</h3>
                    <p className="text-gray-500">
                      The third pattern type is the most complex, identifying a specific sequence across 7 bars that
                      indicates a strong trend reversal opportunity. It combines elements of both continuation and
                      reversal patterns.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Trading Strategies</CardTitle>
                  <CardDescription>Optimal setups for different market conditions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Trend Following Strategy</h3>
                    <p className="text-gray-500">
                      Enable all EMA filters and set EMA_SLOWEST_Strict to true. This configuration works best in
                      trending markets and filters out signals that don't align with the overall trend direction.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Volatility Strategy</h3>
                    <p className="text-gray-500">
                      Enable useStdDevFilter and set a higher VolatilityThreshold. Use ATR-based stop loss and take
                      profit methods with higher multipliers to account for increased price movement.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Conservative Strategy</h3>
                    <p className="text-gray-500">
                      Use SL_CandleRange with a higher CandleSLMultiplier, enable UseSLtoBE with a lower activation
                      threshold, and set InpRiskPercent to 0.5% for reduced risk exposure.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Aggressive Strategy</h3>
                    <p className="text-gray-500">
                      Disable some filters, use Trail_RMultiple with higher Trail_DistanceR values, enable UseClose50
                      with a 0.5 closePercent to secure partial profits, and use a higher InpRiskPercent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
