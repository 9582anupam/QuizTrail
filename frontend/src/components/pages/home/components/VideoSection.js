import React from "react"

function VideoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">See QuizMaster in Action</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            title="Video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection

