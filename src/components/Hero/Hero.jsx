import { Fragment, useState } from "react";
import { Dialog, Transition, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/website/mhm.png";
import ColorLogo from "../../assets/website/color.png";
import HeroImage from "../../assets/website/2151715250.jpg";
import Flyer1 from "../../assets/event/WhatsApp Image 2024-08-01 at 11.53.28.jpeg";
import UpcomingEvent1 from "../../assets/event/1000135682.jpg";
import UpcomingEvent2 from "../../assets/event/1000135685.jpg";

const navigation = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Gallery", href: "gallery" },
  { name: "Shop", href: "shop" },
  { name: "Team", href: "team" },
  // { name: "Blog", href: "blog" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-br from-primary/8 to-purple-200/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-100/20 to-orange-200/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Typography Elements */}
        <div className="absolute top-1/3 left-1/4 text-[200px] font-serif text-neutral-900/[0.015] select-none pointer-events-none leading-none">
          M
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-[150px] font-display text-neutral-600/[0.02] select-none pointer-events-none leading-none italic">
          H
        </div>
      </div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between px-8 py-12 lg:px-16"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="group flex items-center gap-3 transition-all duration-300"
              onClick={() => scroll.scrollToTop()}
            >
              <span className="sr-only">Mental Health Matters</span>
              <img
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                src={Logo}
                alt="Mental Health Matters Logo"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="group relative w-10 h-10 flex items-center justify-center transition-all duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className="w-full h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-4"></span>
                <span className="w-full h-0.5 bg-neutral-600 mt-1 transition-all duration-300 group-hover:w-3 group-hover:ml-auto"></span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-16">
            {navigation.map((item, index) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="group relative text-sm font-sans font-medium text-neutral-600 cursor-pointer transition-all duration-300 hover:text-neutral-900"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -top-2 -left-2 text-xs font-display font-light text-neutral-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  0{index + 1}
                </span>
              </ScrollLink>
            ))}
          </div>

          {/* Right side - Contact */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-sans font-medium text-neutral-900 transition-all duration-300"
            >
              <span>Contact</span>
              <div className="w-4 h-4 border border-neutral-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900">
                <span className="text-xs text-neutral-600 transition-colors duration-300 group-hover:text-white">→</span>
              </div>
            </a>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-50 sm:max-w-sm">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-8 py-12">
              <a
                href="#"
                className="flex items-center gap-3"
                onClick={() => scroll.scrollToTop()}
              >
                <span className="sr-only">Mental Health Matters</span>
                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt="Mental Health Matters Logo"
                />
              </a>

              <button
                type="button"
                className="group relative w-10 h-10 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <div className="w-5 h-5 flex items-center justify-center">
                  <XMarkIcon className="h-5 w-5 text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900" />
                </div>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="px-8 py-8">
              <div className="space-y-8">
                {navigation.map((item, index) => (
                  <div key={item.name} className="group">
                    <ScrollLink
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="block cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-xs font-display font-light text-neutral-400">
                          0{index + 1}
                        </span>
                        <span className="text-2xl font-serif font-normal text-neutral-900 transition-colors duration-300 group-hover:text-primary">
                          {item.name}
                        </span>
                      </div>
                      <div className="w-0 h-px bg-primary mt-2 transition-all duration-500 group-hover:w-16"></div>
                    </ScrollLink>
                  </div>
                ))}
              </div>

              {/* Mobile Contact Section */}
              <div className="mt-16 pt-8 border-t border-neutral-200">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                      Get in Touch
                    </h4>
                    <a
                      href="#"
                      className="group flex items-center gap-3 text-base font-body text-neutral-600 transition-colors duration-300 hover:text-neutral-900"
                    >
                      <span>Contact Us</span>
                      <div className="w-4 h-4 border border-neutral-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                        <span className="text-xs text-neutral-600 transition-colors duration-300 group-hover:text-white">→</span>
                      </div>
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                      Follow Us
                    </h4>
                    <div className="flex gap-4">
                      {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-xs font-body text-neutral-500 transition-colors duration-300 hover:text-primary"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="mt-16 pt-8 border-t border-neutral-200">
                <p className="text-xs font-body text-neutral-500 leading-relaxed">
                  © 2024 Mental Health Matters. Building supportive communities for mental wellness.
                </p>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="relative">
        <div className="relative mx-auto max-w-7xl px-8 pt-32 lg:px-16 lg:pt-40">

          {/* Event announcement */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
              </span>
              Announcing our next event
              <button
                onClick={openModal}
                className="ml-2 text-neutral-900 transition-colors duration-300 hover:text-neutral-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                View details
              </button>
            </div>

            <Transition appear show={isModalOpen} as={Fragment}>
              <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-6 lg:p-8">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-500"
                      enterFrom="opacity-0 scale-90 translate-y-8"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="ease-in duration-300"
                      leaveFrom="opacity-100 scale-100 translate-y-0"
                      leaveTo="opacity-0 scale-95 translate-y-4"
                    >
                      <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden bg-neutral-50 text-left align-middle shadow-2xl transition-all rounded-3xl">
                        {/* Modal Header */}
                        <div className="relative px-8 pt-8 pb-6 lg:px-12 lg:pt-12 lg:pb-8">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-display font-light text-neutral-400">01</span>
                                <div className="w-8 h-px bg-neutral-300"></div>
                              </div>
                              <Dialog.Title
                                as="h2"
                                className="text-3xl lg:text-4xl font-serif font-normal leading-tight text-neutral-900 mb-3"
                              >
                                Community Events
                              </Dialog.Title>
                              <p className="text-lg font-body text-neutral-600 leading-relaxed max-w-md">
                                Stay updated with our latest events and community activities.
                              </p>
                            </div>

                            <button
                              type="button"
                              className="group relative w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-neutral-200 rounded-full"
                              onClick={closeModal}
                            >
                              <span className="sr-only">Close modal</span>
                              <XMarkIcon className="h-5 w-5 text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900" />
                            </button>
                          </div>
                        </div>

                        {/* Tab Navigation */}
                        <div className="px-8 lg:px-12 mb-6">
                          <div className="flex gap-1 bg-neutral-100 p-1 rounded-xl">
                            <button
                              onClick={() => setActiveTab('upcoming')}
                              className={`flex-1 px-4 py-3 text-sm font-sans font-medium rounded-lg transition-all duration-300 ${
                                activeTab === 'upcoming'
                                  ? 'bg-white text-neutral-900 shadow-sm'
                                  : 'text-neutral-600 hover:text-neutral-900'
                              }`}
                            >
                              Upcoming
                            </button>
                            <button
                              onClick={() => setActiveTab('archive')}
                              className={`flex-1 px-4 py-3 text-sm font-sans font-medium rounded-lg transition-all duration-300 ${
                                activeTab === 'archive'
                                  ? 'bg-white text-neutral-900 shadow-sm'
                                  : 'text-neutral-600 hover:text-neutral-900'
                              }`}
                            >
                              Archive
                            </button>
                          </div>
                        </div>

                        {/* Tab Content */}
                        <div className="px-8 lg:px-12 pb-8 lg:pb-12">
                          {activeTab === 'upcoming' && (
                            <div className="space-y-12">
                              {/* Event 1 */}
                              <div className="space-y-8">
                                <div className="relative mb-8">
                                  <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
                                    <img
                                      className="w-full h-auto"
                                      src={UpcomingEvent1}
                                      alt="Upcoming Community Event 1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>

                                    {/* Upcoming Badge */}
                                    {/* <div className="absolute top-4 right-4">
                                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-sans font-medium">
                                        Upcoming
                                      </span>
                                    </div> */}
                                  </div>
                                </div>

                                {/* Event Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                  <div>
                                    <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                                      Event Type
                                    </h4>
                                    <p className="text-base font-body text-neutral-700">
                                      Mental Health Workshop & Community Session
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                                      Format
                                    </h4>
                                    <p className="text-base font-body text-neutral-700">
                                      In-person & Virtual Attendance
                                    </p>
                                  </div>
                                </div>

                                {/* Action Button */}
                                <div className="flex justify-center">
                                  <button
                                    type="button"
                                    className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 px-8 py-4 text-base font-sans font-medium text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                                    onClick={closeModal}
                                  >
                                    <span>Register Now</span>
                                    <div className="w-4 h-4 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-white/60">
                                      <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                                    </div>
                                  </button>
                                </div>
                              </div>

                              {/* Divider */}
                              <div className="border-t border-neutral-200"></div>

                              {/* Event 2 */}
                              <div className="space-y-8">
                                <div className="relative mb-8">
                                  <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
                                    <img
                                      className="w-full h-auto"
                                      src={UpcomingEvent2}
                                      alt="Upcoming Community Event 2"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>

                                    {/* Upcoming Badge */}
                                    {/* <div className="absolute top-4 right-4">
                                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-sans font-medium">
                                        Upcoming
                                      </span>
                                    </div> */}
                                  </div>
                                </div>

                                {/* Event Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                  <div>
                                    <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                                      Event Type
                                    </h4>
                                    <p className="text-base font-body text-neutral-700">
                                      Youth Support & Awareness Program
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                                      Format
                                    </h4>
                                    <p className="text-base font-body text-neutral-700">
                                      In-person Community Gathering
                                    </p>
                                  </div>
                                </div>

                                {/* Action Button */}
                                <div className="flex justify-center">
                                  <button
                                    type="button"
                                    className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 px-8 py-4 text-base font-sans font-medium text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
                                    onClick={closeModal}
                                  >
                                    <span>Register Now</span>
                                    <div className="w-4 h-4 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-white/60">
                                      <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeTab === 'archive' && (
                            <div className="space-y-8">
                              {/* Archived Event */}
                              <div className="relative mb-8">
                                <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
                                  <img
                                    className="w-full h-auto"
                                    src={Flyer1}
                                    alt="Community Event Flyer - Archive"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>

                                  {/* Archive Badge */}
                                  <div className="absolute top-4 right-4">
                                    <span className="bg-neutral-900/80 text-white px-3 py-1 rounded-full text-xs font-sans font-medium">
                                      Past Event
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Event Details */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                  <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                                    Event Type
                                  </h4>
                                  <p className="text-base font-body text-neutral-700">
                                    Community Discussion & Support Session
                                  </p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-sans font-semibold text-neutral-900 uppercase tracking-wider mb-3">
                                    Format
                                  </h4>
                                  <p className="text-base font-body text-neutral-700">
                                    In-person & Virtual Attendance
                                  </p>
                                </div>
                              </div>

                              {/* Archive Actions */}
                              <div className="flex justify-center">
                                <button
                                  type="button"
                                  className="group inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-sans font-medium text-neutral-600 transition-all duration-300 hover:text-neutral-900 rounded-xl border border-neutral-300 hover:border-neutral-400"
                                  onClick={closeModal}
                                >
                                  View Event Photos
                                  <div className="w-4 h-4 border border-neutral-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-neutral-600">
                                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          {/* Hero Typography - Award-Winning Layout */}
          <div className="mb-40 relative">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-end">
              {/* Main Headline with Enhanced Typography */}
              <div className="col-span-12 lg:col-span-9">
                <div className="relative">
                  {/* Typography Label */}
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-xs font-display font-light text-neutral-400">01</span>
                    <div className="w-12 h-px bg-neutral-300"></div>
                    <span className="text-xs font-sans font-medium text-neutral-500 uppercase tracking-[0.2em]">
                      Community
                    </span>
                  </div>

                  {/* Hero Image */}
                  <div className="relative max-w-lg">
                    <div className="aspect-[3/2] overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl">
                      <img
                        src={HeroImage}
                        alt="African American Youth Community Interaction - Mental Health Matters"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>

                      {/* Logo Overlay */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex flex-col items-start">
                          <img
                            src={ColorLogo}
                            alt="Mental Health Matters Logo"
                            className="w-48 lg:w-56 h-auto rounded-2xl shadow-lg"
                          />
                          <p className="text-lg font-body text-white/90 max-w-md mt-4">
                            Building supportive communities for mental wellness and healing
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full"></div>
                    <div className="absolute top-1/2 -left-8 w-1 h-32 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Side Content */}
              <div className="col-span-12 lg:col-span-3">
                <div className="space-y-8 lg:text-right">
                  {/* Establishment Date */}
                  <div>
                    <div className="text-xs font-sans font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                      Established
                    </div>
                    <div className="text-2xl font-display font-bold text-neutral-900">
                      2023
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="flex justify-end lg:justify-start">
                    <div className="w-px h-20 bg-gradient-to-b from-neutral-300 to-transparent"></div>
                  </div>

                  {/* Mission Statement */}
                  <div className="max-w-xs lg:ml-auto">
                    <p className="text-base font-body text-neutral-600 leading-relaxed">
                      Creating pathways to mental wellness through community support,
                      professional care, and compassionate understanding.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Sophisticated Floating Elements */}
            <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
            <div className="absolute top-2/3 left-1/4 w-2 h-16 bg-gradient-to-b from-neutral-300 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-8 h-8 border border-primary/30 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Enhanced Mission Quote */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <div className="relative">
                  {/* Large Quote Marks */}
                  <div className="text-8xl lg:text-9xl font-serif text-primary/10 leading-none mb-6">"
                  </div>

                  <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-serif font-normal leading-[1.2] text-neutral-800 italic -mt-12 pl-8 lg:pl-12">
                    Building bridges to mental wellness, fostering hope, and creating a community where every voice matters and every story finds healing.
                  </blockquote>

                  <div className="mt-8 pl-8 lg:pl-12">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-px bg-primary"></div>
                      <span className="text-sm font-sans font-medium text-neutral-600 uppercase tracking-wider">
                        Our Purpose
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
