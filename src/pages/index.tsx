import React from 'react'
import RecentProjects from '@/components/RecentProjects'
import Hero from '@/components/Hero'
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 , x: -10}}
      animate={{ opacity: 1 , x:0}}
      exit={{opacity: 0}}
      transition={{ duration: 1 }}
      className="relative homepage flex flex-wrap-reverse md:flex-row lg:h-[100svh] md:h-[100svh] lg:w-[calc(100svw-6rem)] md:w-[calc(100svw-5rem)] justify-between"
    >
      <RecentProjects />
      <Hero />
    </motion.div>
  );
}

export default HomePage