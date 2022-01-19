import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

type ObserverParams = {
	target?: MutableRefObject<undefined | null>
	onIntersect: () => void
	enabled?: boolean | undefined
	threshold?: IntersectionObserverInit['threshold']
	rootMargin?: IntersectionObserverInit['rootMargin']
	root?: IntersectionObserverInit['root']
}

export const useIntersectionObserver = ({
	target,
	onIntersect,
	threshold = 0,
	rootMargin = '20px',
	enabled = true,
	root,
}: ObserverParams) => {
	useEffect(() => {
		if (!enabled) {
			return
		}

		const observer = new IntersectionObserver(
			(entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
			{
				root,
				rootMargin,
				threshold,
			},
		)

		const el = target && target.current

		if (!el) {
			return
		}

		observer.observe(el)

		return () => {
			observer.unobserve(el)
		}
	}, [target, onIntersect, enabled, root, rootMargin, threshold])
}

export default useIntersectionObserver
