import React from 'react'
import RecentProjects from '@/components/RecentProjects'
import Hero from '@/components/Hero'

function HomePage() {
  return (
    <div className="relative homepage flex flex-wrap-reverse md:flex-row lg:h-[100svh] md:h-[100svh] lg:w-[calc(100svw-6rem)] md:w-[calc(100svw-5rem)] justify-between">
      <RecentProjects />
      <Hero />
    </div>
  );
}

export default HomePage