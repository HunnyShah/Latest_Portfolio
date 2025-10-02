"use client";

import { useEffect } from "react";

const ScrollbarAutoHide = () => {
  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const showScrollbar = () => {
      document.body.classList.add("scrolling");

      // Clear existing timeout
      clearTimeout(hideTimeout);

      // Hide scrollbar after 5 seconds of inactivity
      hideTimeout = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, 5000);
    };

    const handleScroll = () => {
      showScrollbar();
    };

    const handleMouseMove = () => {
      showScrollbar();
    };

    const handleMouseLeave = () => {
      // Hide after 2 seconds when mouse leaves the window
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, 2000);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
    });

    // Initial show for 5 seconds, then hide
    showScrollbar();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(hideTimeout);
    };
  }, []);

  return null;
};

export default ScrollbarAutoHide;
