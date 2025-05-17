import Image from "next/image"
import { Check } from "lucide-react"

export default function PropertyFeatures() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Property Highlights</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">Premier Features</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the unique amenities that make Grayross Estates a rare investment opportunity
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light">Waterfront Access</h3>
            <p className="text-muted-foreground">
              The property features 993 feet of private Fraser River frontage with existing marina and dock, perfect for
              both recreational and commercial marine activities.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Private dock access",
                "Deep water moorage",
                "Protected inlet location",
                "Waterfront development potential",
                "Existing marine infrastructure",
                "Stunning water views",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/waterfront-aerial.png"
                alt="Waterfront view of the property"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light">Equestrian Development Potential</h3>
            <p className="text-muted-foreground">
              Zoned RA-1 for equestrian and agricultural use, the property offers excellent potential for developing
              premium equestrian facilities including stables, riding areas, and supporting infrastructure.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Premium horse stables",
                "Elegant stable interior design",
                "Quality fixtures and fittings",
                "Spacious stall layouts",
                "Modern ventilation systems",
                "Ambient lighting features",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/images/stable-interior-hd.png"
                alt="Example of potential stable interior design"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 px-4">
                <p className="text-sm text-white/90">
                  Example of potential equestrian facilities that could be developed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="/images/a-frame-structure.png"
              alt="Aerial view of the distinctive A-frame structure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="inline-block bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                <h3 className="font-serif text-3xl font-light">Distinctive A-Frame Structure</h3>
                <p className="mt-2 max-w-2xl text-white/80">
                  This iconic building offers tremendous potential for renovation or repurposing as part of your
                  development vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
