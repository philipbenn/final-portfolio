import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleTouch = () => setIsTouchDevice(true);
    const handleMouse = () => setIsTouchDevice(false);

    // Listen to initial device interaction
    window.addEventListener("touchstart", handleTouch, { once: true });
    window.addEventListener("mousemove", handleMouse, { once: true });

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-4px, -4px)",
        width: "16px",
        height: "24px",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FFF"
          stroke="#3B638A"
          strokeWidth="2"
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
        ></path>
      </svg>
    </div>
  );
}
