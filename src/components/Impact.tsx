// import {
//     Users,
//     HeartHandshake,
//     CalendarDays,
//     Award,
// } from "lucide-react";

// import { motion } from "framer-motion";

// export default function Impact() {
//     const stats = [
//         {
//             icon: <Award size={42} />,
//             number: "6+",
//             title: "Years of Service",
//         },
//         {
//             icon: <CalendarDays size={42} />,
//             number: "100+",
//             title: "Events Conducted",
//         },
//         {
//             icon: <Users size={42} />,
//             number: "30+",
//             title: "Students",
//         },
//         {
//             icon: <HeartHandshake size={42} />,
//             number: "50+",
//             title: "Volunteers",
//         },
//     ];

//     return (
//         <section className="relative bg-[#FFF8F0] py-24 overflow-hidden">
//             {/* Decorative Background */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">

//                 <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

//                 <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8B1A1A]/10 rounded-full blur-3xl"></div>

//                 <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

//             </div>
//             {/* Background Glow */}
//             <div className="absolute -top-24 left-0 w-72 h-72 bg-[#D4A017]/10 rounded-full blur-3xl"></div>

//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B1A1A]/10 rounded-full blur-3xl"></div>

//             <div className="relative max-w-7xl mx-auto px-6">

//                 {/* Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center mb-20"
//                 >
//                     <p className="text-[#D4A017] font-semibold tracking-widest uppercase">
//                         Our Journey
//                     </p>

//                     <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#8B1A1A]">
//                         Our Impact at a Glance
//                     </h2>

//                     <div className="w-28 h-1.5 bg-[#D4A017] mx-auto mt-5 rounded-full"></div>

//                     <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
//                         Celebrating decades of preserving culture, serving society,
//                         and empowering communities through dedication and unity.
//                     </p>
//             </motion.div>

//             {/* Cards */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {stats.map((item, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                             duration: 0.6,
//                             delay: index * 0.15,
//                         }}
//                         className="
//       bg-white/90
//       backdrop-blur-md
//       border border-[#D4A017]/20
//       rounded-3xl
//       shadow-xl
//       p-8
//       text-center
//       hover:-translate-y-3
//       hover:shadow-2xl
//       transition-all
//       duration-500
//     "
//                     >
//                         <div className="flex justify-center mb-5 text-[#8B1A1A]">
//                             {item.icon}
//                         </div>

//                         <h3 className="text-5xl font-bold text-[#D4A017]">
//                             {item.number}
//                         </h3>

//                         <p className="mt-4 text-[#8B1A1A] font-semibold text-lg">
//                             {item.title}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>

//         </div>
//         </section >
//     );
// }