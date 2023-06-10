import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";
import {tickSvg} from "../public/assests/svg/tickSvg"
const Result = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        {tickSvg()}
        <p className="text-lg font-semibold mb-4">Congratulations! Your form has been submitted.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => router.push('/')}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  </div>
  );
};

export default Result;
