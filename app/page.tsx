"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import ForecastChart from "../components/ForecastChart"
import Header from "../components/Header"
import Loader from "../components/Loader"
import ErrorMetrics from "../components/ErrorMetrics"

export default function Home() {

const [actual, setActual] = useState<number[]>([])
const [forecast, setForecast] = useState<number[]>([])
const [labels, setLabels] = useState<string[]>([])

const [loading, setLoading] = useState(false)

const [start, setStart] = useState("2024-01-01T00:00")
const [end, setEnd] = useState("2024-01-02T00:00")
const [horizon, setHorizon] = useState(4)

const loadData = async () => {

setLoading(true)

try {

const res = await axios.get("/api/data", {
params: { start, end, horizon }
})

setActual(res.data.actual)
setForecast(res.data.forecast)
setLabels(res.data.labels)

} catch (e) {

alert("Failed to load data")

}

setLoading(false)

}

useEffect(() => {
loadData()
}, [])

return (

<div className="bg-gray-100 min-h-screen">

<Header />

<div className="p-6">

{/* INPUT CONTROLS */}

<div className="flex flex-wrap gap-6 mb-6">

<input
type="datetime-local"
value={start}
onChange={(e) => setStart(e.target.value)}
className="border border-gray-400 bg-white text-black p-2 rounded shadow"
/>

<input
type="datetime-local"
value={end}
onChange={(e) => setEnd(e.target.value)}
className="border border-gray-400 bg-white text-black p-2 rounded shadow"
/>

<div>

<div className="text-black font-medium">
Forecast Horizon: {horizon}h
</div>

<input
type="range"
min="0"
max="48"
value={horizon}
onChange={(e) => setHorizon(Number(e.target.value))}
className="w-48"
/>

</div>

<button
onClick={loadData}
className="bg-blue-600 text-white px-6 py-2 rounded"
>
Load Data
</button>

</div>

{/* CHART */}

{loading ? (
<Loader />
) : (
<>
<ForecastChart
actual={actual}
forecast={forecast}
labels={labels}
/>

{/* ERROR METRICS */}

<ErrorMetrics
actual={actual}
forecast={forecast}
/>

{/* EXPLANATION SECTION */}

<div className="mt-8 bg-white p-6 rounded shadow text-gray-700">

<h2 className="text-xl font-semibold mb-3">
Forecast Reliability Explanation
</h2>

<p className="mb-2">
<strong>MAE (Mean Absolute Error):</strong> Represents the
average difference between forecasted wind power and
actual generation. Lower MAE values indicate better
forecast accuracy.
</p>

<p className="mb-2">
<strong>RMSE (Root Mean Squared Error):</strong> Penalizes
large forecasting errors more heavily than MAE. It
highlights periods where the forecast significantly
deviates from actual generation.
</p>

<p>
<strong>P99 Error:</strong> Represents a worst-case
planning scenario. 99% of forecast errors are below
this value. Grid operators use this metric to estimate
how much wind power can be reliably depended on when
planning electricity supply.
</p>

</div>

</>
)}

</div>

</div>

)

}