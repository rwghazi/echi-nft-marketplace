import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="italic text-gray-400">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
