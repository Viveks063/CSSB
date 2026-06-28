import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const initiatives = [
  {
    image: "/cultural_activity.png",
    title: "Cultural Activities",
    desc: "Yakshagana, Festivals, Religious Programs & more",
    href: "#activities",
  },
  {
    image: "/bhajan.png",
    title: "Bhajan Repository",
    desc: "Lyrics, Meanings & Audio of Devotional Bhajans",
    href: "#bhajans",
  },
  {
    image: "/folk_songs_lib.png",
    title: "Folk Songs Library",
    desc: "Traditional Folk Songs & Cultural Heritage",
    href: "#folk-songs",
  },
  {
    image: "/festival_knowledge.png",
    title: "Festival Knowledge",
    desc: "Importance, History, Rituals & Celebrations",
    href: "#festivals",
  },
  {
    image: "/knowledge_center.png",
    title: "Knowledge Center",
    desc: "Temple Guide, Poojas, Vratas, Articles & More",
    href: "#knowledge",
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="relative bg-cream py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-maroon font-heading">
            Explore Our Initiatives
          </h2>
          <div className="w-24 h-1.5 bg-temple-gold mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {initiatives.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-temple-gold/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image banner */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Text content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-maroon mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-6 flex-1">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-saffron font-semibold text-sm group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={15} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
