import { IconProps } from ".";

const AngleLeft = function ({ className }: IconProps) {
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
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  );
};

export default AngleLeft;
