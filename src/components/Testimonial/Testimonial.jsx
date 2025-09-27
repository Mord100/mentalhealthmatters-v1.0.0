import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import User from '../../assets/website/nikiwe.png'

const leaderEndorsements = [
  {
    id: 1,
    quote: "Mental wellness is not a destination, but a process. It's about how you drive, not where you're going. Taking small steps each day can lead to profound improvements in your overall well-being.",
    author: "Nikiwe",
    title: "Mental Health Advocate",
    organization: "Rugare Mental Health Organisation",
    image: User
  }
]

export default function Example() {
  const [currentEndorsement, setCurrentEndorsement] = useState(0)

  const nextEndorsement = () => {
    setCurrentEndorsement((prev) => (prev + 1) % leaderEndorsements.length)
  }

  const prevEndorsement = () => {
    setCurrentEndorsement((prev) => (prev - 1 + leaderEndorsements.length) % leaderEndorsements.length)
  }

  const current = leaderEndorsements[currentEndorsement]

  return (
    <section id="endorsements" className="relative bg-gradient-to-br from-neutral-50 via-white to-stone-50/30 py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-purple-100/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-amber-50/40 to-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-8 lg:px-16">

        {/* Endorsements Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-display font-light text-neutral-400">06</span>
            <div className="w-12 h-px bg-neutral-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-normal leading-[0.9] text-neutral-900 tracking-tight mb-6">
                Peer
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-display font-light italic text-neutral-600 -mt-2 lg:-mt-4">
                  Recognition
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg font-body text-neutral-600 leading-relaxed max-w-md">
                Leading mental health professionals and organizations recognize our commitment
                to excellence in community mental health advocacy.
              </p>
            </div>
          </div>
        </div>

        {/* Endorsement Content */}
        <div className="relative">
          {/* Navigation Arrows */}
          {leaderEndorsements.length > 1 && (
            <>
              <button
                onClick={prevEndorsement}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white z-10"
              >
                <ChevronLeftIcon className="h-5 w-5 text-neutral-600 hover:text-neutral-900" />
              </button>

              <button
                onClick={nextEndorsement}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white z-10"
              >
                <ChevronRightIcon className="h-5 w-5 text-neutral-600 hover:text-neutral-900" />
              </button>
            </>
          )}

          {/* Main Endorsement Card */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-3xl p-12 lg:p-16 shadow-xl">

              {/* Professional Endorsement Quote */}
              <figure>
                <blockquote className="text-center mb-12">
                  <div className="text-4xl lg:text-5xl font-serif text-primary/20 mb-6">"</div>
                  <p className="text-xl lg:text-2xl font-serif font-normal text-neutral-900 leading-relaxed">
                    {current.quote}
                  </p>
                  <div className="text-4xl lg:text-5xl font-serif text-primary/20 mt-6 text-right">"</div>
                </blockquote>

                <figcaption className="text-center">
                  {current.image && (
                    <div className="mb-6">
                      <img
                        className="mx-auto w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
                        src={current.image}
                        alt={current.author}
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="text-xl lg:text-2xl font-serif font-normal text-neutral-900">
                      {current.author}
                    </div>
                    <div className="text-base font-sans font-medium text-primary">
                      {current.title}
                    </div>
                    <div className="text-sm font-sans text-neutral-600">
                      {current.organization}
                    </div>
                  </div>
                </figcaption>
              </figure>

              {/* Professional Credibility Badge */}
              <div className="absolute top-8 right-8">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-sans font-medium uppercase tracking-wider">
                  Professional Endorsement
                </div>
              </div>
            </div>
          </div>

          {/* Endorsement Indicators */}
          {leaderEndorsements.length > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              {leaderEndorsements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEndorsement(index)}
                  className={`transition-all duration-300 ${
                    index === currentEndorsement
                      ? 'w-8 h-2 bg-primary rounded-full'
                      : 'w-2 h-2 bg-neutral-300 rounded-full hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Professional Network CTA */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-4">
              Join Our Professional Network
            </h3>
            <p className="text-base font-body text-neutral-600 leading-relaxed mb-6">
              Connect with fellow mental health professionals and leaders. Together,
              we can strengthen the mental health ecosystem across Malawi and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-base font-sans font-medium text-neutral-900 transition-all duration-300 hover:text-primary"
              >
                <span>Partner With Us</span>
                <div className="w-4 h-4 border border-neutral-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                  <span className="text-xs text-neutral-600 transition-colors duration-300 group-hover:text-white leading-none">→</span>
                </div>
              </a>
              <a
                href="#services"
                className="text-base font-sans font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
              >
                View Our Programs
              </a>
            </div>
          </div>
        </div>
        {/* Professional Affiliations */}
        {/* <div className="mt-20 pt-16 border-t border-neutral-200">
          <div className="text-center mb-12">
            <h4 className="text-lg font-serif font-normal text-neutral-900 mb-6">
              Recognized By
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
              <div className="text-sm font-sans font-medium text-neutral-600">Malawi College of Medicine</div>
              <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
              <div className="text-sm font-sans font-medium text-neutral-600">WHO Malawi</div>
              <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
              <div className="text-sm font-sans font-medium text-neutral-600">Ministry of Health</div>
              <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
              <div className="text-sm font-sans font-medium text-neutral-600">QECH Psychiatry</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}