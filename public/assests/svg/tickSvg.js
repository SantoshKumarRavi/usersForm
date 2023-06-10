export const tickSvg = (color = "currentColor") => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500 mb-4"
        viewBox="0 0 20 20"
        fill={color}
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zm4.707 5.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 10.586l5.293-5.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  };
  