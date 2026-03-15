export default function ErrorMetrics({ actual, forecast }: any) {

const errors = actual
  .map((a: number, i: number) => {
    const f = forecast[i]
    if (f === null || f === undefined) return null
    return Math.abs(a - f)
  })
  .filter((v: any) => v !== null)

let mae = 0
let rmse = 0
let p99 = 0

if (errors.length > 0) {

  mae = errors.reduce((a: number, b: number) => a + b, 0) / errors.length

  rmse = Math.sqrt(
    errors.map((e: number) => e * e).reduce((a: number, b: number) => a + b, 0) /
      errors.length
  )

  const sorted = [...errors].sort((a: number, b: number) => a - b)
  p99 = sorted[Math.floor(sorted.length * 0.99)]
}

return (

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

<div className="bg-white shadow rounded p-4 text-center">
<div className="text-gray-500 text-sm">MAE</div>
<div className="text-2xl font-bold text-black">
{errors.length ? mae.toFixed(2) : "--"} MW
</div>
</div>

<div className="bg-white shadow rounded p-4 text-center">
<div className="text-gray-500 text-sm">RMSE</div>
<div className="text-2xl font-bold text-black">
{errors.length ? rmse.toFixed(2) : "--"} MW
</div>
</div>

<div className="bg-white shadow rounded p-4 text-center">
<div className="text-gray-500 text-sm">P99 Error</div>
<div className="text-2xl font-bold text-black">
{errors.length ? p99.toFixed(2) : "--"} MW
</div>
</div>

</div>

)
}