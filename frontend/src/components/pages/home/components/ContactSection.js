import React, { useState } from "react"

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (!formData.name) errors.name = "Name is required"
    if (!formData.email) errors.email = "Email is required"
    if (!formData.message) errors.message = "Message is required"

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", message: "" })
      setFormErrors({})
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection

