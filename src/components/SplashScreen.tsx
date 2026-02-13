import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 500); // Match animation duration
    }, 2000); // Display splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-500 z-50 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="animate-pulse">
        <Logo size="large" dark={true} />
      </div>
    </div>
  );
};

export default SplashScreen;
