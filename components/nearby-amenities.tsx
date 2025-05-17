import Image from "next/image"
import { Check } from "lucide-react"

export default function NearbyAmenities() {
  return (
    <div className="py-20 bg-accent">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Lifestyle</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">Exceptional Nearby Amenities</h2>
          <p className="mt-6 text-xl font-light text-muted-foreground">
            Enjoy the convenience of world-class amenities just minutes from your private sanctuary
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/images/equestrian-facility.png" alt="Equestrian facility" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="font-serif text-2xl font-light">Equestrian Lifestyle</h3>
              <p className="mt-2 text-white/80">
                Southlands Riding & Polo Club and numerous riding trails are just minutes away
              </p>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/images/ubc-view.png" alt="UBC campus with ocean view" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="font-serif text-2xl font-light">Education & Culture</h3>
              <p className="mt-2 text-white/80">
                University of British Columbia, Crofton House, and St. George's School are nearby
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl font-light text-primary">Recreation</h3>
            <div className="mt-4 space-y-3">
              {[
                "Shaughnessy & Point Grey Golf Clubs",
                "Pacific Spirit Regional Park",
                "Southlands Riding & Polo Club",
                "Fraser River walking trails",
                "Nearby beaches and marinas",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl font-light text-primary">Education</h3>
            <div className="mt-4 space-y-3">
              {[
                "University of British Columbia",
                "Crofton House School",
                "St. George's School",
                "West Point Grey Academy",
                "Vancouver School of Arts and Academics",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl font-light text-primary">Shopping & Dining</h3>
            <div className="mt-4 space-y-3">
              {[
                "Kerrisdale shopping district",
                "Dunbar boutiques and cafés",
                "Granville Island Public Market",
                "South Granville shops",
                "West 4th Avenue restaurants",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image src="/images/greenhouse.png" alt="Greenhouse and gardens" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="font-serif text-3xl font-light">Agricultural Potential</h3>
              <p className="mt-2 max-w-2xl text-white/80">
                The RA-1 zoning allows for agricultural use, perfect for creating gardens, greenhouses, or small-scale
                farming operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
