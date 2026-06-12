"use client";

export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M100 15L170 55V145L100 185L30 145V55Z" />

        <path d="M70 55V120C70 140 60 150 40 150" />

        <path d="M105 55V145" />
        <path d="M105 100L145 55" />
        <path d="M105 100L150 145" />
      </g>
    </svg>
  );
}