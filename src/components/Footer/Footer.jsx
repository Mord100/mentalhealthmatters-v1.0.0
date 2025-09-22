import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/website/mhm.png'

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-purple-200/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-amber-100/5 to-orange-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-8 lg:px-16 py-20 lg:py-24">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <img src={Logo} className="h-8 w-auto mb-6" alt="Mental Health Matters" />
              <p className="text-base font-body text-neutral-300 leading-relaxed max-w-md">
                Dedicated to breaking mental health stigma and building a supportive community where
                every individual can access the care and understanding they deserve.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-normal text-white mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-body text-neutral-300">
                    Lilongwe, Malawi
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+265123456789" className="text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                    +265 880 147 623 | +265 985 556 518
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@mentalhealthmatters.mw" className="text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                    info@mhm.mw@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-serif font-normal text-white mb-4">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Our Programs */}
            <div>
              <h3 className="text-lg font-serif font-normal text-white mb-6">Our Programs</h3>
              <nav className="space-y-3">
                <a href="#services" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Individual Therapy
                </a>
                <a href="#services" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Support Groups
                </a>
                <a href="#services" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Wellness Programs
                </a>
                <a href="#services" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Crisis Support
                </a>
              </nav>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-lg font-serif font-normal text-white mb-6">About Us</h3>
              <nav className="space-y-3">
                <a href="#team" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Our Team
                </a>
                <a href="#gallery" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Our Impact
                </a>
                <a href="#endorsements" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Recognition
                </a>
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Annual Reports
                </a>
              </nav>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-lg font-serif font-normal text-white mb-6">Get Involved</h3>
              <nav className="space-y-3">
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Volunteer
                </a>
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Donate
                </a>
                <a href="#shop" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Shop
                </a>
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Partner With Us
                </a>
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-serif font-normal text-white mb-6">Resources</h3>
              <nav className="space-y-3">
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Mental Health Guide
                </a>
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Crisis Hotlines
                </a>
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  Educational Materials
                </a>
                <a href="#" className="block text-sm font-body text-neutral-300 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </nav>
            </div>

          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-serif font-normal text-white mb-3">
                Stay Connected
              </h3>
              <p className="text-sm font-body text-neutral-300">
                Get updates on our programs, events, and mental health resources delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-sans font-medium text-sm transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-body text-neutral-400">
              <p>© 2024 Mental Health Matters. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
            <div className="text-sm font-body text-neutral-400">
              Developed with care by{" "}
              <a
                href="https://divdynamics.netlify.app/"
                className="text-primary hover:text-primary/80 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                DivDynamics
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;