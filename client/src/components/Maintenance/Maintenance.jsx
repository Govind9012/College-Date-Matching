import React from "react";

export default function Maintenance() {
  const today = new Date();

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate());

  const twoDaysLater = new Date(today);
  twoDaysLater.setDate(today.getDate() + 2);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-center">
      <div className="max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">🚧 Under Maintenance 🚧</h1>
        <p className="text-lg text-gray-700 mb-2">
          This website is currently undergoing scheduled maintenance.
        </p>
        <p className="text-md text-gray-600 mb-4">
          Expected downtime: <br />
          <strong>{formatDate(yesterday)}</strong> to{" "}
          <strong>{formatDate(twoDaysLater)}</strong>
        </p>
        <p className="text-sm text-gray-500">
          We’ll be back soon with a better experience.  
          Thank you for your patience 💙
        </p>
      </div>
    </div>
  );
}
