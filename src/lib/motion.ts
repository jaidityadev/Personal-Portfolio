import type { Transition } from "framer-motion";

/**
 * Motion system.
 *
 * Apple describes springs with two designer-facing parameters instead of the
 * physics triplet: `damping ratio` (overshoot) and `response` (how quickly the
 * value reaches its target, in seconds). Framer Motion's `bounce` + `duration`
 * spring API maps onto those almost one-to-one:
 *
 *   damping 1.0  -> bounce 0    (critically damped, no overshoot)
 *   damping 0.8  -> bounce ~0.2 (slight overshoot)
 *   response     -> duration
 *
 * House rule: critically damped everywhere by default. Bounce is reserved for
 * motion the user physically threw — a flick, a drag release, a swipe.
 */

/** Default for anything that just moves or appears. No overshoot. */
export const springUI = {
  type: "spring",
  bounce: 0,
  duration: 0.4,
} as const satisfies Transition;

/** Small, frequent movement (hover lift, nav pill, icon nudge). */
export const springSnappy = {
  type: "spring",
  bounce: 0,
  duration: 0.28,
} as const satisfies Transition;

/** Follows a gesture that carried momentum. Earns its overshoot. */
export const springMomentum = {
  type: "spring",
  bounce: 0.2,
  duration: 0.4,
} as const satisfies Transition;

/** Drawer / sheet: Apple ships damping 0.8, response 0.3 here. */
export const springSheet = {
  type: "spring",
  bounce: 0.22,
  duration: 0.32,
} as const satisfies Transition;

/** Reduced-motion equivalent: a short cross-fade, no travel, no overshoot. */
export const crossFade = {
  duration: 0.2,
  ease: "easeOut",
} as const satisfies Transition;

/**
 * Where a flick would come to rest, using the same exponential-decay model as
 * scroll deceleration (from Apple's "Designing Fluid Interfaces" sample code).
 *
 * Note this is deliberately not the textbook v^2/(2a) — that lands short and
 * makes flicks feel weak.
 *
 * @param initialVelocity release velocity in px/s
 * @param decelerationRate 0.998 for normal scroll feel, 0.99 for snappier
 */
export function project(initialVelocity: number, decelerationRate = 0.998) {
  return (
    ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate)
  );
}

/**
 * Progressive resistance past a boundary. A hard stop reads as frozen; this
 * reads as "still responding, but there's nothing more here."
 *
 * @param overshoot how far past the bound the pointer has travelled
 * @param dimension the size of the surface being dragged
 */
export function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  return (
    (overshoot * dimension * constant) /
    (dimension + constant * Math.abs(overshoot))
  );
}

/** Snap target nearest a projected resting point. */
export function nearestSnapPoint(value: number, points: number[]) {
  return points.reduce((closest, p) =>
    Math.abs(p - value) < Math.abs(closest - value) ? p : closest
  );
}
