'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Truleado transformed how we manage our client campaigns. The team collaboration and client portal features alone saved us countless hours in back-and-forth emails.",
    author: "Jessica Martinez",
    role: "Founder & CEO",
    company: "Amplify Social Agency",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Finally, a platform built for agencies. Multi-client campaign management, custom roles, and real-time creator deliverable tracking—it's everything we needed in one place.",
    author: "David Nguyen",
    role: "Senior Account Manager",
    company: "Creator Collective Agency",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The customization options are incredible. We've tailored Truleado to our exact workflow, and our clients love the portal access. It's made us look more professional and scaled our operations.",
    author: "Rachel Thompson",
    role: "Director of Operations",
    company: "Influence Partners",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Leading Influencer Marketing Agencies
          </h2>
          <p className="mt-4 text-lg text-violet-100">
            See how agencies are scaling their operations with Truleado
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white/10 backdrop-blur-xl p-8 ring-1 ring-white/20 hover:bg-white/15 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-white/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-violet-200">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

