import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function SiteMotion() {
  const pathname = useLocation({ select: (location) => location.pathname });
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enterClass = reduced ? "reveal-fade" : "reveal-enter";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(enterClass);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll("main section, main article, footer > div").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}