import type { NextApiRequest, NextApiResponse } from "next"
import dayjs from "dayjs"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { start, end, horizon } = req.query

  const startTime = dayjs(start as string)
  const endTime = dayjs(end as string)
  const horizonHours = Number(horizon)

  let labels: string[] = []
  let actual: number[] = []
  let forecast: number[] = []

  let current = startTime

  while (current.isBefore(endTime)) {

    const baseWind =
      4000 +
      Math.sin(current.hour() / 24 * Math.PI * 2) * 1500 +
      Math.random() * 500

    const forecastError =
      horizonHours * 40 + Math.random() * 100

    labels.push(current.format("DD MMM HH:mm"))

    actual.push(Math.round(baseWind))

    forecast.push(
      Math.round(baseWind + (Math.random() - 0.5) * forecastError)
    )

    current = current.add(30, "minute")

  }

  res.status(200).json({
    labels,
    actual,
    forecast
  })

}