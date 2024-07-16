"use client";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

export default function Username() {
  const { pending } = useFormStatus();

  return (
    <Input
      type="text"
      name="name"
      placeholder="Type your name"
      disabled={pending}
    />
  );
}
