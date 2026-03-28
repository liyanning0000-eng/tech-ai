interface LogoProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect width="32" height="32" rx="7" fill="white" />
      {/* N letterform - geometric, tech aesthetic */}
      <path
        d="M8 24V8H11.5L20.5 19.2V8H24V24H20.5L11.5 12.8V24H8Z"
        fill="black"
      />
      {/* Accent dot - top right */}
      <circle cx="25.5" cy="7" r="2" fill="black" />
    </svg>
  );
}

export function LogoFull({ height = 22, className = "" }: { height?: number; className?: string }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Logo mark */}
      <rect width="32" height="32" rx="7" fill="white" />
      <path
        d="M8 24V8H11.5L20.5 19.2V8H24V24H20.5L11.5 12.8V24H8Z"
        fill="black"
      />
      <circle cx="25.5" cy="7" r="2" fill="black" />
      {/* Wordmark */}
      <text
        x="42"
        y="22"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="white"
        letterSpacing="-0.3"
      >
        Nova Tech AI
      </text>
    </svg>
  );
}
