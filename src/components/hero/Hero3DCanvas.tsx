"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Generates an ultra-soft, high-resolution radial glow sprite texture.
 * Ensures luminous, silky bokeh particles without square pixel borders.
 */
function createSilkyGlowTexture(size = 128): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const center = size / 2;
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0.0, "rgba(255, 255, 255, 1.0)");
    gradient.addColorStop(0.18, "rgba(224, 231, 255, 0.95)");
    gradient.addColorStop(0.42, "rgba(129, 140, 248, 0.45)");
    gradient.addColorStop(0.7, "rgba(99, 102, 241, 0.12)");
    gradient.addColorStop(1.0, "rgba(99, 102, 241, 0.0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Respect reduced-motion preferences or mobile screens to guarantee smooth mobile scroll
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) {
      setIsSupported(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // WebGL support check
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl", { powerPreference: "high-performance" }) ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 4, 38);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    const glowTexture = createSilkyGlowTexture(128);

    // 2. Ambient & Subtle Colored Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const pointLightPurple = new THREE.PointLight(0x735ae5, 2.6, 65);
    pointLightPurple.position.set(-22, 12, 16);
    scene.add(pointLightPurple);

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 2.4, 65);
    pointLightCyan.position.set(22, -8, 16);
    scene.add(pointLightCyan);

    // Dynamic 3D Cursor Light that follows mouse interaction
    const cursor3DLight = new THREE.PointLight(0x9069fc, 3.2, 45);
    cursor3DLight.position.set(0, 0, 14);
    scene.add(cursor3DLight);

    // 3. Layer 1: Silky 3D Undulating Wave Grid with Flowing Contour Lines
    const cols = 52;
    const rows = 26;
    const totalPoints = cols * rows;

    const waveGeometry = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(totalPoints * 3);
    const waveBasePositions = new Float32Array(totalPoints * 3);
    const waveColors = new Float32Array(totalPoints * 3);

    const colorBrand = new THREE.Color("#735ae5");
    const colorCyan = new THREE.Color("#06b6d4");
    const colorViolet = new THREE.Color("#9069fc");
    const colorSoft = new THREE.Color("#818cf8");

    const spacingX = 1.85;
    const spacingZ = 1.65;
    const offsetX = ((cols - 1) * spacingX) / 2;
    const offsetZ = ((rows - 1) * spacingZ) / 2;

    let pIdx = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacingX - offsetX;
        const z = r * spacingZ - offsetZ - 3;
        const y = -8;

        wavePositions[pIdx * 3] = x;
        wavePositions[pIdx * 3 + 1] = y;
        wavePositions[pIdx * 3 + 2] = z;

        waveBasePositions[pIdx * 3] = x;
        waveBasePositions[pIdx * 3 + 1] = y;
        waveBasePositions[pIdx * 3 + 2] = z;

        const ratioX = c / cols;
        const ratioZ = r / rows;
        const pointColor = colorBrand.clone().lerp(colorCyan, ratioX).lerp(colorViolet, ratioZ * 0.5);

        waveColors[pIdx * 3] = pointColor.r;
        waveColors[pIdx * 3 + 1] = pointColor.g;
        waveColors[pIdx * 3 + 2] = pointColor.b;

        pIdx++;
      }
    }

    waveGeometry.setAttribute("position", new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute("color", new THREE.BufferAttribute(waveColors, 3));

    const waveMaterial = new THREE.PointsMaterial({
      size: 0.95,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const waveMesh = new THREE.Points(waveGeometry, waveMaterial);
    waveMesh.rotation.x = Math.PI * 0.14;
    scene.add(waveMesh);

    // Flowing horizontal wave contour lines connecting points along rows
    const totalLineSegments = rows * (cols - 1);
    const waveLinePositions = new Float32Array(totalLineSegments * 6);
    const waveLineColors = new Float32Array(totalLineSegments * 6);

    const waveLineGeometry = new THREE.BufferGeometry();
    waveLineGeometry.setAttribute("position", new THREE.BufferAttribute(waveLinePositions, 3));
    waveLineGeometry.setAttribute("color", new THREE.BufferAttribute(waveLineColors, 3));

    const waveLineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.24,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const waveLineMesh = new THREE.LineSegments(waveLineGeometry, waveLineMaterial);
    waveLineMesh.rotation.copy(waveMesh.rotation);
    scene.add(waveLineMesh);

    // 4. Layer 2: Soft Luminous Floating Stardust (Ambient Depth)
    const dustCount = 95;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 65;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 34;
      dustPositions[i * 3 + 2] = -12 - Math.random() * 24;

      const c = colorSoft.clone().lerp(colorCyan, Math.random());
      dustColors[i * 3] = c.r;
      dustColors[i * 3 + 1] = c.g;
      dustColors[i * 3 + 2] = c.b;
    }

    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute("color", new THREE.BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const dustMesh = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustMesh);

    // 5. Silky Spring-Damped Mouse Parallax Physics
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 6. Responsive Viewport Handler
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });

    resizeObserver.observe(container);

    // 7. Buttery 60 FPS Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const currentTime = performance.now();
      const elapsedTime = (currentTime - startTime) * 0.001;

      // Silky mouse lerping for gentle camera motion
      currentMouseX += (targetMouseX - currentMouseX) * 0.035;
      currentMouseY += (targetMouseY - currentMouseY) * 0.035;

      // Soft ambient camera parallax
      camera.position.x = currentMouseX * 3;
      camera.position.y = 4 - currentMouseY * 2;
      camera.lookAt(0, 0, 0);

      // 3D Cursor Light movement & dynamic chromatic glow
      cursor3DLight.position.set(currentMouseX * 25, -currentMouseY * 16, 14);

      // Projected cursor coords for interactive 3D wave ripples
      const cursorX3D = currentMouseX * 28;
      const cursorZ3D = currentMouseY * 18;

      // Animate 3D Undulating Particle Wave
      const wavePos = waveGeometry.attributes.position.array as Float32Array;
      const linePos = waveLineGeometry.attributes.position.array as Float32Array;
      const lineCol = waveLineGeometry.attributes.color.array as Float32Array;
      let pCount = 0;
      let lCount = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = pCount * 3;
          const baseX = waveBasePositions[idx];
          const baseY = waveBasePositions[idx + 1];
          const baseZ = waveBasePositions[idx + 2];

          // Harmonic wave elevation formula:
          // Subtle in the center, more expressive on the flanks
          const distFromCenter = Math.sqrt((baseX * 0.6) ** 2 + (baseZ * 0.8) ** 2);
          const flankAmp = Math.min(1.4, Math.max(0.15, (distFromCenter - 6) / 10));

          const waveY =
            Math.sin(baseX * 0.16 + elapsedTime * 1.1) * 1.5 * flankAmp +
            Math.cos(baseZ * 0.18 + elapsedTime * 0.85) * 1.2 * flankAmp;

          // Interactive cursor ripple disturbance
          const distToCursor = Math.hypot(baseX - cursorX3D, baseZ - cursorZ3D);
          const cursorRipple =
            distToCursor < 12
              ? Math.sin(distToCursor * 0.7 - elapsedTime * 3.5) *
                (1 - distToCursor / 12) *
                2.2
              : 0;

          const currentY = baseY + waveY + cursorRipple;
          wavePos[idx + 1] = currentY;

          // Build line segment between horizontal neighbors along each row
          if (c < cols - 1) {
            const nextIdx = (pCount + 1) * 3;
            const nextBaseX = waveBasePositions[nextIdx];
            const nextBaseY = waveBasePositions[nextIdx + 1];
            const nextBaseZ = waveBasePositions[nextIdx + 2];

            const nextDistFromCenter = Math.sqrt((nextBaseX * 0.6) ** 2 + (nextBaseZ * 0.8) ** 2);
            const nextFlankAmp = Math.min(1.4, Math.max(0.15, (nextDistFromCenter - 6) / 10));
            const nextWaveY =
              Math.sin(nextBaseX * 0.16 + elapsedTime * 1.1) * 1.5 * nextFlankAmp +
              Math.cos(nextBaseZ * 0.18 + elapsedTime * 0.85) * 1.2 * nextFlankAmp;
            const nextDistToCursor = Math.hypot(nextBaseX - cursorX3D, nextBaseZ - cursorZ3D);
            const nextCursorRipple =
              nextDistToCursor < 12
                ? Math.sin(nextDistToCursor * 0.7 - elapsedTime * 3.5) *
                  (1 - nextDistToCursor / 12) *
                  2.2
                : 0;
            const nextY = nextBaseY + nextWaveY + nextCursorRipple;

            const lIdx = lCount * 6;
            linePos[lIdx] = baseX;
            linePos[lIdx + 1] = currentY;
            linePos[lIdx + 2] = baseZ;

            linePos[lIdx + 3] = nextBaseX;
            linePos[lIdx + 4] = nextY;
            linePos[lIdx + 5] = nextBaseZ;

            // Gradient line color matching points
            const rCol = waveColors[idx];
            const gCol = waveColors[idx + 1];
            const bCol = waveColors[idx + 2];

            lineCol[lIdx] = rCol;
            lineCol[lIdx + 1] = gCol;
            lineCol[lIdx + 2] = bCol;

            lineCol[lIdx + 3] = rCol;
            lineCol[lIdx + 4] = gCol;
            lineCol[lIdx + 5] = bCol;

            lCount++;
          }

          pCount++;
        }
      }
      waveGeometry.attributes.position.needsUpdate = true;
      waveLineGeometry.attributes.position.needsUpdate = true;
      waveLineGeometry.attributes.color.needsUpdate = true;

      dustMesh.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);

      if (isVisible) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Pause WebGL rendering loop when hero is scrolled out of view
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        if (inView && !isVisible) {
          isVisible = true;
          animationFrameId = requestAnimationFrame(animate);
        } else if (!inView && isVisible) {
          isVisible = false;
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = 0;
          }
        }
      },
      { threshold: 0.02 }
    );
    visibilityObserver.observe(container);

    animate();

    // 8. Cleanup on Unmount
    return () => {
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      glowTexture.dispose();
      waveGeometry.dispose();
      waveMaterial.dispose();
      waveLineGeometry.dispose();
      waveLineMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!isSupported) {
    return (
      <div className="absolute inset-0 pointer-events-none hero-glow-radial opacity-40" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-90 z-0 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,transparent_18%,black_65%)]"
      aria-hidden="true"
    />
  );
}
