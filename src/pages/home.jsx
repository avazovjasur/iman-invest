import { useState, useEffect } from 'react';

import NavBar from "@/components/Navbar";
import HomeInner from "@/components/HomeInner";
import ProjectsInner from "@/components/ProjectsInner";
import OnBoarding from "@/components/OnBoarding";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOnBoardingVisible, setIsOnBoardingVisible] = useState(false);

  useEffect(() => {
    const hasSeenOnBoarding = localStorage.getItem('hasSeenOnBoarding');

    if (!hasSeenOnBoarding) {
      setIsOnBoardingVisible(true);
      localStorage.setItem('hasSeenOnBoarding', 'true');
    }
  }, []);

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
    <div className='wrapper'>
      {activeIndex === 0 && <HomeInner />}
      {activeIndex === 1 && <ProjectsInner />}
      <NavBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {isOnBoardingVisible && <OnBoarding onClose={handleOnBoardingClose} />}
    </div>
  );
};

export default Home;