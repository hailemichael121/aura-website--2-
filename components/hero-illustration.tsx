"use client"

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <svg viewBox="0 0 400 300" className="w-full h-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Background circles */}
        <circle
          cx="200"
          cy="150"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
          className="animate-pulse"
        />
        <circle
          cx="200"
          cy="150"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* People figures */}
        <g className="animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>
          <circle cx="150" cy="100" r="15" fill="currentColor" opacity="0.7" />
          <rect x="140" y="115" width="20" height="30" rx="10" fill="currentColor" opacity="0.7" />
        </g>

        <g className="animate-bounce" style={{ animationDelay: "1s", animationDuration: "3s" }}>
          <circle cx="250" cy="100" r="15" fill="currentColor" opacity="0.7" />
          <rect x="240" y="115" width="20" height="30" rx="10" fill="currentColor" opacity="0.7" />
        </g>

        <g className="animate-bounce" style={{ animationDelay: "2s", animationDuration: "3s" }}>
          <circle cx="200" cy="180" r="15" fill="currentColor" opacity="0.7" />
          <rect x="190" y="195" width="20" height="30" rx="10" fill="currentColor" opacity="0.7" />
        </g>

        {/* Connecting lines */}
        <line
          x1="150"
          y1="130"
          x2="200"
          y2="180"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
          className="animate-pulse"
        />
        <line
          x1="250"
          y1="130"
          x2="200"
          y2="180"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Hearts */}
        <g className="animate-pulse" style={{ animationDelay: "1s" }}>
          <path
            d="M120,80 C120,70 130,65 135,70 C140,65 150,70 150,80 C150,90 135,100 135,100 C135,100 120,90 120,80 Z"
            fill="red"
            opacity="0.6"
          />
        </g>

        <g className="animate-pulse" style={{ animationDelay: "2s" }}>
          <path
            d="M270,80 C270,70 280,65 285,70 C290,65 300,70 300,80 C300,90 285,100 285,100 C285,100 270,90 270,80 Z"
            fill="red"
            opacity="0.6"
          />
        </g>

        {/* Floating elements */}
        <circle
          cx="100"
          cy="150"
          r="3"
          fill="currentColor"
          opacity="0.5"
          className="animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2s" }}
        />
        <circle
          cx="300"
          cy="150"
          r="3"
          fill="currentColor"
          opacity="0.5"
          className="animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "2s" }}
        />
        <circle
          cx="200"
          cy="50"
          r="3"
          fill="currentColor"
          opacity="0.5"
          className="animate-bounce"
          style={{ animationDelay: "2.5s", animationDuration: "2s" }}
        />
      </svg>
    </div>
  )
}
