"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { FileText, Menu } from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { crossFade, project, springSheet } from "@/lib/motion";

const PANEL_WIDTH = 320;
/** Past this projected resting point, the flick counts as a dismissal. */
const DISMISS_THRESHOLD = PANEL_WIDTH * 0.4;

interface NavItem {
  name: string;
  path: string;
}

export default function MobileNav({
  navItems,
  pathname,
  resumeUrl,
}: {
  navItems: NavItem[];
  pathname: string;
  resumeUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [exitVelocity, setExitVelocity] = useState(0);
  const reduced = useReducedMotion();

  /*
   * One motion value drives the whole sheet. The panel is glued to it, and
   * the scrim reads from it, so the background dims 1:1 with the finger
   * during a drag and stays in sync through the release spring too — there
   * is no separate "dismiss animation" that could drift out of step.
   */
  const x = useMotionValue(PANEL_WIDTH);
  const scrimOpacity = useTransform(x, [0, PANEL_WIDTH], [1, 0]);
  const scrimBlur = useTransform(x, [0, PANEL_WIDTH], ["blur(8px)", "blur(0px)"]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    // Land where the gesture is going, not where the finger left off.
    const projected = x.get() + project(info.velocity.x);

    // Either way the release velocity is handed to the spring, so there is no
    // seam between dragging and animating.
    if (projected > DISMISS_THRESHOLD) {
      setExitVelocity(info.velocity.x);
      setOpen(false);
    } else {
      // Right of the panel is deliberately unconstrained so a dismiss drag
      // tracks the finger 1:1 — which means settling back open is ours to do.
      animate(x, 0, { ...springSheet, velocity: info.velocity.x });
    }
  };

  const handleOpenChange = (next: boolean) => {
    // A velocity left over from the last flick must not be inherited by the
    // next open, or the sheet enters being shoved back out.
    if (next) setExitVelocity(0);
    setOpen(next);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-40 bg-background/60"
                style={
                  reduced
                    ? undefined
                    : { opacity: scrimOpacity, backdropFilter: scrimBlur }
                }
                initial={reduced ? { opacity: 0 } : undefined}
                animate={reduced ? { opacity: 1 } : undefined}
                exit={reduced ? { opacity: 0 } : undefined}
                transition={crossFade}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="material-panel fixed inset-y-0 right-0 z-50 flex w-[320px] max-w-[85vw] flex-col border-l border-border p-6"
                style={reduced ? undefined : { x }}
                initial={reduced ? { opacity: 0 } : { x: PANEL_WIDTH }}
                animate={reduced ? { opacity: 1 } : { x: 0 }}
                exit={reduced ? { opacity: 0 } : { x: PANEL_WIDTH }}
                transition={
                  reduced
                    ? crossFade
                    : { ...springSheet, velocity: exitVelocity }
                }
                drag={reduced ? false : "x"}
                dragConstraints={{ left: 0 }}
                /* Resistance past the open edge instead of a hard stop. */
                dragElastic={0.55}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
              >
                <Dialog.Title className="sr-only">Navigation</Dialog.Title>

                {/* Grab handle: says "this is draggable" before anyone tries. */}
                <div
                  aria-hidden
                  className="absolute left-2 top-1/2 h-12 w-1 -translate-y-1/2 rounded-full bg-foreground/15"
                />

                <nav className="mt-10 flex flex-col gap-1">
                  {navItems.map((item) => {
                    const active = pathname === item.path;
                    return (
                      <Dialog.Close asChild key={item.path}>
                        <Link
                          href={item.path}
                          className={`pressable rounded-lg px-3 py-2.5 text-lg transition-colors ${
                            active
                              ? "vibrant bg-foreground/[0.06] font-medium"
                              : "text-foreground/60 hover:text-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </Dialog.Close>
                    );
                  })}

                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-lg text-foreground/60 transition-colors hover:text-foreground"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </nav>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
