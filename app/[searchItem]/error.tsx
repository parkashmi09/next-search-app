"use client"
import React, { useEffect } from "react";
import Link from "next/link";

export default function Error(props: { error: Error; reset: () => void }) {
  const { error, reset } = props;

  useEffect(() => {
    console.log("error comes like", error);
  }, [error]);

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
      <h2 className="my-4 text-2xl font-bold">Something Wrong!</h2>
      <button
        onClick={() => reset()}
        className="mb-4 p-4 bg-red-500 text-white rounded-xl"
      >
        Try Again
      </button>
      <p>
        Or Go Back to{" "}
        <Link className="underline" href="/">
          Home 🏠
        </Link>
      </p>
    </main>
  );
}
