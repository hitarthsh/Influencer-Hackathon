import React, { useEffect, useRef, useState } from "react";

// Customization
const COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#A66CFF"];
const SPLASH_SIZE = 96; // px
const SPLASH_DURATION = 700; // ms
const FOLLOWER_SIZE = 40; // px
const COLOR_CYCLE_SPEED = 0.002; // lower is slower
const TRAIL_LENGTH = 7; // Number of trailing ghosts
const TRAIL_OPACITY = 0.13; // Opacity of the last ghost
const FOLLOWER_LERP = 0.32; // Higher = smoother

function lerp(a, b, n) {
  return a + (b - a) * n;
}

const SplashCursor = () => {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState(
    Array(TRAIL_LENGTH).fill({ x: -100, y: -100 })
  );
  const [splashes, setSplashes] = useState([]);
  const splashId = useRef(0);
  const colorCycle = useRef(0);
  const [followerColor, setFollowerColor] = useState(COLORS[0]);
  const [pulse, setPulse] = useState(1);

  // Track mouse
  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Smooth follower and trailing ghosts
  useEffect(() => {
    let frame;
    function animate() {
      setFollower((prev) => ({
        x: lerp(prev.x, mouse.x, FOLLOWER_LERP),
        y: lerp(prev.y, mouse.y, FOLLOWER_LERP),
      }));
      setTrail((prev) => {
        const newTrail = [...prev];
        for (let i = newTrail.length - 1; i > 0; i--) {
          newTrail[i] = { ...newTrail[i - 1] };
        }
        newTrail[0] = { ...follower };
        return newTrail;
      });
      // Animate color
      colorCycle.current += COLOR_CYCLE_SPEED;
      const idx = Math.floor(colorCycle.current) % COLORS.length;
      const nextIdx = (idx + 1) % COLORS.length;
      const t = colorCycle.current % 1;
      function hexToRgb(hex) {
        const m = hex.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
        return m
          ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
          : [0, 0, 0];
      }
      function rgbToHex([r, g, b]) {
        return `#${r.toString(16).padStart(2, "0")}${g
          .toString(16)
          .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      }
      const rgbA = hexToRgb(COLORS[idx]);
      const rgbB = hexToRgb(COLORS[nextIdx]);
      const rgb = [
        Math.round(lerp(rgbA[0], rgbB[0], t)),
        Math.round(lerp(rgbA[1], rgbB[1], t)),
        Math.round(lerp(rgbA[2], rgbB[2], t)),
      ];
      setFollowerColor(rgbToHex(rgb));
      // Pulse
      setPulse(0.98 + 0.04 * Math.sin(Date.now() / 320));
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [mouse, follower]);

  // Splash on click
  useEffect(() => {
    const click = (e) => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      setSplashes((s) => [
        ...s,
        {
          id: splashId.current++,
          x: e.clientX,
          y: e.clientY,
          color,
          rot: Math.random() * 360,
          scale: 0.9 + Math.random() * 0.5,
        },
      ]);
    };
    window.addEventListener("mousedown", click);
    return () => window.removeEventListener("mousedown", click);
  }, []);

  // Remove splash after animation
  useEffect(() => {
    if (!splashes.length) return;
    const timeout = setTimeout(() => {
      setSplashes((s) => s.slice(1));
    }, SPLASH_DURATION);
    return () => clearTimeout(timeout);
  }, [splashes]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Follower and trailing ghosts */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        {trail.map((ghost, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: ghost.x - FOLLOWER_SIZE / 2,
              top: ghost.y - FOLLOWER_SIZE / 2,
              width: FOLLOWER_SIZE,
              height: FOLLOWER_SIZE,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, ${followerColor}bb, transparent 70%)`,
              boxShadow: `0 0 24px 6px ${followerColor}22`,
              mixBlendMode: "lighten",
              pointerEvents: "none",
              opacity: ((i + 1) / (trail.length + 1)) * TRAIL_OPACITY,
              filter: `blur(${1 + i * 0.7}px)`,
              transition: "box-shadow 0.2s, background 0.2s, opacity 0.2s",
              transform: `scale(${1 - i * 0.07})`,
            }}
          />
        ))}
        {/* Main follower with pulse */}
        <div
          style={{
            position: "absolute",
            left: follower.x - FOLLOWER_SIZE / 2,
            top: follower.y - FOLLOWER_SIZE / 2,
            width: FOLLOWER_SIZE,
            height: FOLLOWER_SIZE,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, ${followerColor}cc, transparent 70%)`,
            boxShadow: `0 0 32px 8px ${followerColor}55`,
            mixBlendMode: "lighten",
            pointerEvents: "none",
            transition:
              "box-shadow 0.2s, background 0.2s, transform 0.18s cubic-bezier(.22,1,.36,1)",
            transform: `scale(${pulse})`,
          }}
        />
        {/* Splashes */}
        {splashes.map((splash) => (
          <span
            key={splash.id}
            style={{
              position: "absolute",
              left: splash.x - SPLASH_SIZE / 2,
              top: splash.y - SPLASH_SIZE / 2,
              width: SPLASH_SIZE,
              height: SPLASH_SIZE,
              borderRadius: "50%",
              background: `radial-gradient(circle at 40% 40%, ${splash.color}cc, transparent 70%)`,
              pointerEvents: "none",
              animation: `splash-cursor-pop ${SPLASH_DURATION}ms cubic-bezier(.22,1,.36,1)`,
              zIndex: 10000,
              filter: "blur(2.5px)",
              transform: `rotate(${splash.rot}deg) scale(${splash.scale})`,
            }}
          />
        ))}
      </div>
      {/* Keyframes */}
      <style>{`
        @keyframes splash-cursor-pop {
          0% { opacity: 0.95; transform: scale(0.7) rotate(var(--splash-rot, 0deg)); filter: blur(1.5px); }
          60% { opacity: 0.7; transform: scale(1.2) rotate(var(--splash-rot, 0deg)); filter: blur(3px); }
          100% { opacity: 0; transform: scale(2.1) rotate(var(--splash-rot, 0deg)); filter: blur(6px); }
        }
      `}</style>
    </>
  );
};

export default SplashCursor;
