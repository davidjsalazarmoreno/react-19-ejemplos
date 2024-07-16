"use client";
import LoadingState from "@/components/loading-state/loading-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateName } from "@/lib/services";
import { useOptimistic, useState } from "react";

export type ChangeNameProps = {
  currentName: string;
  onUpdateName: (newName: string) => void;
};

function ChangeName({ currentName, onUpdateName }: ChangeNameProps) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData) => {
    const newName = formData.get("name");
    setOptimisticName(newName);
    try {
      const error = await updateName(newName);
      // throw new Error("Error updating name");
      onUpdateName(error.length > 0 ? currentName : newName);
    } catch (e) {
      onUpdateName(currentName);
    }
  };

  return (
    <form
      action={submitAction}
      className="flex flex-col w-1/2 my-0 mx-auto p-5 gap-3"
    >
      <p>
        <b>Your name is:</b> {optimisticName}
      </p>
      <p>
        <Label>Change Name:</Label>
        <Input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
      <div>
        <LoadingState />
      </div>
    </form>
  );
}

export default function UseFormStatus() {
  const [name, setName] = useState("nombre viejo");
  return (
    <ChangeName
      currentName={name}
      onUpdateName={(newName) => {
        setName(newName);
      }}
    />
  );
}