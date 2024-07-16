"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function Submit() {
  const { pending, data } = useFormStatus();
  const name = data?.get("name");

  return (
    <Button type="submit" disabled={pending}>
      {name ? `Updating ${name}` : "Update"}
    </Button>
  );
}
