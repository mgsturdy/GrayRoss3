import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe } from "lucide-react"

export default function CallToAction() {
  return (
    <div className="py-20 bg-primary text-white">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl font-light tracking-tight">Build Your Dream Estate</h2>
          <p className="mt-6 text-xl font-light text-white/80">
            Whether you're seeking a multi-generational retreat, an equestrian haven, or a visionary redevelopment, this
            is your opportunity to own one of Vancouver's last great estates.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-secondary" />
              <span className="text-lg">604.803.3936</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-secondary" />
              <span className="text-lg">lori@lorirowe.ca</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-secondary" />
              <span className="text-lg">GrayrossEstates.com</span>
            </div>
          </div>

          <div className="mt-10">
            <Link href="#contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
