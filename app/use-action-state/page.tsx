"use client";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ActionState = string;

export default function ActionState() {
  const router = useRouter();

  const updateName = (name: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("");
        reject("Error updating name");
        console.log(name);
      }, 1000);
    });
  };

  const [error, submitAction, pending] = useActionState<string | null, FormData>(
    async (previousState, formData: FormData) => {
      try {
        
        console.log("previousState")
        console.log(previousState)
        const name = formData.get("name") as string;
        const error = await updateName(name);

        if (error.length > 0) {
          return error;
        } else {
          router.push("/");
          return null;
        }
      } catch (e) {
        return "Error updating name";
      }
    },
    ""
  );

  return (
    <form
      action={submitAction}
      className="flex flex-col w-1/2 my-0 mx-auto p-5 gap-3"
    >
      <Input
        type="text"
        name="name"
        placeholder="Type your name"
        disabled={pending}
      />
      <Button type="submit" disabled={pending}>
        Update
      </Button>
      {error && !pending && <p>{error}</p>}
      {pending && <p>Loading</p>}
    </form>
  );
}
