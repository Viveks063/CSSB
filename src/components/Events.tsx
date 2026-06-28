import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    day: "15",
    month: "JUN",
    year: "2026",
    title: "Shasti Kala Mahotsava 2026",
    type: "Cultural Program",
    location: "Bhiwandi",
    image: "/shasti_kala.png",
  },
  {
    day: "28",
    month: "JUN",
    year: "2026",
    title: "Guru Purnima Celebration",
    type: "Religious Program",
    location: "Bhiwandi",
    image: "/guru_poornima.png",
  },
  {
    day: "10",
    month: "JUL",
    year: "2026",
    title: "Student Talent Showcase",
    type: "Youth Program",
    location: "Bhiwandi",
    image: "/student.png",
  },
];

export default function Events() {
  return (
    <section id="events" className="relative bg-[#FFF8F0] py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-maroon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-maroon font-heading">
              Upcoming Events
            </h2>
            <div className="w-24 h-1.5 bg-temple-gold mt-5 rounded-full" />
          </div>
          <a
            href="#events"
            className="hidden md:inline-flex items-center gap-1 text-saffron font-semibold hover:gap-2 transition-all"
          >
            View All Events <ArrowRight size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Event cards */}
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-temple-gold/20 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className={`w-full h-full object-cover ${event.imagePosition} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-md">
                  <p className="text-2xl font-bold text-maroon leading-none">{event.day}</p>
                  <p className="text-xs font-semibold text-saffron tracking-wide">{event.month}</p>
                  <p className="text-[10px] text-gray-400">{event.year}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-maroon mb-3 leading-snug">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-5">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={15} className="text-saffron" /> {event.type}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={15} className="text-saffron" /> {event.location}
                  </p>
                </div>
                <button className="w-full bg-maroon text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-maroon-dark transition-colors">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}

          {/* View all card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-temple-gold-light/30 border border-temple-gold/30 rounded-2xl p-7 flex flex-col items-center justify-center text-center"
          >
            <CalendarDays size={40} className="text-saffron mb-4" />
            <h3 className="text-lg font-bold text-maroon mb-2">View All Events</h3>
            <p className="text-sm text-gray-600 mb-6">Explore all upcoming programs & activities</p>
            <a
              href="#events"
              className="border border-maroon text-maroon text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-maroon hover:text-white transition-colors"
            >
              Explore Events
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
