import { Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function GetInvolved() {
  return (
    <section id="volunteer" className="relative bg-cream py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Volunteer */}
          <motion.div
            id="join"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-l-4 border-maroon rounded-2xl shadow-lg p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <Users size={26} className="text-maroon" />
              <h3 className="text-2xl font-bold text-maroon font-heading">Join the Seva Movement</h3>
            </div>
            <p className="text-gray-600 leading-7 flex-1">
              Be a part of our mission. Volunteer your time, skills and make a difference in
              preserving culture and serving the community.
            </p>
            <button className="mt-6 self-start inline-flex items-center gap-2 bg-maroon text-white font-semibold px-6 py-3 rounded-lg hover:bg-maroon-dark transition-colors">
              <Users size={18} /> Become a Volunteer
            </button>
          </motion.div>

          {/* Donate */}
          <motion.div
            id="donate"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-temple-gold-light/30 border-l-4 border-saffron rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Heart size={26} className="text-saffron" />
                <h3 className="text-2xl font-bold text-saffron font-heading">Support Our Cause</h3>
              </div>
              <p className="text-gray-600 leading-7">
                Your contribution helps us continue our cultural, educational and social
                initiatives.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 bg-saffron text-white font-semibold px-6 py-3 rounded-lg hover:bg-saffron-dark transition-colors">
                <Heart size={18} /> Donate Now
              </button>
            </div>

            {/* UPI QR placeholder */}
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-500 mb-2">Scan & Donate</p>
              <div className="w-28 h-28 bg-white border border-temple-gold/30 rounded-xl flex items-center justify-center text-gray-300 text-xs">
                UPI QR
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
