import React, { useState } from "react"

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700">
      <button className="flex justify-between items-center w-full py-5 text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-semibold">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
          <p className="pb-5">{answer}</p>
        </div>
      )}
    </div>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'You can create an account by clicking the "Sign Up" button in the top right corner of the homepage. Follow the prompts to enter your information and create your account.',
    },
    {
      question: "Are the quizzes free?",
      answer:
        "Yes, most of our quizzes are free to play. We do offer some premium quizzes with advanced features for a small fee.",
    },
    {
      question: "Can I create my own quizzes?",
      answer: "Once you have an account, you can create and share your own quizzes with the community.",
    },
    {
      question: "What if I forget my password?",
      answer:
        'If you forget your password, click the "Forgot Password?" link on the login page. You will be prompted to reset your password via email.',
    },
    {
      question: "What are the system requirements?",
      answer:
        "Our quizzes are compatible with most modern browsers and devices. For optimal performance, we recommend using a recent version of Chrome, Firefox, Safari, or Edge.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team by emailing support@example.com or using the contact form on our website.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

