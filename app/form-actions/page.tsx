"use client"
import Image from "next/image";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function ActionState() {

  const updateName = (name: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("")
        reject("Error updating name")
        console.log(name)
      }, 1000);
    });
  }


  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) {
        return error;
      }
      redirect("/");
      return null;
    },
    null,
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );



}
