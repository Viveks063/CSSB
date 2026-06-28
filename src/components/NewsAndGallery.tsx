import { ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const news = [
  {
    day: "02",
    month: "MAY",
    title: "Successful Completion of Chaitra Utsav 2025",
    desc: "A grand celebration with immense devotion and participation from the community.",
  },
  {
    day: "25",
    month: "APR",
    title: "Free Education Support Program",
    desc: "Distributed study materials to underprivileged students in Bhiwandi.",
  },
  {
    day: "15",
    month: "APR",
    title: "Yakshagana Workshop Conducted",
    desc: "Promoting our traditional art among the younger generation.",
  },
];

export default function NewsAndGallery() {
  return (
    <section id="gallery" className="relative bg-[#FFF8F0] py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* News */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold text-maroon font-heading">Latest News &amp; Updates</h2>
            <a href="#news" className="inline-flex items-center gap-1 text-saffron font-semibold text-sm hover:gap-2 transition-all">
              View All News <ArrowRight size={15} />
            </a>
          </motion.div>

          <div className="space-y-5">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 bg-white border border-temple-gold/20 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="shrink-0 w-16 bg-maroon rounded-lg text-center py-3 text-white">
                  <p className="text-xl font-bold leading-none">{item.day}</p>
                  <p className="text-xs text-temple-gold-light">{item.month}</p>
                </div>
                <div>
                  <h3 className="font-bold text-maroon leading-snug mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold text-maroon font-heading">Gallery Highlights</h2>
            <a href="#gallery" className="inline-flex items-center gap-1 text-saffron font-semibold text-sm hover:gap-2 transition-all">
              View Full Gallery <ArrowRight size={15} />
            </a>
          </motion.div>

          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-square bg-gradient-to-br from-maroon/80 to-maroon-dark rounded-lg flex items-center justify-center text-temple-gold/40 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <ImageIcon size={24} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
