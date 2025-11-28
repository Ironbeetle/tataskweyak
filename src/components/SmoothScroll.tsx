'use client'
import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const isMobile = window.innerWidth <= 768; // Or use a proper hook for this

  if (isMobile) {
    return <>{children}</>;
  }
  const scrollRef = useRef<HTMLDivElement>(null)
  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current)
    }
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping: 18, mass: 0.8, stiffness: 100 }
  const spring = useSpring(transform, physics)
  
  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="fixed top-0 left-0 w-full min-h-screen will-change-transform"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}

export default SmoothScroll