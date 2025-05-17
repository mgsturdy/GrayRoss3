import { Check, Ruler, Anchor, Home } from "lucide-react"

export default function PropertyDetails() {
  return (
    <div className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Property Details</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">
            Welcome to the Ultimate Legacy Property
          </h2>
          <p className="mt-6 text-xl font-light text-muted-foreground">
            Nestled in Vancouver's prestigious Southlands neighborhood, Grayross Estates offers a rare 7.99-acre
            freehold waterfront estate with over 990 feet of private Fraser River frontage. It's the perfect blend of
            luxury, nature, and history—minutes from downtown, yet a world away.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg border border-primary/10 bg-white p-10 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Ruler className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-light">7.99 Acres</h3>
            <p className="mt-3 text-muted-foreground">
              Expansive freehold land offering unlimited potential for luxury development
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg border border-primary/10 bg-white p-10 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Anchor className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-light">Over 990 Ft Waterfront</h3>
            <p className="mt-3 text-muted-foreground">Private Fraser River frontage with existing marina and dock</p>
          </div>
          <div className="flex flex-col items-center rounded-lg border border-primary/10 bg-white p-10 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-light">RA-1 Zoning</h3>
            <p className="mt-3 text-muted-foreground">
              Zoned for equestrian and agricultural use with development potential
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light">Live the Southlands Lifestyle</h3>
            <p className="text-muted-foreground">
              A sanctuary for equestrian enthusiasts and nature lovers alike, offering the perfect balance of rural
              charm and urban convenience.
            </p>
            <div className="grid gap-3">
              {[
                "Private stables, riding trails, and nearby clubs",
                "Rural charm within 15 minutes of Downtown Vancouver",
                "Easy access to golf courses, parks, and the UBC campus",
                "Ideal for multi-generational living",
                "Rare opportunity for estate development",
                "Prestigious Southlands neighborhood",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light">Exceptional Nearby Amenities</h3>
            <p className="text-muted-foreground">
              Enjoy the convenience of world-class amenities just minutes from your private sanctuary.
            </p>
            <div className="grid gap-3">
              {[
                "Shaughnessy & Point Grey Golf Clubs",
                "Southlands Riding & Polo Club",
                "UBC, Crofton House, and St. George's School",
                "Kerrisdale shopping and boutique cafés",
                "Pacific Spirit Regional Park",
                "Dunbar and Kerrisdale neighborhoods",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
