import { useState, useEffect } from 'react';

import NavBar from "@/components/Navbar";
import HomeInner from "@/components/HomeInner";
import ProjectsInner from "@/components/ProjectsInner";
import OnBoarding from "@/components/OnBoarding";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOnBoardingVisible, setIsOnBoardingVisible] = useState(true);

  useEffect(() => {
    if (isOnBoardingVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOnBoardingVisible]);

  const handleOnBoardingClose = () => {
    setIsOnBoardingVisible(false);
  };

  return (
    <>
      {activeIndex === 0 && <HomeInner />}
      {activeIndex === 1 && <ProjectsInner />}
      <NavBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {isOnBoardingVisible && <OnBoarding onClose={handleOnBoardingClose} />}
    </>
  );
};

export default Home;
