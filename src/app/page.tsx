"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactFormModal } from "@/components/ContactFormModal"
import { Button } from "@/components/ui/button"
import {
  Bot,
  MessageSquare,
  ShoppingCart,
  HeadphonesIcon,
  ChevronDown,
  Zap,
  BarChart,
  Settings,
  PlayCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const faqs = [
    {
      question: "How does the AUTOHOMO AI chatbot work?",
      answer: "Our AI is trained specifically on your product catalog and past customer interactions. It uses advanced natural language processing to understand customer intent and provide accurate, helpful responses just like a highly-trained human sales rep."
    },
    {
      question: "Does it integrate with my existing tech stack?",
      answer: "Yes! We offer seamless 1-click integration with Shopify, WooCommerce, Magento, and custom builds. Our AI automatically syncs with your product inventory, pricing, and order status to assist your customers in real-time."
    },
    {
      question: "Can AUTOHOMO actually recommend products?",
      answer: "Absolutely. The core strength of AUTOHOMO is analyzing the customer's conversational context and intelligently recommending the highest-converting products directly in the chat window, driving up your Average Order Value (AOV)."
    },
    {
      question: "How long does setup take?",
      answer: "Most of our merchants are up and running within 48 hours. We handle the heavy lifting of training the AI on your data so you can focus on running your business."
    },
    {
      question: "Is customer data secure?",
      answer: "Yes, security is our top priority. All conversations are encrypted end-to-end, and we are fully GDPR and CCPA compliant. We never share your data with third parties."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, every plan includes dedicated account management and ongoing AI optimization to ensure your chatbot continues to improve its conversion rate over time."
    }
  ];

  return (
    <>
      <Navbar onOpenModal={openModal} />

      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white pt-24 pb-16">
          {/* Decorative background gradients (now grayscale) */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
            <div className="w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
            <div className="w-96 h-96 bg-gray-50 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-sm font-medium mb-8 shadow-sm">
              <Zap className="w-4 h-4 text-white" />
              <span>The future of eCommerce automation by AUTOHOMO</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-black tracking-tight mb-6 max-w-5xl mx-auto leading-tight text-balance uppercase">
              AI Assistants for <span className="text-gray-500">eCommerce Brands</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Supercharge your store with AUTOHOMO's intelligent AI algorithms. We deploy tailored product recommendations, smart FAQ automation, and a 24/7 sales assistant that never sleeps—dramatically increasing your store's conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={openModal} className="w-full sm:w-auto h-14 text-base px-8 bg-black text-white hover:bg-gray-800">
                Get Free Demo
              </Button>
              <Button variant="outline" size="lg" onClick={openModal} className="w-full sm:w-auto h-14 text-base px-8 border-gray-300 text-black hover:bg-gray-50">
                Contact Now
              </Button>
            </div>
          </div>
        </section>


        {/* FEATURES SECTION */}
        <section id="features" className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 uppercase tracking-tight">Purpose-Built for eCommerce</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                AUTOHOMO agents are specifically designed to handle the unique challenges of scaling an online store, providing an omni-channel chatbot experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <ShoppingCart className="w-6 h-6 text-black" />,
                  title: "Website Chatbots",
                  description: "Engage visitors the moment they land on your site. Our AI analyzes browsing behavior to recommend the perfect products instantly."
                },
                {
                  icon: <MessageSquare className="w-6 h-6 text-black" />,
                  title: "Messenger bots",
                  description: "Turn your Facebook traffic into sales. Automate responses to comments and guide users through your catalog directly in Messenger."
                },
                {
                  icon: <HeadphonesIcon className="w-6 h-6 text-black" />,
                  title: "WhatsApp & Instagram",
                  description: "Meet your customers where they already are. Provide 24/7 customer service and recover abandoned carts on social platforms."
                },
                {
                  icon: <BarChart className="w-6 h-6 text-black" />,
                  title: "Automated Customer Service",
                  description: "Instantly resolve 80% of routine customer queries about where is my order (WISMO), returns, and sizing without human intervention."
                }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOMMERCE STATS SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div className="w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-50"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 uppercase tracking-tight text-white">Why eCommerce Brands Trust AUTOHOMO</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div>
                    <div className="text-5xl font-black text-white mb-2">35%</div>
                    <div className="text-gray-400 font-medium">Average increase in conversion rate via chat recommendations.</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-white mb-2">80%</div>
                    <div className="text-gray-400 font-medium">Of routine support tickets resolved automatically.</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-white mb-2">24/7</div>
                    <div className="text-gray-400 font-medium">Global coverage in multiple languages without hiring extra staff.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 uppercase tracking-tight">How AUTOHOMO Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get your custom AI assistant up and running in three simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Desktop connecting line */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Analyze Your Store",
                  description: "We connect to your store and intelligently ingest your product catalog, FAQs, and past support workflows.",
                  icon: <Bot className="w-6 h-6 text-white" />
                },
                {
                  step: "02",
                  title: "Build & Train AI",
                  description: "Our experts customize your AI's personality, test its product knowledge, and ensure perfect tone accuracy.",
                  icon: <Settings className="w-6 h-6 text-white" />
                },
                {
                  step: "03",
                  title: "Deploy & Optimize",
                  description: "Go live with a single line of code. We continually optimize the AUTOHOMO agent based on real user interactions.",
                  icon: <Zap className="w-6 h-6 text-white" />
                }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-6 border-4 border-gray-100">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-gray-500 font-bold text-sm tracking-widest mb-2">STEP {item.step}</div>
                  <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 max-w-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section id="faqs" className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 uppercase tracking-tight">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about optimizing with AUTOHOMO.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "border rounded-xl px-6 transition-all duration-200 overflow-hidden",
                    openFaqIndex === index ? "border-black bg-white shadow-md" : "border-gray-200 bg-white hover:border-gray-300"
                  )}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
                  >
                    <span className="text-lg font-bold text-black">{faq.question}</span>
                    <div className={cn(
                      "flex-shrink-0 ml-4 p-1 rounded-full bg-white border border-gray-200 transition-transform",
                      openFaqIndex === index ? "text-black rotate-180" : "text-gray-400"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div
                    className={cn(
                      "text-gray-600 pb-6 text-base leading-relaxed transition-all",
                      openFaqIndex === index ? "block" : "hidden"
                    )}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
            <div className="w-96 h-96 bg-gray-800/50 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight text-balance">
              Experience the AUTOHOMO Difference
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join dozens of brands scaling effortlessly with our AI agents. Book a free demo today to see it in action on your store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={openModal} className="w-full sm:w-auto h-14 text-base px-8 bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wide">
                Get Free Demo
              </Button>
              <Button variant="outline" size="lg" onClick={openModal} className="w-full sm:w-auto h-14 text-base px-8 border-gray-700 text-white hover:bg-gray-900 hover:text-white hover:border-gray-500 uppercase tracking-wide">
                Contact Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
