/**
 * Motion tokens.
 *
 * Apple parameterizes springs as *damping ratio* + *response*; Motion's spring
 * API takes `bounce` + `duration`, which maps onto it directly:
 *
 *   damping 1.0 (critically damped) -> bounce 0
 *   damping ~0.8 (slight overshoot) -> bounce ~0.2
 *   response (seconds)              -> duration
 *
 * Springs rather than fixed-duration easing because springs animate from the
 * current on-screen value and stay interruptible — a tween restarts from its
 * target and visibly jumps when something re-triggers mid-flight.
 *
 * Default to critically damped. Overshoot is reserved for motion the user
 * physically started (a flick, a drag release); on something that merely
 * appeared it reads as noise.
 */
export const spring = {
  /** Everyday UI: reveals, repositions, page enters. damping 1.0 / response 0.4 */
  default: { type: "spring" as const, bounce: 0, duration: 0.4 },
  /** Small chrome that should feel immediate. damping 1.0 / response 0.3 */
  snappy: { type: "spring" as const, bounce: 0, duration: 0.3 },
  /** Only after momentum — flicks and drag releases. damping ~0.8 / response 0.4 */
  momentum: { type: "spring" as const, bounce: 0.2, duration: 0.4 },
};

/**
 * Reduced-motion equivalent: keep the part that aids comprehension (opacity),
 * drop the part that moves the user's world (translation, overshoot).
 */
export const crossFade = { duration: 0.2, ease: "easeOut" as const };
