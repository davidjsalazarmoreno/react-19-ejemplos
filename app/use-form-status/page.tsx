"use client";
import LoadingState from "@/components/loading-state/loading-state";
import Submit from "@/components/submit/submit";
import Username from "@/components/username/username";
import { updateName } from "@/lib/services";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function ActionState() {
  const router = useRouter();

  const [error, submitAction, pending] = useActionState(
    async (previousState, formData) => {
      try {
        const error = await updateName(formData.get("name"));
        console.log(error);
        if (error.length > 0) {
          return error;
        } else {
          router.push("/");
          return false;
        }
      } catch (e) {
        return "Error updating name";
      }
    },
    null
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
