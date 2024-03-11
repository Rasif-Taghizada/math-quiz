import { Link } from "react-router-dom";

export const ErrorBoundry = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-4">
      <p className="text-red-500 text-lg font-semibold">Dang!</p>
      <p className="text-red-500 text-lg font-semibold">Something went wrong</p>

      <Link>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 text-white bg-red-500 rounded-lg"
        >
          Go back
        </button>
      </Link>
    </div>
  );
};
