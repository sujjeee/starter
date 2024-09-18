"use client"

import { Shell } from "@/components/ui/shell"
import { GlobeIcon } from "lucide-react"
import { useEffect, useState, useMemo } from "react"

export function Metadata() {
  const [metadata, setMetadata] = useState({
    ip: "Loading...",
    city: "Loading...",
    country: "Loading...",
    browser: "Loading...",
    os: "Loading...",
    device: "Loading...",
  })

  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchMetadata() {
      try {
        const response = await fetch("/api/metadata")

        if (!response.ok) {
          throw new Error("Failed to fetch metadata")
        }

        const data = await response.json()

        setMetadata(data)
      } catch (_error) {
        setError(true)
      }
    }

    fetchMetadata()
  }, [])

  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <div>
      <h2 className="font-semibold text-sm capitalize">{label}</h2>
      <p className="text-gray-400">{value}</p>
    </div>
  )

  const metadataItems = useMemo(() => {
    if (error) {
      return Object.keys(metadata).map((key) => (
        <InfoItem key={key} label={key} value="Error" />
      ))
    }

    return Object.entries(metadata).map(([key, value]) => {
      // Convert non-string values to strings
      const displayValue =
        typeof value === "object" ? JSON.stringify(value) : value
      return <InfoItem key={key} label={key} value={displayValue} />
    })
  }, [metadata, error])

  return (
    <Shell
      header={{
        icon: <GlobeIcon className="size-3.5" />,
        title: "Metadata",
      }}
    >
      <div className="h-fit max-w-[500px] sm:p-8 ">
        <div
          className="flexflex-col mx-auto w-full justify-center space-y-6 "
          style={{ scale: 0.9 }}
        >
          <div className="grid grid-cols-2 gap-4">{metadataItems}</div>
        </div>
      </div>
    </Shell>
  )
}
