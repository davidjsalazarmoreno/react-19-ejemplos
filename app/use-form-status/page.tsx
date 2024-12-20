"use client";
import LoadingState from "@/components/loading-state/loading-state";
import Submit from "@/components/submit/submit";
import Username from "@/components/username/username";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function ActionState() {
  const router = useRouter();

  const updateName = (name: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
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
          return null;
        }
      } catch (e) {
        return "Error";
      }
    },
    "No hay nombre"
  );

  return (
    <form
      action={submitAction}
      className="flex flex-col w-1/2 my-0 mx-auto p-5 gap-3"
    >
      <Username />
      <Submit />
      <div>
        {error && !pending && <p>{error}</p>}
        <LoadingState />
      </div>
    </form>
  );
}
