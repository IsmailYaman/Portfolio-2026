import { useEffect } from 'react'
import { useMotionValue, useTransform, type MotionValue } from 'motion/react'

interface UseMouseParallaxOptions {
  /** Intensity of the parallax effect (default: 20) */
  intensity?: number
  /** Whether the effect should be inverted (default: false) */
  inverted?: boolean
}

interface UseMouseParallaxReturn {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  x: MotionValue<number>
  y: MotionValue<number>
}

/**
 * Hook for creating mouse-based parallax effects
 * @param options Configuration options for the parallax effect
 * @returns Motion values for mouse position and transformed parallax values
 */
export function useMouseParallax(
  options: UseMouseParallaxOptions = {}
): UseMouseParallaxReturn {
  const { intensity = 20, inverted = false } = options

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const range = inverted ? [intensity, -intensity] : [-intensity, intensity]

  const x = useTransform(mouseX, [-1, 1], range)
  const y = useTransform(mouseY, [-1, 1], range)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Normalize to -1 to 1
      const normalizedX = (clientX / innerWidth) * 2 - 1
      const normalizedY = (clientY / innerHeight) * 2 - 1

      mouseX.set(normalizedX)
      mouseY.set(normalizedY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return { mouseX, mouseY, x, y }
}
