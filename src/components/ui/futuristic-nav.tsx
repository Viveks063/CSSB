"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface NavItem {
  id: number;
  label: string;
  href: string;
}

const items: NavItem[] = [
  { id: 0, label: "Home", href: "#home" },
  { id: 1, label: "Events", href: "#events" },
  { id: 2, label: "Donate", href: "#donate" },
  { id: 3, label: "Join Us", href: "#volunteer" },
  { id: 4, label: "About", href: "#about" },
  { id: 5, label: "Contact", href: "#contact" },
];

const LumaBar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative flex items-center justify-center gap-6 bg-white/20 dark:bg-black/20 backdrop-blur-2xl rounded-full px-6 py-3 shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">

        {/* Active Indicator Glow */}
        <motion.div
          layoutId="active-indicator"
          className="absolute w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl -z-10"
          animate={{
            left: `calc(${active * (100 / items.length)}% + ${100 / items.length / 2}%)`,
            translateX: "-50%",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />

        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <motion.div key={item.id} className="relative flex flex-col items-center group">
              {/* Button */}
              <motion.a
                href={item.href}
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.2 }}
                animate={{ scale: isActive ? 1.4 : 1 }}
                className="flex items-center justify-center px-3 h-14 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10 whitespace-nowrap"
              >
                {item.label}
              </motion.a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LumaBar;
