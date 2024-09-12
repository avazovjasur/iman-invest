import { useState } from 'react';

import NavBar from "@/components/Navbar"
import HomeInner from "@/components/HomeInner"
import ProjectsInner from "@/components/ProjectsInner"
import OnBoarding from "@/components/OnBoarding"

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return <>
    {activeIndex === 0 && <HomeInner />}
    {activeIndex === 1 && <ProjectsInner />}
    <NavBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    <OnBoarding />
  </>
}

export default Home