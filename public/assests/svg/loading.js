export const loadingSvg = (color = "currentColor") => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin h-6 w-6 text-blue-500"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill={color}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
      />
    </svg>
  );
};
