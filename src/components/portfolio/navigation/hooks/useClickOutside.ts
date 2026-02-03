import { useEffect, type RefObject } from 'react'

/**
 * Hook that detects clicks outside a referenced element.
 * Useful for closing dropdowns, modals, or any dismissible UI when clicking outside.
 *
 * @param ref - React ref object pointing to the element to monitor
 * @param handler - Callback function to execute when a click outside is detected
 *
 * @example
 * ```tsx
 * const dropdownRef = useRef<HTMLDivElement>(null)
 * useClickOutside(dropdownRef, () => setIsOpen(false))
 * ```
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside, { passive: true })
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, handler])
}
