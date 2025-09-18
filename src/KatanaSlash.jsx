import React, { useEffect, useRef, useState } from "react";

const KatanaSlash = () => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Array to store slashes
    let slashes = [];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and fade existing slashes
      slashes = slashes.filter((slash) => {
        ctx.strokeStyle = `rgba(255, 0, 0, ${slash.alpha})`; // neon red
        ctx.lineWidth = 3;
        ctx.shadowColor = "red";
        ctx.shadowBlur = 20;

        ctx.beginPath();
        ctx.moveTo(slash.x1, slash.y1);
        ctx.lineTo(slash.x2, slash.y2);
        ctx.stroke();

        // Fade out
        slash.alpha -= 0.02;
        return slash.alpha > 0;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleDown = (e) => {
      setIsDragging(true);
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMove = (e) => {
      if (!isDragging) return;
      const newPos = { x: e.clientX, y: e.clientY };

      // Add new slash segment
      const slash = {
        x1: lastPos.current.x,
        y1: lastPos.current.y,
        x2: newPos.x,
        y2: newPos.y,
        alpha: 1, // full opacity
      };
      slashes.push(slash);

      // --- Collision detection with sliceable boxes ---
      const elements = document.querySelectorAll("[data-sliceable]");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        const intersects =
          Math.max(slash.x1, slash.x2) >= rect.left &&
          Math.min(slash.x1, slash.x2) <= rect.right &&
          Math.max(slash.y1, slash.y2) >= rect.top &&
          Math.min(slash.y1, slash.y2) <= rect.bottom;

        if (intersects) {
          window.dispatchEvent(
            new CustomEvent("katana-slice", {
              detail: { targetBox: el.dataset.key },
            })
          );
        }
      });

      lastPos.current = newPos;
    };

    const handleUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [isDragging]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // don’t block UI
        zIndex: 50, // on top of everything
      }}
    />
  );
};

export default KatanaSlash;
