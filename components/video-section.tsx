export default function VideoSection() {
  return (
    <div className="py-20 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-block border-b border-t border-primary/30 px-6 py-2">
            <span className="text-sm uppercase tracking-widest text-primary">Property Tour</span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight">Aerial Video Tour</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Experience the breathtaking views and expansive grounds of this extraordinary property
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-5xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
            <iframe
              src="https://player.vimeo.com/video/1084444249?h=c7c2d52a2f&title=0&byline=0&portrait=0"
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Aerial footage showcasing the property's waterfront location and expansive grounds
          </p>
        </div>
      </div>
    </div>
  )
}
