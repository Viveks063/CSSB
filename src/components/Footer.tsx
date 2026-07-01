import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "#" },
  { title: "About CSSB", href: "#about" },
  { title: "Events", href: "#events" },
  { title: "News", href: "#news" },
  { title: "Gallery", href: "#gallery" },
  { title: "Contact", href: "#contact" },
];

const supportLinks = [
  { title: "Donate", href: "#donate" },
  { title: "Volunteer", href: "#volunteer" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#4B0000] via-[#650000] to-[#3A0000] text-white">

      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-[#D4A017]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#D4A017]/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8">

          {/* ================= Logo Section ================= */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src="/cssb-logo.png"
                alt="CSSB Logo"
                className="w-16 h-16 rounded-full border-2 border-[#D4A017] object-cover shadow-lg"
              />

              <div>

                <h2 className="text-xl font-bold leading-tight">
                  Cultural Seva Sanstha
                </h2>

                <p className="text-[#D4A017] text-sm tracking-widest">
                  BHIWANDI
                </p>

              </div>

            </div>

            <p className="mt-5 text-white/80 leading-7 text-[15px]">
              Preserving Indian culture through traditions,
              community service, youth empowerment and
              cultural activities for future generations.
            </p>

            {/* Social Icons */}

            <div className="flex gap-3 mt-6">

              <a
                href="https://www.facebook.com/profile.php?id=61586448004834"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A017] transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/culturalsevasanstha_bhiwandi?igsh=MTgxdDJzeXkyNGdsdg=="
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A017] transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@culturalsevasansthabwd"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A017] transition-all duration-300 flex items-center justify-center"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* ================= Quick Links ================= */}

          <div>

            <h3 className="text-xl font-bold text-[#D4A017] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item) => (

                <li key={item.title}>

                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-white/80 hover:text-[#D4A017] transition-all"
                  >

                    <ChevronRight size={16} />

                    {item.title}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= Support ================= */}

          <div>

            <h3 className="text-xl font-bold text-[#D4A017] mb-5">
              Support
            </h3>

            <ul className="space-y-3">

              {supportLinks.map((item) => (

                <li key={item.title}>

                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-white/80 hover:text-[#D4A017] transition-all"
                  >

                    <ChevronRight size={16} />

                    {item.title}

                  </a>

                </li>

              ))}

            </ul>

          </div>

                    {/* ================= Contact ================= */}

          <div>

            <h3 className="text-xl font-bold text-[#D4A017] mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-1 text-[#D4A017] flex-shrink-0"
                />

                <div>

                  <p className="text-sm text-white/60">
                    Phone
                  </p>

                  <a
                    href="tel:+91 79778 27710"
                    className="text-white hover:text-[#D4A017] transition-colors"
                  >
                    +91 79778 27710
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-1 text-[#D4A017] flex-shrink-0"
                />

                <div>

                  <p className="text-sm text-white/60">
                    Email
                  </p>

                  <a
                    href="mailto:culturalteambhiwandi@gmail.com"
                    className="text-white hover:text-[#D4A017] transition-colors break-all"
                  >
                    culturalteambhiwandi@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-[#D4A017] flex-shrink-0"
                />

                <div>

                  <p className="text-sm text-white/60">
                    Address
                  </p>

                  <p className="text-white leading-7">
                    Cultural Seva Sanstha,
                    <br />
                    Bhiwandi,
                    Maharashtra,
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= Divider ================= */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent"></div>

        {/* ================= Bottom Footer ================= */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Cultural Seva Sanstha Bhiwandi (CSSB).
            Build with ❤️
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="hover:text-[#D4A017] transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-[#D4A017] transition-colors"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}