import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ParameterReference() {
  const generalParams = [
    { name: "SerialKey", description: "License key for EA activation", default: "", type: "string" },
    { name: "SymbolSuffix", description: "Suffix for broker-specific symbol names", default: "", type: "string" },
    { name: "Magic", description: "Magic number to identify EA trades", default: "50000", type: "int" },
    { name: "Slippage", description: "Maximum allowed slippage in points", default: "3", type: "int" },
  ]

  const riskParams = [
    { name: "LotMethod", description: "Method for calculating lot size", default: "Risk", type: "string" },
    {
      name: "FixedLotSize",
      description: "Fixed lot size when LotMethod is set to Fixed",
      default: "0",
      type: "double",
    },
    {
      name: "InpRiskPercent",
      description: "Risk percentage of account balance per trade",
      default: "1",
      type: "double",
    },
  ]

  const slTpParams = [
    { name: "SLMethod", description: "Method for calculating stop loss", default: "SL_CandleRange", type: "enum" },
    {
      name: "InpStopLoss",
      description: "Fixed stop loss in pips (when SLMethod is SL_Fixed)",
      default: "0.0",
      type: "double",
    },
    { name: "SL_ATR_Multiplier", description: "Multiplier for ATR-based stop loss", default: "0.0", type: "double" },
    {
      name: "CandleSLMultiplier",
      description: "Multiplier for candle range-based stop loss",
      default: "1.0",
      type: "double",
    },
    { name: "TPMethod", description: "Method for calculating take profit", default: "TP_CandleRange", type: "enum" },
    {
      name: "TakeProfitLevel",
      description: "Fixed take profit in pips (when TPMethod is TP_Fixed)",
      default: "0.0",
      type: "double",
    },
    { name: "TP_ATR_Multiplier", description: "Multiplier for ATR-based take profit", default: "0.0", type: "double" },
    {
      name: "CandleTPMultiplier",
      description: "Multiplier for candle range-based take profit",
      default: "20.0",
      type: "double",
    },
  ]

  const entryParams = [
    { name: "OrderType", description: "Type of orders to place", default: "UsePendingOrders", type: "enum" },
    {
      name: "BuyBuffer",
      description: "Buffer distance above signal high for buy orders (pips)",
      default: "2",
      type: "double",
    },
    {
      name: "SellBuffer",
      description: "Buffer distance below signal low for sell orders (pips)",
      default: "1",
      type: "double",
    },
    {
      name: "BuSLBuffer",
      description: "Buffer distance below signal low for buy stop loss (pips)",
      default: "1",
      type: "double",
    },
    {
      name: "BeSLBuffer",
      description: "Buffer distance above signal high for sell stop loss (pips)",
      default: "2",
      type: "double",
    },
    {
      name: "LimitOrderBuffer",
      description: "Distance from current price for limit orders (pips)",
      default: "20",
      type: "double",
    },
    { name: "CancelAfterBars", description: "Cancel pending orders after this many bars", default: "5", type: "int" },
    {
      name: "UseSessionCancelOnly",
      description: "Only cancel orders at session close",
      default: "false",
      type: "bool",
    },
    {
      name: "InvalidateSignalOnOppositeSetup",
      description: "Cancel orders when opposite signal appears",
      default: "true",
      type: "bool",
    },
    {
      name: "CancelInvalidSignalMethod",
      description: "Method for canceling invalid signals",
      default: "EMA_Crossover",
      type: "enum",
    },
  ]

  const timeParams = [
    { name: "UseTimeWindow", description: "Enable trading time restrictions", default: "true", type: "bool" },
    { name: "StartHour", description: "Trading start hour", default: "10", type: "int" },
    { name: "StartMinute", description: "Trading start minute", default: "0", type: "int" },
    { name: "EndHour", description: "Trading end hour", default: "18", type: "int" },
    { name: "EndMinute", description: "Trading end minute", default: "0", type: "int" },
  ]

  const tradeManagementParams = [
    {
      name: "AllowMultipleTrades",
      description: "Allow multiple trades in same direction",
      default: "false",
      type: "bool",
    },
    { name: "MaxOpenTrades", description: "Maximum number of open trades", default: "2", type: "int" },
    {
      name: "UseMarginCheck",
      description: "Check available margin before opening trades",
      default: "false",
      type: "bool",
    },
  ]

  const breakEvenParams = [
    { name: "UseSLtoBE", description: "Enable break-even functionality", default: "true", type: "bool" },
    { name: "BreakEvenMethod", description: "Method for break-even calculation", default: "BE_ATR", type: "enum" },
    {
      name: "SL_to_BE_Fixed",
      description: "Fixed distance for break-even trigger (pips)",
      default: "0",
      type: "double",
    },
    {
      name: "SL_to_BE_CandleMultiplier",
      description: "Candle range multiplier for break-even",
      default: "0",
      type: "double",
    },
    {
      name: "SL_to_BE_ATR_Multiplier",
      description: "ATR multiplier for break-even trigger",
      default: "3.0",
      type: "double",
    },
  ]

  const partialCloseParams = [
    {
      name: "PartialCloseMethod",
      description: "Method for partial close calculation",
      default: "PC_ATR",
      type: "enum",
    },
    { name: "UseClose50", description: "Enable partial close functionality", default: "false", type: "bool" },
    { name: "closePercent", description: "Percentage of position to close", default: "0.5", type: "double" },
    {
      name: "PC_Fixed_Level",
      description: "Fixed level for partial close trigger (pips)",
      default: "0",
      type: "double",
    },
    {
      name: "PC_CandleMultiplier",
      description: "Candle range multiplier for partial close",
      default: "0",
      type: "double",
    },
    {
      name: "PC_ATR_Multiplier",
      description: "ATR multiplier for partial close trigger",
      default: "3.0",
      type: "double",
    },
  ]

  const trailingParams = [
    { name: "UseTrailingStop", description: "Enable trailing stop functionality", default: "true", type: "bool" },
    { name: "TrailingMethod", description: "Method for trailing stop calculation", default: "Trail_ATR", type: "enum" },
    {
      name: "trailingActivationLevel",
      description: "Activation level for fixed trailing (pips)",
      default: "0",
      type: "double",
    },
    { name: "trailingDistance", description: "Distance for fixed trailing (pips)", default: "0", type: "double" },
    {
      name: "atrTrailingActivationLevel",
      description: "ATR multiplier for trailing activation",
      default: "3.0",
      type: "double",
    },
    {
      name: "atrTrailingDistance",
      description: "ATR multiplier for trailing distance",
      default: "3.0",
      type: "double",
    },
    { name: "CTrail_Trigger", description: "Candle trail activation (R multiples)", default: "3.0", type: "double" },
    { name: "CTrail_Step", description: "Candle trail distance (R multiples)", default: "3.0", type: "double" },
    { name: "Trail_ActivationR", description: "R-multiple activation for trailing", default: "2.0", type: "double" },
    { name: "Trail_DistanceR", description: "R-multiple distance for trailing", default: "3.0", type: "double" },
    {
      name: "Trail_MA_Activation",
      description: "MA trailing activation (R multiples)",
      default: "0.0",
      type: "double",
    },
    { name: "Trail_MA_Period", description: "Period for moving average trailing", default: "20", type: "double" },
  ]

  const sessionParams = [
    { name: "PendingCancelHour", description: "Hour to cancel pending orders", default: "20", type: "int" },
    {
      name: "CloseTradesAtSessionClose",
      description: "Close all trades at session end",
      default: "false",
      type: "bool",
    },
    { name: "TradeCloseHour", description: "Hour to close all trades", default: "22", type: "int" },
  ]

  const indicatorParams = [{ name: "ATRPeriod", description: "Period for ATR calculation", default: "15", type: "int" }]

  const bananaParams = [
    { name: "Filter_EMA_Fast", description: "Enable fast EMA filter", default: "true", type: "bool" },
    { name: "FastEMA_Value", description: "Period for fast EMA", default: "9", type: "int" },
    { name: "Filter_EMA_Slow", description: "Enable slow EMA filter", default: "true", type: "bool" },
    { name: "SlowEMA_Value", description: "Period for slow EMA", default: "21", type: "int" },
    { name: "Filter_EMA_SLOWEST", description: "Enable slowest EMA filter", default: "true", type: "bool" },
    { name: "EMA_SLOWEST_Input", description: "Period for slowest EMA", default: "55", type: "int" },
    { name: "EMA_SLOWEST_Strict", description: "Require strict EMA hierarchy", default: "false", type: "bool" },
    { name: "Filter_MA_Crossover", description: "Require fast/slow EMA crossover", default: "true", type: "bool" },
    { name: "Check_Max_Retrace", description: "Enable maximum retracement filter", default: "false", type: "bool" },
    { name: "Check_Min_Retrace", description: "Enable minimum retracement filter", default: "false", type: "bool" },
    { name: "Lookback", description: "Lookback period for retracement calculation", default: "5", type: "int" },
  ]

  const regressionParams = [
    {
      name: "UseLinearRegressionSlope",
      description: "Enable linear regression slope filter",
      default: "FALSE",
      type: "bool",
    },
    { name: "RegressionPeriod", description: "Period for regression calculation", default: "20", type: "int" },
    {
      name: "TrendSlopeThreshold",
      description: "Threshold for trend slope validation",
      default: "0.0001",
      type: "double",
    },
    { name: "useStdDevFilter", description: "Enable standard deviation filter", default: "false", type: "bool" },
    { name: "StdDevPeriod", description: "Period for standard deviation calculation", default: "20", type: "int" },
    {
      name: "VolatilityThreshold",
      description: "Threshold for volatility validation",
      default: "0.0005",
      type: "double",
    },
  ]

  const ParameterTable = ({ params, title }: { params: any[]; title: string }) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Parameters for {title.toLowerCase()} configuration</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left font-medium">Parameter</th>
                <th className="py-2 text-left font-medium">Type</th>
                <th className="py-2 text-left font-medium">Default</th>
                <th className="py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {params.map((param, i) => (
                <tr key={i}>
                  <td className="py-2 font-mono text-sm">{param.name}</td>
                  <td className="py-2 text-sm text-gray-500">{param.type}</td>
                  <td className="py-2 font-mono text-sm">{param.default}</td>
                  <td className="py-2 text-sm text-gray-600">{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Parameter Reference</h1>
            <p className="text-gray-500 md:text-xl">Complete reference for all BananaEA parameters</p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="risk">Risk</TabsTrigger>
              <TabsTrigger value="sltp">SL/TP</TabsTrigger>
              <TabsTrigger value="entry">Entry</TabsTrigger>
              <TabsTrigger value="time">Time</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="trailing">Trailing</TabsTrigger>
              <TabsTrigger value="banana">Banana</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6 space-y-6">
              <ParameterTable params={generalParams} title="General Settings" />
            </TabsContent>

            <TabsContent value="risk" className="mt-6 space-y-6">
              <ParameterTable params={riskParams} title="Risk & Lot Settings" />
            </TabsContent>

            <TabsContent value="sltp" className="mt-6 space-y-6">
              <ParameterTable params={slTpParams} title="Stop Loss & Take Profit" />
            </TabsContent>

            <TabsContent value="entry" className="mt-6 space-y-6">
              <ParameterTable params={entryParams} title="Entry Setup" />
              <ParameterTable params={timeParams} title="Time Restrictions" />
            </TabsContent>

            <TabsContent value="time" className="mt-6 space-y-6">
              <ParameterTable params={sessionParams} title="Session Management" />
            </TabsContent>

            <TabsContent value="management" className="mt-6 space-y-6">
              <ParameterTable params={tradeManagementParams} title="Trade Management" />
              <ParameterTable params={breakEvenParams} title="Break Even Settings" />
              <ParameterTable params={partialCloseParams} title="Partial Close Settings" />
            </TabsContent>

            <TabsContent value="trailing" className="mt-6 space-y-6">
              <ParameterTable params={trailingParams} title="Trailing Stop Settings" />
            </TabsContent>

            <TabsContent value="banana" className="mt-6 space-y-6">
              <ParameterTable params={bananaParams} title="Banana Pattern Settings" />
              <ParameterTable params={indicatorParams} title="Indicator Settings" />
              <ParameterTable params={regressionParams} title="Linear Regression & Volatility" />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
