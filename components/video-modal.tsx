"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  videoUrl: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ videoUrl, isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null

  // Extract video ID from the URL
  const videoId = videoUrl.includes("?") ? videoUrl.split("/").pop()?.split("?")[0] : videoUrl.split("/").pop()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-black text-white hover:bg-black/80"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
