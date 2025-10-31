'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is XP BOOST?",
      answer: "XP BOOST is a thrilling day-long event packed with intellect, creativity, and fun games! It brings challenging activities to test your logic, speed, and teamwork - all with a festive Halloween twist. No tech skills needed, just your wits and energy!"
    },
    {
      question: "When and where is the event?",
      answer: "XP BOOST will be held on Tuesday, 4th November 2025, from 10:00 AM to 4:00 PM. The venue details will be shared with registered participants."
    },
    {
      question: "Who can participate?",
      answer: "The event is exclusively for FY (First Year) and SY (Second Year) students only. Participants must form teams of 2 members."
    },
    {
      question: "How do I register?",
      answer: "Registration is simple and FREE! Visit the registration link: https://forms.gle/ZPR8EcxSGZSgBQWQ9 and fill in your details. Make sure to register before 3rd November, 8:00 PM as slots are limited!"
    },
    {
      question: "What is the prize pool?",
      answer: "We're offering an exciting total prize pool of ₹10,000! Additional spot prizes and participation rewards will also be announced during the event!"
    },
    {
      question: "Is there any entry fee?",
      answer: "No! It's completely FREE ENTRY for all participants. Just register before the deadline and show up ready to have fun!"
    },
    {
      question: "Do I need technical skills to participate?",
      answer: "Not at all! No tech skills are required. The challenges are designed to test your logic, creativity, speed, and teamwork. Just bring your energy and enthusiasm!"
    },
    {
      question: "Who can I contact for queries?",
      answer: "For any questions or concerns, feel free to reach out to: Tanmay at 9819479556 or Kirtan at 9699076729. We're here to help!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative min-h-screen text-white py-20"
    >
      {/* Background and overlay removed - will be on parent container */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="jolly-lodger-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-12 md:mb-16 text-orange-500 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items - Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 md:px-8 md:py-5 flex justify-between items-center text-left hover:bg-orange-500/10 transition-colors"
              >
                <span className="jolly-lodger-regular text-xl sm:text-2xl md:text-3xl pr-4">
                  {faq.question}
                </span>
                <span 
                  className="text-orange-500 text-2xl md:text-3xl shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 pb-4 md:px-8 md:pb-6 pt-2">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
