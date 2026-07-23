"use client";
import { useEffect } from "react";

/** Runs the ported vanilla interaction modules once, after the markup mounts. */
export default function Interactions() {
  useEffect(() => {
    let active = true;
    import("../lib/effects/init").then((m) => {
      if (active) m.initAll();
    });
    return () => {
      active = false;
    };
  }, []);
  return null;
}
