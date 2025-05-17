"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// Update the images array with the actual property images
const images = [
  {
    src: "./images/waterfront-neighborhood.png",
    alt: "Expansive water views & nearby estates",
  },
  {
    src: "./images/waterfront-aerial.png",
    alt: "Aerial view of the waterfront property showing the Fraser River",
  },
  {
    src: "./images/a-frame-structure.png",
    alt: "Distinctive A-frame structure on the property",
  },
  {
    src: "./images/stable-interior-hd.png",
    alt: "Interior view of the elegant horse stables with string lighting",
  },
  {
    src: "./images/farm-chickens.png",
    alt: "Farm animals on the property - chickens",
  },
  {
    src: "./images/farm-goats.png",
    alt: "Farm animals on the property - goats",
  },
  // Removed the 7th image (front-page-cropped.png)
  // New images
  {
    src: "./images/vancouver-aerial-view.jpeg",
    alt: "Aerial view of Vancouver showing the city skyline and surrounding neighborhoods",
  },
  {
    src: "./images/fraser-river-celtic-ave.jpeg",
    alt: "Satellite view of the Fraser River area showing Celtic Avenue and surrounding properties",
  },
  {
    src: "./images/grayross-property-aerial.jpeg",
    alt: "Aerial view of the Grayross Estates property and its waterfront location",
  },
  {
    src: "./images/equestrian-riders.jpeg",
    alt: "Equestrian riders at a nearby riding facility showcasing the area's equestrian lifestyle",
  },
  {
    src: "./images/southlands-aerial-view.jpeg",
    alt: "Aerial view of the Southlands area showing the Fraser River and golf courses",
  },
  {
    src: "./images/fraser-river-shoreline.jpeg",
    alt: "Waterfront view showing homes along the Fraser River with walking path",
  },
  {
    src: "./images/waterfront-dock-aerial.jpeg",
    alt: "Aerial view of waterfront properties and dock facilities on the Fraser River",
  },
  {
    src: "./images/property-structures-aerial.jpeg",
    alt: "Aerial view of the property structures with mountain backdrop",
  },
]

export default function PropertyGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square overflow-hidden rounded-md ${
              index === currentIndex ? "ring-2 ring-primary ring-offset-2" : "border border-primary/20"
            }`}
            onClick={() => goToImage(index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
