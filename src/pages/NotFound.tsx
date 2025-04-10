
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-6">
        <div className="mb-6 w-24 h-24 bg-oasis-light rounded-full mx-auto flex items-center justify-center">
          <span className="text-4xl">🤔</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-oasis-dark">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">
          We couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Button asChild className="bg-oasis-blue hover:bg-oasis-blue/90">
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
