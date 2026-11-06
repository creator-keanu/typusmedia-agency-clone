import { useEffect } from "react";
import { useLocation, useRouter } from "@tanstack/react-router";

export function SiteMotion() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const router = useRouter();

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

  // Clicked internal links float up and out of view before navigating.
  useEffect(() => {
    let busy = false;
    const onClick = (event: MouseEvent) => {
      if (busy || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // filters / same page stay instant
      event.preventDefault();
      event.stopPropagation();
      busy = true;

      const rect = link.getBoundingClientRect();
      const ghost = link.cloneNode(true) as HTMLElement;
      Object.assign(ghost.style, {
        position: "fixed", left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`,
        margin: "0", zIndex: "9999", pointerEvents: "none", boxSizing: "border-box",
      });
      document.body.appendChild(ghost);
      link.style.visibility = "hidden";
      const distance = rect.bottom + 80;
      const animation = ghost.animate([
        { transform: "translateY(0) scale(1) rotate(0deg)", opacity: 1, filter: "blur(0)" },
        { transform: "translateY(-12px) scale(1.06) rotate(-1deg)", opacity: 1, offset: 0.2 },
        { transform: `translateY(-${distance}px) scale(0.85) rotate(-4deg)`, opacity: 0, filter: "blur(6px)" },
      ], { duration: 750, easing: "cubic-bezier(0.55, 0, 0.3, 1)", fill: "forwards" });
      animation.onfinish = () => {
        router.history.push(url.pathname + url.search + url.hash);
        requestAnimationFrame(() => { ghost.remove(); link.style.visibility = ""; busy = false; });
      };
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
