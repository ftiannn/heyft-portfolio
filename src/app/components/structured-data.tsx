'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())

    const dataArray = Array.isArray(data) ? data : [data]
    
    dataArray.forEach((item, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(item)
      script.id = `structured-data-${index}`
      document.head.appendChild(script)
    })
  }, [data])

  return null
} 