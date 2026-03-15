"use client"

import {
Chart as ChartJS,
LineElement,
PointElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from "chart.js"

import { Line } from "react-chartjs-2"
import { useEffect } from "react"

ChartJS.register(
LineElement,
PointElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
)

export default function ForecastChart({ actual, forecast, labels }: any){

useEffect(() => {

async function loadZoom(){
const zoomPlugin = await import("chartjs-plugin-zoom")
ChartJS.register(zoomPlugin.default)
}

loadZoom()

}, [])

const data = {
labels,
datasets: [
{
label: "Actual Wind Generation (MW)",
data: actual,
borderColor: "#2563eb",
backgroundColor: "#2563eb",
tension: 0.3
},
{
label: "Forecast Generation (MW)",
data: forecast,
borderColor: "#16a34a",
backgroundColor: "#16a34a",
tension: 0.3
}
]
}

const options:any = {
responsive: true,
plugins: {
zoom: {
pan: {
enabled: true,
mode: "x"
},
zoom: {
wheel: {
enabled: true
},
pinch: {
enabled: true
},
mode: "x"
}
}
}
}

return <Line data={data} options={options} />

}