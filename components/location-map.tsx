"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LocationMap() {
  const [neighborhoodIndex, setNeighborhoodIndex] = useState(0)
  const neighborhoodImages = [
    {
      src: "/images/waterfront-neighborhood.png",
      alt: "Expansive views of the water and beyond",
    },
    {
      src: "/images/luxury-stable-interior.png",
      alt: "Luxury stable interior design example",
    },
    {
      src: "/images/farm-chickens.png",
      alt: "Farm animals on the property - chickens",
    },
    {
      src: "/images/garden-greenhouse.png",
      alt: "Garden area with greenhouse",
    },
    {
      src: "/images/horse-riding-road.png",
      alt: "Horse riding on nearby roads",
    },
  ]

  const [vancouverIndex, setVancouverIndex] = useState(0)
  const vancouverImages = [
    {
      src: "/images/vancouver-skyline.png",
      alt: "Minutes from Downtown",
    },
    {
      src: "/images/farm-goats.png",
      alt: "Farm animals - goats",
    },
    {
      src: "/images/polo-field.png",
      alt: "Polo field nearby",
    },
    {
      src: "/images/winter-horse-riding.png",
      alt: "Winter horse riding with children",
    },
  ]

  const nextNeighborhoodImage = () => {
    setNeighborhoodIndex((prevIndex) => (prevIndex === neighborhoodImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevNeighborhoodImage = () => {
    setNeighborhoodIndex((prevIndex) => (prevIndex === 0 ? neighborhoodImages.length - 1 : prevIndex - 1))
  }

  const nextVancouverImage = () => {
    setVancouverIndex((prevIndex) => (prevIndex === vancouverImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevVancouverImage = () => {
    setVancouverIndex((prevIndex) => (prevIndex === 0 ? vancouverImages.length - 1 : prevIndex - 1))
  }

  return (
    <div className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Location</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">Prime Vancouver Location</h2>
          <p className="mt-6 text-xl font-light text-muted-foreground">
            Situated in Vancouver's prestigious Southlands neighborhood, just 15 minutes from downtown and minutes from
            UBC, golf courses, and the Pacific Spirit Regional Park.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/location-map-updated.png"
                alt="Map showing Grayross Estates location in Vancouver"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <p className="text-muted-foreground">
                7520 Balaclava Street, Vancouver BC - Located in the exclusive Southlands neighborhood with easy access
                to downtown Vancouver, UBC, and major transportation routes.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/property-satellite.png"
                alt="Satellite view of Grayross Estates"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <p className="text-muted-foreground">
                Situated directly on the Fraser River with over 990 feet of private waterfront, the property offers
                unparalleled water access and views while maintaining complete privacy.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <div className="relative h-full w-full">
              <Image
                src={neighborhoodImages[neighborhoodIndex].src || "/placeholder.svg"}
                alt={neighborhoodImages[neighborhoodIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={prevNeighborhoodImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={nextNeighborhoodImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-light">Prestigious Neighborhood</h3>
                <p className="mt-2 text-white/80">Expansive views of the water and beyond</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg">
            <div className="relative h-full w-full">
              <Image
                src={vancouverImages[vancouverIndex].src || "/placeholder.svg"}
                alt={vancouverImages[vancouverIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={prevVancouverImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary/70 text-white backdrop-blur-sm transition-all hover:bg-primary"
                  onClick={nextVancouverImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-light">Minutes from Downtown</h3>
                <p className="mt-2 text-white/80">
                  Just 15 minutes from downtown Vancouver's world-class amenities and attractions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="font-serif text-3xl font-light">Nearby Amenities</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Enjoy world-class amenities just minutes from your private sanctuary
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="font-serif text-xl font-light text-primary">Recreation</h4>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                <li>Shaughnessy & Point Grey Golf Clubs</li>
                <li>Pacific Spirit Regional Park</li>
                <li>Southlands Riding & Polo Club</li>
                <li>Fraser River walking trails</li>
                <li>Nearby beaches and marinas</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="font-serif text-xl font-light text-primary">Education</h4>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                <li>University of British Columbia</li>
                <li>Crofton House School</li>
                <li>St. George's School</li>
                <li>West Point Grey Academy</li>
                <li>Vancouver School of Arts and Academics</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="font-serif text-xl font-light text-primary">Shopping & Dining</h4>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                <li>Kerrisdale shopping district</li>
                <li>Dunbar boutiques and cafés</li>
                <li>Granville Island Public Market</li>
                <li>South Granville shops</li>
                <li>West 4th Avenue restaurants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
