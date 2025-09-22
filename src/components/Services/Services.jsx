import React, { useState } from 'react';
import Image from '../../assets/website/group.jpg'

const services = [
  {
    id: 1,
    name: 'Individual Therapy',
    description: 'One-on-one sessions with licensed mental health professionals tailored to your specific needs.',
    href: '#',
    category: 'Therapy',
    features: ['Licensed Therapists', 'Personalized Care', 'Flexible Scheduling']
  },
  {
    id: 2,
    name: 'Support Groups',
    description: 'Connect with others who share similar experiences in a safe, supportive environment.',
    href: '#',
    category: 'Community',
    features: ['Peer Support', 'Group Sessions', 'Shared Experiences']
  },
  {
    id: 3,
    name: 'Wellness Programs',
    description: 'Holistic approaches to mental wellness including mindfulness, meditation, and lifestyle coaching.',
    href: '#',
    category: 'Wellness',
    features: ['Mindfulness Training', 'Lifestyle Coaching', 'Stress Management']
  },
  {
    id: 4,
    name: 'Crisis Support',
    description: '24/7 emergency mental health support for immediate assistance during difficult times.',
    href: '#',
    category: 'Emergency',
    features: ['24/7 Availability', 'Crisis Intervention', 'Immediate Support']
  },
  {
    id: 5,
    name: 'Family Counseling',
    description: 'Specialized therapy sessions designed to improve family dynamics and communication.',
    href: '#',
    category: 'Family',
    features: ['Family Therapy', 'Communication Skills', 'Relationship Building']
  },
  {
    id: 6,
    name: 'Educational Workshops',
    description: 'Interactive sessions covering mental health awareness, coping strategies, and wellness topics.',
    href: '#',
    category: 'Education',
    features: ['Mental Health Education', 'Coping Strategies', 'Interactive Learning']
  },
];



export default function Example() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-stone-50/30 py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-100/40 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-stone-100/20 to-neutral-100/20 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30"
             style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '60px 60px'}}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-8 lg:px-16">

        {/* Services Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-display font-light text-neutral-400">02</span>
            <div className="w-12 h-px bg-neutral-300"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-normal leading-[0.9] text-neutral-900 tracking-tight mb-6">
                Our
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-display font-light italic text-neutral-600 -mt-2 lg:-mt-4">
                  Services
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg font-body text-neutral-600 leading-relaxed max-w-md">
                Comprehensive mental health support designed to meet you wherever you are
                on your wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                className={`group cursor-pointer relative ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`relative p-8 lg:p-10 rounded-3xl backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] ${
                  isEven
                    ? 'bg-white/70 border border-white/50 shadow-lg group-hover:shadow-2xl group-hover:bg-white/90'
                    : 'bg-gradient-to-br from-stone-50/80 to-neutral-100/60 border border-stone-200/50 group-hover:shadow-xl'
                }`}>

                  {/* Floating Accent */}
                  <div className={`absolute -top-3 -right-3 w-16 h-16 rounded-2xl rotate-12 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                    isEven
                      ? 'bg-gradient-to-br from-primary/20 to-purple-200/30'
                      : 'bg-gradient-to-br from-amber-200/40 to-orange-200/30'
                  }`}></div>

                  {/* Service Number & Category */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-display font-bold transition-all duration-300 ${
                          hoveredService === service.id
                            ? 'bg-primary text-white scale-110'
                            : 'bg-neutral-100 text-neutral-600 group-hover:bg-primary/10'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="w-8 h-px bg-gradient-to-r from-neutral-300 to-transparent"></div>
                      </div>
                      <span className="text-xs font-sans font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Title with Icon */}
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {service.name}
                      </h3>
                      <div className={`w-12 h-1 rounded-full transition-all duration-500 ${
                        hoveredService === service.id ? 'w-20 bg-primary' : 'bg-neutral-300'
                      }`}></div>
                    </div>

                    {/* Service Description */}
                    <p className="text-base font-body text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Service Features with Enhanced Design */}
                    <div className="mb-8">
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="group/feature flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/50">
                            <div className="relative">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-20"></div>
                            </div>
                            <span className="text-sm font-sans text-neutral-700 group-hover/feature:text-neutral-900 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Service Link */}
                    <a
                      href={service.href}
                      className="group/link inline-flex items-center gap-3 text-base font-sans font-medium text-neutral-900 transition-all duration-300 hover:text-primary"
                    >
                      <span>Learn More</span>
                      <div className="relative">
                        <div className="w-8 h-8 border-2 border-neutral-300 rounded-full flex items-center justify-center transition-all duration-300 group-hover/link:border-primary group-hover/link:bg-primary group-hover/link:scale-110">
                          <span className="text-sm text-neutral-600 transition-all duration-300 group-hover/link:text-white group-hover/link:translate-x-0.5">→</span>
                        </div>
                        <div className="absolute inset-0 w-8 h-8 border-2 border-primary rounded-full opacity-0 group-hover/link:opacity-100 group-hover/link:scale-150 transition-all duration-500"></div>
                      </div>
                    </a>
                  </div>

                  {/* Enhanced Hover Effects */}
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                    hoveredService === service.id
                      ? 'bg-gradient-to-br from-primary/5 to-transparent'
                      : ''
                  }`}></div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                    hoveredService === service.id
                      ? 'shadow-[0_0_0_1px] shadow-primary/20'
                      : ''
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>


      

        {/* Simplified CTA Section */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-6">
              Ready to Begin Your Wellness Journey?
            </h3>
            <p className="text-lg font-body text-neutral-600 leading-relaxed mb-8">
              Take the first step towards better mental health. Our team is here to support you
              with compassionate, professional care tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 px-8 py-4 text-base font-sans font-medium text-white transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl"
              >
                <span>Schedule Consultation</span>
                <div className="w-4 h-4 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-white/60">
                  <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-sans font-medium text-neutral-600 transition-all duration-300 hover:text-neutral-900 rounded-2xl border border-neutral-300 hover:border-neutral-400"
              >
                <span>Browse Resources</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
