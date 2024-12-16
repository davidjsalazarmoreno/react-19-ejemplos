"use client";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";

export default function FormAction() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const updateName = (name: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Error updating name");
        console.info(name);
      }, 3000);
    });
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);

      if (error.length > 0) {
        setError(error);
        return;
      }

      console.log("Name updated!");
      redirect("/success")
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {isPending && <p>Updating name...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}