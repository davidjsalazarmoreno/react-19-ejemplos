"use client"
import { getComments } from "@/lib/services";
import { use } from "react";

export type Props = {
  commentsPromise: ReturnType<typeof getComments>;
};

export function Comments({ commentsPromise }: Props) {
  const comments = use(commentsPromise);
  return comments.map(({ id, comment }) => {
    return <p key={id}>{comment}</p>;
  });
}
