import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#1a337e]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square max-w-[600px] mx-auto">
              <Image
                src="/assets/hero-img.png"
                alt="Medical professionals"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Achieve
              <br />
              Your Medical
              <br />
              Dreams
              <br />
              with StudySmart
            </h1>

            <p className="text-lg md:text-xl text-blue-200">
              Your Pathway to Success in USMLE and Beyond
            </p>

            <div className="pt-4">
              <button className="bg-[#ff7f5d] hover:bg-[#ff6b47] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200">
                Get Started Now
              </button>
            </div>

            {/* Decorative Arrow */}
            <div className="relative h-24 w-24 mt-8">
              <BsArrowUpRight className="text-white/50 transform rotate-45 text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
