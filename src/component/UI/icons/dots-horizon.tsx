import { IconProps } from ".";

const DotsHorizon = function ({ className }: IconProps) {
  return (
    <svg
      className={className ?? ''}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M6 12h.01m6 0h.01m5.99 0h.01"
      />
    </svg>
  );
};

export default DotsHorizon;
