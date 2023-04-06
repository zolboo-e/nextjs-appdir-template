"use client";

import { useEffect } from "react";

const ErrorPage: React.FC<{ error: Error; reset: VoidFunction }> = ({
  error,
  reset,
}) => {
  useEffect(() => {}, [error]);

  return (
    <div className="flex flex-col">
      {error.message}
      <button onClick={reset}>{`Reset`}</button>
    </div>
  );
};
export default ErrorPage;
