"use client"

import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AerialViews() {
  const [expansiveGroundsIndex, setExpansiveGroundsIndex] = useState(0)
  const expansiveGroundsImages = [
    {
      src: "./images/property-satellite.png",
      alt: "Satellite view of the property grounds",
    },
    {
      src: "./images/property-aerial-overview.png",
      alt: "Aerial overview of the property and Fraser River",
    },
    {
      src: "./images/property-map.png",
      alt: "Property map showing boundaries",
    },
  ]

  const [waterfrontIndex, setWaterfrontIndex] = useState(0)
  const waterfrontImages = [
    {
      src: "./images/property-aerial-view.png",
      alt: "Aerial view showing the property and waterfront",
    },
    {
      src: "./images/waterfront-dock.png",
      alt: "Waterfront with dock access",
    },
    {
      src: "./images/front-page-cropped.png",
      alt: "Aerial view of the property showing waterfront access and buildings",
    },
    {
      src: "./images/aerial-waterfront-view.png",
      alt: "Expansive aerial view of the waterfront area",
    },
  ]

  const nextExpansiveGroundsImage = () => {
    setExpansiveGroundsIndex((prevIndex) => (prevIndex === expansiveGroundsImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevExpansiveGroundsImage = () => {
    setExpansiveGroundsIndex((prevIndex) => (prevIndex === 0 ? expansiveGroundsImages.length - 1 : prevIndex - 1))
  }

  const nextWaterfrontImage = () => {
    setWaterfrontIndex((prevIndex) => (prevIndex === waterfrontImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevWaterfrontImage = () => {
    setWaterfrontIndex((prevIndex) => (prevIndex === 0 ? waterfrontImages.length - 1 : prevIndex - 1))
  }

  return (
    <div className="bg-muted py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Property Overview</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">Aerial Perspectives</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Experience the full scope and potential of this remarkable 7.99-acre property
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <div className="relative h-full w-full bg-gray-200">
              {/* Use standard img tag for better static export compatibility */}
              <img
                src={expansiveGroundsImages[expansiveGroundsIndex].src || "/placeholder.svg"}
                alt={expansiveGroundsImages[expansiveGroundsIndex].alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={prevExpansiveGroundsImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={nextExpansiveGroundsImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-light">Expansive Grounds</h3>
                <p className="mt-2 text-white/80">
                  7.99 acres of prime real estate with existing structures and infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <div className="relative h-full w-full bg-gray-200">
              {/* Use standard img tag for better static export compatibility */}
              <img
                src={waterfrontImages[waterfrontIndex].src || "/placeholder.svg"}
                alt={waterfrontImages[waterfrontIndex].alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={prevWaterfrontImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={nextWaterfrontImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-light">Waterfront Access</h3>
                <p className="mt-2 text-white/80">There is an existing dock with 4 slips.</p>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2">
            {/* Use standard img tag for better static export compatibility */}
            <img
              src="./images/aerial-waterfront-view.png"
              alt="Aerial view of the property with water views"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                <h3 className="font-serif text-3xl font-light">Stunning Location</h3>
                <p className="mt-2 max-w-2xl text-white/80">
                  Located in Vancouver's prestigious Southlands neighborhood, just 15 minutes from downtown with
                  breathtaking water views
                </p>
                <Button className="mt-4 bg-primary text-white border border-white/30 hover:bg-primary/80 font-medium">
                  Request Detailed Survey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
