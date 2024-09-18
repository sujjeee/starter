import { type NextRequest, NextResponse, userAgent } from "next/server"
import { geolocation, ipAddress } from "@vercel/functions"

export async function GET(request: NextRequest) {
  const ip = ipAddress(request)
  const { city, country } = geolocation(request)
  const { device, browser, os } = userAgent(request)

  const visitorInfo = {
    ip: ip || "Unknown",
    city: city || "Unknown ",
    country: country || "Unknown",
    browser: browser.name || "Unknown",
    os: os.name || "Unknown",
    device: device.type || "Unknown",
  }

  return NextResponse.json(visitorInfo)
}
