import logo from "./assets/LOGOUP.webp";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
      <div className="text-center px-6 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="w-[280px] h-52"/>
            <h2 className="text-2xl text-4xl text-[#c9a03d]">Sri Lankan Gem Company</h2>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-lg text-[#818181] mb-8 max-w-xl mx-auto leading-relaxed">
          Discover the finest collection of authentic Sri Lankan gemstones. 
          <span className="block text-[#2b338d] font-medium mt-2">
            Coming Soon — A world of brilliance awaits.
          </span>
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-block bg-amber-100 text-amber-800 px-6 py-2 rounded-full text-sm font-semibold mb-8 tracking-wider shadow-inner">
          ✦ LAUNCHING SOON ✦
        </div>

        {/* Contact Email */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">For inquiries, contact us at:</p>
          <a 
            href="mailto:info@srilankangem.com" 
            className="text-[#2b338d] font-medium text-lg hover:underline transition-all duration-200"
          >
            info@srilankangem.com
          </a>
        </div>

        {/* Social/Trust Indicators */}
        <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <span className="text-[#2b338d]">✓</span> Authentic Gems
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#2b338d]">✓</span> Direct from Sri Lanka
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#2b338d]">✓</span> Certified Quality
          </span>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#2b338d] italic">
          <p className="text-sm text-gray-400">
            © 2026 Sri Lankan Gem. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}