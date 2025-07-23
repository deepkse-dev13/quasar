"use client";
import React, { useState, useEffect } from 'react';
import './globals.css'; // Import global styles

// Main App Component (will be the default export for pages/index.jsx)
const Home = () => {
  // State for mobile navigation toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  // State for accordion items
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Toggle accordion item
  const handleAccordionToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Effect to set current year in footer
  useEffect(() => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
      currentYearElement.textContent = String(new Date().getFullYear());
    }
  }, []);

  return (
    // The main container for the entire application
    <div className="antialiased">
      {/* Header Component */}
      <header className="bg-black text-white p-4 shadow-xl border-b border-neutral-800">
        <nav className="container mx-auto flex items-center justify-between flex-wrap">
          {/* Company Logo */}
          <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
            <img src="/Quasara_Logo.png" alt="Quasara Logo" className="h-9 w-11 mr-2" />
            <span className="font-extrabold text-2xl tracking-tight">Quasara</span>
          </a>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="block lg:hidden">
            <button id="nav-toggle" onClick={toggleNav} className="flex items-center px-3 py-2 border rounded-lg text-gray-300 border-neutral-600 hover:text-white hover:border-white transition duration-300">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>

          {/* Main Navigation Links */}
          <div id="nav-content" className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isNavOpen ? '' : 'hidden'}`}>
            <div className="text-base lg:flex-grow font-medium">
              <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-6 p-2 rounded-lg transition duration-300 transform hover:scale-105">Home</a>
              <div className="dropdown inline-block relative">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-6 p-2 rounded-lg transition duration-300 transform hover:scale-105">
                  What We Do
                  <svg className="inline-block h-4 w-4 ml-1 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <div className="dropdown-content">
                  <a href="#">Capabilities/Services</a>
                  <a href="#">Industries</a>
                </div>
              </div>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-6 p-2 rounded-lg transition duration-300 transform hover:scale-105">Our Work</a>
              <div className="dropdown inline-block relative">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-6 p-2 rounded-lg transition duration-300 transform hover:scale-105">
                  Insights
                  <svg className="inline-block h-4 w-4 ml-1 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <div className="dropdown-content">
                  <a href="#">Articles & Reports</a>
                  <a href="#">Whitepapers</a>
                  <a href="#">Webinars & Events</a>
                </div>
              </div>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-6 p-2 rounded-lg transition duration-300 transform hover:scale-105">About Us</a>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-6 p-2 rounded-lg transition duration-300 transform hover:scale-105">Careers</a>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white p-2 rounded-lg transition duration-300 transform hover:scale-105">Contact Us</a>
            </div>
            <div className="flex items-center mt-4 lg:mt-0">
              {/* Search Icon */}
              <button className="text-gray-300 hover:text-white p-2 rounded-full transition duration-300 mr-4 transform hover:scale-110">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
              {/* USA Selector */}
              <div className="dropdown inline-block relative">
                <button className="text-gray-300 hover:text-white p-2 rounded-lg transition duration-300 flex items-center transform hover:scale-105">
                  <img src="https://placehold.co/20x15/000000/ffffff?text=US" alt="USA Flag" className="mr-1 rounded shadow-md" /> USA
                  <svg className="inline-block h-4 w-4 ml-1 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="dropdown-content right-0">
                  <a >USA</a>
                  <a >UK</a>
                  <a >Germany</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative hero-background h-[700px] flex items-center justify-center text-center p-4">
          <div className="absolute inset-0 bg-black opacity-40"></div> {/* Slightly less opaque overlay */}
          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
              <span className="text-accent-red">Innovate. Transform.</span> Achieve.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
              We partner with visionary leaders to navigate complex challenges, unlock unprecedented growth, and shape a sustainable future.
            </p>
            <a href="#"
              className="inline-block bg-accent-red text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-accent-red-darker transition duration-300 btn-fancy-hover">
              <span>Explore Our Services</span>
            </a>
          </div>
        </section>

        {/* Our Core Focus/What We Do Snapshot */}
        <section className="py-20 bg-neutral-950 border-t border-neutral-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Service 1 */}
              <div className="bg-neutral-900 p-8 rounded-2xl shadow-xl card-hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-3 text-center">Digital Transformation</h3>
                <p className="text-neutral-400 text-center text-base">
                  Leverage cutting-edge technology to modernize operations and enhance customer experiences for a competitive edge.
                </p>
                <a href="#" className="block text-center text-accent-red mt-6 hover:underline font-medium">Learn More &rarr;</a>
              </div>
              {/* Service 2 */}
              <div className="bg-neutral-900 p-8 rounded-2xl shadow-xl card-hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-3 text-center">Strategy & Operations</h3>
                <p className="text-neutral-400 text-center text-base">
                  Develop robust strategies and optimize operations for sustainable growth, maximum efficiency, and market leadership.
                </p>
                <a href="#" className="block text-center text-accent-red mt-6 hover:underline font-medium">Learn More &rarr;</a>
              </div>
              {/* Service 3 */}
              <div className="bg-neutral-900 p-8 rounded-2xl shadow-xl card-hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-3 text-center">Cybersecurity</h3>
                <p className="text-neutral-400 text-center text-base">
                  Protect your critical assets with comprehensive cybersecurity strategies and proactive resilience planning.
                </p>
                <a href="#" className="block text-center text-accent-red mt-6 hover:underline font-medium">Learn More &rarr;</a>
              </div>
              {/* Service 4 */}
              <div className="bg-neutral-900 p-8 rounded-2xl shadow-xl card-hover-effect">
                <h3 className="text-2xl font-semibold text-white mb-3 text-center">Sustainability</h3>
                <p className="text-neutral-400 text-center text-base">
                  Integrate sustainable practices into your core business model for long-term value and positive global impact.
                </p>
                <a href="#" className="block text-center text-accent-red mt-6 hover:underline font-medium">Learn More &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us/Our Approach (Accordion) */}
        <section className="py-20 bg-black border-t border-neutral-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Our Approach: Client-Centric Innovation</h2>
            <div className="space-y-4">
              <p className="text-center md:text-left leading-relaxed text-lg text-neutral-300 mb-8">
                At YourCompany, we don't just offer solutions; we forge enduring partnerships. We immerse ourselves in your unique challenges, co-create bespoke strategies, and meticulously implement changes that yield measurable, sustainable, and transformative results. Our methodology is meticulously crafted upon four foundational pillars:
              </p>

              {/* Accordion Item 1 */}
              <div className="accordion-item">
                <div className={`accordion-header ${openAccordion === 1 ? 'active' : ''}`} onClick={() => handleAccordionToggle(1)}>
                  <span className="number">01</span>
                  <span className="flex-grow">Data-Driven Insights</span>
                  <svg className="icon h-6 w-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: openAccordion === 1 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div className={`accordion-content ${openAccordion === 1 ? 'open' : ''}`}>
                  <p className="pl-[4.5rem] text-base">
                    We harness advanced analytics and deep market intelligence to provide actionable insights, ensuring every strategic decision is fortified by robust evidence. Our rigorous analysis transforms complex data into clear, concise, and impactful recommendations.
                  </p>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="accordion-item">
                <div className={`accordion-header ${openAccordion === 2 ? 'active' : ''}`} onClick={() => handleAccordionToggle(2)}>
                  <span className="number">02</span>
                  <span className="flex-grow">Innovative Solutions</span>
                  <svg className="icon h-6 w-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: openAccordion === 2 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div className={`accordion-content ${openAccordion === 2 ? 'open' : ''}`}>
                  <p className="pl-[4.5rem] text-base">
                    We relentlessly explore and integrate emerging technologies and pioneering methodologies to deliver fresh, forward-thinking solutions that grant you a decisive competitive edge. Our innovation labs and expert networks ensure you benefit from the latest advancements.
                  </p>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="accordion-item">
                <div className={`accordion-header ${openAccordion === 3 ? 'active' : ''}`} onClick={() => handleAccordionToggle(3)}>
                  <span className="number">03</span>
                  <span className="flex-grow">Sustainable Impact</span>
                  <svg className="icon h-6 w-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: openAccordion === 3 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div className={`accordion-content ${openAccordion === 3 ? 'open' : ''}`}>
                  <p className="pl-[4.5rem] text-base">
                    Our vision extends beyond immediate gains. We engineer strategies that cultivate enduring resilience, exponential growth, and a profound positive societal impact. We help you build a future-proof business that contributes to a better world.
                  </p>
                </div>
              </div>

              {/* Accordion Item 4 */}
              <div className="accordion-item">
                <div className={`accordion-header ${openAccordion === 4 ? 'active' : ''}`} onClick={() => handleAccordionToggle(4)}>
                  <span className="number">04</span>
                  <span className="flex-grow">Experienced Team</span>
                  <svg className="icon h-6 w-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: openAccordion === 4 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div className={`accordion-content ${openAccordion === 4 ? 'open' : ''}`}>
                  <p className="pl-[4.5rem] text-base">
                    Our diverse collective of seasoned experts brings unparalleled industry knowledge and a verifiable track record of success across myriad sectors. We assemble the right team for your specific needs, ensuring tailored and effective solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights/Latest Thinking */}
        <section className="py-20 bg-neutral-950 border-t border-neutral-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Latest Thinking & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Insight 1 */}
              <div className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden card-hover-effect">
                <img src="https://placehold.co/600x350/000000/ff4d4d?text=AI+for+Good" alt="Powering Sustainable AI" className="w-full h-56 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Powering Sustainable AI</h3>
                  <p className="text-neutral-400 text-base mb-4 line-clamp-3">
                    Explore how AI can be developed and deployed responsibly to drive both significant business value and profound environmental sustainability. This report delves into ethical considerations, energy efficiency, and long-term societal benefits of AI implementation.
                  </p>
                  <a href="#" className="text-accent-red hover:underline text-base font-medium flex items-center">Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </div>
              {/* Insight 2 */}
              <div className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden card-hover-effect">
                <img src="https://placehold.co/600x350/000000/ff4d4d?text=Cyber+Resilience" alt="State of Cybersecurity Resilience" className="w-full h-56 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">State of Cybersecurity Resilience 2025</h3>
                  <p className="text-neutral-400 text-base mb-4 line-clamp-3">
                    A deep dive into the evolving landscape of cyber threats, highlighting key vulnerabilities and strategic frameworks for building robust, adaptive resilience in a digital-first world.
                  </p>
                  <a href="#" className="text-accent-red hover:underline text-base font-medium flex items-center">Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </div>
              {/* Insight 3 */}
              <div className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden card-hover-effect">
                <img src="https://placehold.co/600x350/000000/ff4d4d?text=Reinvention" alt="Business Reinvention Case Studies" className="w-full h-56 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Business Reinvention & Transformation</h3>
                  <p className="text-neutral-400 text-base mb-4 line-clamp-3">
                    Discover compelling real-world case studies showcasing how leading businesses are reinventing themselves to navigate disruption and achieve unparalleled success in dynamic markets.
                  </p>
                  <a href="#" className="text-accent-red hover:underline text-base font-medium flex items-center">Read More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-16">
              <a href="#"
                className="inline-block border border-accent-red text-accent-red font-bold py-3 px-10 rounded-full text-lg hover:bg-accent-red hover:text-white transition duration-300 transform hover:scale-105 btn-fancy-hover">
                <span>View All Insights</span>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action (Bottom) */}
        <section className="py-24 bg-black text-center border-t border-neutral-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Reinvent Your Business?</h2>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 font-light">
              Let's discuss how our unparalleled expertise can help you achieve your most ambitious strategic goals and drive lasting impact.
            </p>
            <a href="#"
              className="inline-block bg-accent-red text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl hover:bg-accent-red-darker transition duration-300 transform hover:scale-105 btn-fancy-hover">
              <span>Contact Us Today</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">YourCompany</h3>
            <p className="text-sm mb-5 leading-relaxed">Innovate. Transform. Achieve. Partnering with you for a future of limitless possibilities.</p>
            <div className="flex space-x-5">
              {/* Social Media Icons (Placeholder SVGs for LinkedIn and X) */}
              <a href="#" className="text-neutral-400 hover:text-accent-red transition duration-300 transform hover:scale-110">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-red transition duration-300 transform hover:scale-110">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.917L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-white transition duration-300">What We Do</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Our Work</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Insights</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Contact Us</h3>
            <p className="text-base mb-3">Email: <a href="mailto:info@yourcompany.com" className="hover:text-white transition duration-300">info@yourcompany.com</a></p>
            <p className="text-base mb-3">Phone: <a href="tel:+11234567890" className="hover:text-white transition duration-300">+1 (123) 456-7890</a></p>
            <p className="text-base">Address: 123 Consulting Ave, Suite 400, City, State, 12345</p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">Legal</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-neutral-500 text-sm">
          &copy; <span id="current-year"></span> YourCompany. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
