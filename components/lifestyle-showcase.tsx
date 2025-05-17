import Image from "next/image"

export default function LifestyleShowcase() {
  return (
    <div className="py-20 bg-accent">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Lifestyle Potential</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">The Southlands Lifestyle</h2>
          <p className="mt-6 text-xl font-light text-muted-foreground">
            Grayross Estates offers a unique opportunity to create your ideal lifestyle, combining rural charm with
            urban convenience
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light">Equestrian Paradise</h3>
            <p className="text-muted-foreground">
              The RA-1 zoning allows for equestrian facilities, with nearby riding trails and the prestigious Southlands
              Riding Club just minutes away. Enjoy horseback riding along the Fraser River or participate in polo
              matches and equestrian events.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/waterfront-riding.png"
                  alt="Horseback riding along the waterfront"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/polo-players.png"
                  alt="Polo players at nearby Southlands Riding Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2">
                <Image
                  src="/images/luxury-stable-interior.png"
                  alt="Example of luxury stable interior design"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 px-4">
                  <p className="text-sm text-white/90">Example of potential equestrian facilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light">Agricultural Opportunities</h3>
            <p className="text-muted-foreground">
              Embrace sustainable living with gardens, greenhouses, and small-scale farming. The property's zoning
              allows for agricultural use, perfect for those interested in farm-to-table living, hobby farming, or
              educational agricultural programs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/garden-greenhouse.png"
                  alt="Garden area with greenhouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src="/images/farm-goats.png" alt="Farm animals - goats" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2">
                <Image src="/images/farm-chickens.png" alt="Farm animals - chickens" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="/images/property-aerial-view.png"
              alt="Aerial view of the property showing waterfront access"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                <h3 className="font-serif text-3xl font-light">Waterfront Living</h3>
                <p className="mt-2 max-w-2xl text-white/80">
                  With 993 feet of private Fraser River frontage, enjoy boating, fishing, and stunning water views while
                  maintaining complete privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
