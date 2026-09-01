import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!cursor || !hasFinePointer) {
      return;
    }
    document.documentElement.classList.add("custom-cursor-enabled");

    function handlePointerMove(event: PointerEvent) {
      if (!cursor) {
        return;
      }

      cursor.style.transform = `
        translate3d(${event.clientX}px, ${event.clientY}px, 0)
        translate(-50%, -50%)
      `;

      cursor.dataset.visible = "true";
    }

    function handlePointerOver(event: PointerEvent) {
      if (!cursor) {
        return;
      }

      const target = event.target;

      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest("a, button"));

      cursor.dataset.interactive = String(isInteractive);
    }

    function handlePointerLeave() {
      if (cursor) {
        cursor.dataset.visible = "false";
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {

        document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    />
  );
}