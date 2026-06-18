import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#5A0000] via-[#7A0000] to-[#5A0000] text-white">

      {/* Gold Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4A017]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-4 mb-5">

              <img
                src="/cssb-logo.png"
                alt="CSSB Logo"
                className="w-16 h-16 rounded-full border-2 border-[#D4A017]"
              />

              <div>
                <h3 className="font-bold text-xl leading-tight">
                  CULTURAL SEVA
                </h3>

                <h3 className="font-bold text-xl leading-tight">
                  SANTHA
                </h3>

                <p className="text-[#D4A017] font-semibold">
                  BHIWANDI (CSSB)
                </p>

                <p className="text-sm text-white/70">
                  Seva • Sanskar • Sanskriti
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-8">
              Committed to preserving our rich cultural heritage,
              serving society and empowering communities through
              various initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-[#D4A017]">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {[
                "Home",
                "About CSSB",
                "Cultural Activities",
                "Events",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-[#D4A017] transition-all duration-300 cursor-pointer"
                >
                  <ChevronRight size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-[#D4A017]">
              Our Initiatives
            </h4>

            <ul className="space-y-4">
              {[
                "Educational Support",
                "Cultural Programs",
                "Youth Development",
                "Community Service",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-[#D4A017] transition-all duration-300 cursor-pointer"
                >
                  <ChevronRight size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-[#D4A017]">
              Support Us
            </h4>

            <ul className="space-y-4">
              {[
                "Donate",
                "Become a Volunteer",
                "Partner With Us",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-[#D4A017] transition-all duration-300 cursor-pointer"
                >
                  <ChevronRight size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-[#D4A017]">
              Get In Touch
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-[#D4A017] mt-1"
                />
                <span className="text-white/90">
                  +91 7777023982
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-[#D4A017] mt-1"
                />
                <span className="text-white/90">
                  info@cssb.org.in
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#D4A017] mt-1"
                />
                <span className="text-white/90 leading-7">
                  Cultural Seva Santha
                  <br />
                  Bhiwandi,
                  Maharashtra,
                  India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-white/70 text-sm text-center md:text-left">
              © 2025 Cultural Seva Santha Bhiwandi (CSSB). All Rights Reserved.
            </p>

            <div className="flex gap-8 text-sm text-white/70">
              <a
                href="#"
                className="hover:text-[#D4A017] transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-[#D4A017] transition"
              >
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}