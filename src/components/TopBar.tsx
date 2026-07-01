import { House, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#6B0000] via-[#7A0000] to-[#5A0000] border-b border-[#D4A017]/30 shadow-lg">

      <div className="max-w-[1400px] mx-auto h-10 px-6 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-2 text-[#FFF8E7]">

          <House
            size={14}
            className="text-[#D4A017] flex-shrink-0"
          />

          <span className="hidden md:block text-[13px] font-medium tracking-wide">
            Welcome to Cultural Seva Sanstha Bhiwandi (CSSB)
          </span>

          <span className="md:hidden text-[13px] font-medium">
            Welcome to CSSB
          </span>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Email */}
          <a
            href="mailto:culturalteambhiwandi@gmail.com"
            className="hidden lg:flex items-center gap-2 text-[#FFF8E7] hover:text-[#D4A017] transition-all duration-300"
          >
            <Mail
              size={14}
              className="text-[#D4A017]"
            />

            <span className="text-[13px] font-medium">
              culturalteambhiwandi@gmail.com
            </span>

          </a>

          {/* Phone */}

          <a
            href="tel:+91 79778 27710"
            className="hidden lg:flex items-center gap-2 text-[#FFF8E7] hover:text-[#D4A017] transition-all duration-300"
          >

            <Phone
              size={14}
              className="text-[#D4A017]"
            />

            <span className="text-[13px] font-medium">
              +91 79778 27710
            </span>

          </a>

          {/* Social Icons */}

          <div className="flex items-center gap-3 ml-2">

            <a
              href="https://www.facebook.com/profile.php?id=61586448004834"
              className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center shadow hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF
                size={13}
                className="text-white"
              />
            </a>

            <a
              href="https://www.instagram.com/culturalsevasanstha_bhiwandi?igsh=MTgxdDJzeXkyNGdsdg=="
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow hover:scale-110 transition-all duration-300"
            >
              <FaInstagram
                size={14}
                className="text-white"
              />
            </a>

            <a
              href="https://www.youtube.com/@culturalsevasansthabwd"
              className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center shadow hover:scale-110 transition-all duration-300"
            >
              <FaYoutube
                size={14}
                className="text-white"
              />
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}