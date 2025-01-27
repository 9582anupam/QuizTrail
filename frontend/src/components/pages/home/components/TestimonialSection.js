import React from "react"

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "QuizMaster has helped me learn so much in a fun and engaging way!",
      avatar: "/avatars/john.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I love the variety of quizzes available. There's always something new to try!",
      avatar: "/avatars/jane.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      text: "The competitive aspect keeps me coming back for more. It's addictive!",
      avatar: "/avatars/mike.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="mb-4 text-center">{testimonial.text}</p>
              <p className="font-semibold text-purple-400">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

