type LogoProps = {
  className?: string;
  variant?: "gold" | "light";
};

export function Logo({ className, variant = "gold" }: LogoProps) {
  const ring = variant === "gold" ? "#b3892f" : "#f4e3b8";
  const word = variant === "gold" ? "#b3892f" : "#f4e3b8";
  const frond = variant === "gold" ? "#3f6b3f" : "#9fd39f";

  return (
    <svg
      viewBox="0 0 300 170"
      className={className}
      role="img"
      aria-label="Oasis Cafe"
    >
      <ellipse
        cx="150"
        cy="85"
        rx="140"
        ry="78"
        fill="none"
        stroke={ring}
        strokeWidth="5"
      />
      <text
        x="150"
        y="80"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="54"
        letterSpacing="1"
        fill={word}
      >
        OASIS
      </text>
      {/* palm-frond Y, positioned over the wordmark's Y */}
      <g transform="translate(196 26)">
        <path
          d="M8 46 C8 30 8 18 8 8"
          stroke={frond}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M8 14 C-6 6 -16 -2 -22 -10"
          stroke={frond}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M8 14 C22 6 32 -2 38 -10"
          stroke={frond}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <text
        x="150"
        y="120"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="600"
        fontSize="24"
        letterSpacing="10"
        fill={frond}
      >
        CAFE
      </text>
    </svg>
  );
}
