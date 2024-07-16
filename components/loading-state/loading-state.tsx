"use client";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function LoadingState() {
  const { pending } = useFormStatus();

  if (!pending) {
    return null;
  }
  return (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </>
  );
}
