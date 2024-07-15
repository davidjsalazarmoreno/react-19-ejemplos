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
      try {
        const error = await updateName(formData.get("name"));
        if (error) {
          return error;
        } else {
          redirect("/");
        }

      } catch (e) {
        return "Error updating name";
      }
    },
    null,
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" placeholder="Type your name" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
      {isPending && <p>Loading</p>}
    </form>
  );



}
