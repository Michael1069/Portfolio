import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set initial canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    const japaneseChars = "私はアビラシャ・モダックが大好きです";
    const fontSize = 20;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops = Array(columns).fill(0);
    let animationFrameId;

    // Setup resize listener
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Main draw function
    const draw = () => {
      // Background fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text + glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#f43f5e";
      ctx.fillStyle = "#f43f5e";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = japaneseChars[Math.floor(Math.random() * japaneseChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop when it reaches bottom randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.8; // controls fall speed
      }
    };

    // Animation loop
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-50"
    />
  );
};

export default MatrixBackground;
