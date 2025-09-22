import React, { useState } from 'react'
import Tshirt1 from "../../assets/website/tee.png"
import Tshirt2 from "../../assets/website/tee2.png"
import Tshirt3 from "../../assets/website/tee3.png"

const products = [
  {
    id: 1,
    name: 'Mental Health Matters Tee',
    price: 'MK25,000',
    image: Tshirt1,
    description: 'Wear your support with pride',
  },
  {
    id: 2,
    name: 'Awareness Collection Tee',
    price: 'MK25,000',
    image: Tshirt2,
    description: 'Spread awareness, spark conversations',
  },
  {
    id: 3,
    name: 'Community Support Tee',
    price: 'MK25,000',
    image: Tshirt3,
    description: 'Unite for mental wellness',
  },
]

export default function Example() {

  return (
    <section id='shop' className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        {/* Simple Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-xs font-display font-light text-neutral-400">04</span>
            <div className="w-12 h-px bg-neutral-300"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-serif font-normal text-neutral-900 mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg font-body text-neutral-600 max-w-2xl mx-auto">
            Every purchase helps us continue our work in mental health advocacy.
            Wear your support and start conversations that matter.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-xl font-serif font-normal text-neutral-900">
                  {product.name}
                </h3>
                <p className="text-sm font-body text-neutral-600">
                  {product.description}
                </p>
                <div className="text-lg font-display font-medium text-primary mb-4">
                  {product.price}
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-sans font-medium text-sm transition-all duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-base font-body text-neutral-600 leading-relaxed">
            All proceeds directly support our mental health programs and community outreach initiatives.
            Together, we can break the stigma and build a more supportive community.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-sans font-medium text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact for Bulk Orders
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-sans font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
            >
              Learn About Our Programs
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
