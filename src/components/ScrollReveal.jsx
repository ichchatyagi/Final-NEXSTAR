import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Wraps child elements and animates them cleanly as they scroll into view.
 * Uses native IntersectionObserver for extreme performance and React 19 safety.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = '',
  triggerOnce = true
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if browser supports IntersectionObserver
    if (!window.IntersectionObserver) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          // If triggerOnce is false, reset when out of view
          setIsRevealed(false);
        }
      },
      {
        threshold,
        // Trigger slightly before appearing in the viewport for smoother feeling
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(el);

    return () => {
      if (el && triggerOnce) {
        observer.unobserve(el);
      } else {
        observer.disconnect();
      }
    };
  }, [threshold, triggerOnce]);

  const getTransitionStyle = () => {
    return {
      transitionDuration: `${duration}s`,
      transitionDelay: `${delay}s`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' // Sleek Apple-style ease-out curve
    };
  };

  const getDirectionClasses = () => {
    if (isRevealed) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }

    switch (direction) {
      case 'left':
        return 'opacity-0 -translate-x-16 scale-98 pointer-events-none';
      case 'right':
        return 'opacity-0 translate-x-16 scale-98 pointer-events-none';
      case 'down':
        return 'opacity-0 -translate-y-16 pointer-events-none';
      case 'fade':
        return 'opacity-0 pointer-events-none';
      case 'up':
      default:
        return 'opacity-0 translate-y-16 scale-98 pointer-events-none';
    }
  };

  return (
    <div
      ref={ref}
      style={getTransitionStyle()}
      className={`transition-all ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
