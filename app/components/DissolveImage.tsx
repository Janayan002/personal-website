"use client";
import Image from "next/image";
import { useState, useRef, useEffect, useId } from "react";

interface DissolveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Max displacement scale on hover. Higher = more dissolve. */
  intensity?: number;
}

export default function DissolveImage({
  src,
  alt,
  width,
  height,
  className,
  intensity = 12,
}: DissolveImageProps) {
  const [hovered, setHovered] = useState(false);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const scaleRef = useRef(0);

  // useId gives a stable, unique id so multiple instances don't share a filter.
  const filterId = `dissolve-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const target = hovered ? intensity : 0;

    const animate = () => {
      const current = scaleRef.current;
      const next = current + (target - current) * 0.18;
      scaleRef.current = next;
      dispRef.current?.setAttribute("scale", String(next));

      if (Math.abs(target - next) > 0.05) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        scaleRef.current = target;
        dispRef.current?.setAttribute("scale", String(target));
      }
    };

    if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [hovered, intensity]);

  return (
    <div
      className="block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter
          id={filterId}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ filter: `url(#${filterId})` }}
      />
    </div>
  );
}
