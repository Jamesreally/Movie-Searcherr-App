import React from "react";
import { ErrorBoundary } from "react-error-boundary";
const Fallback = ({ error }) => {
  return (
    <div>
      <h3>Page Error </h3>
      {error.message}
    </div>
  );
};
export default Fallback;
