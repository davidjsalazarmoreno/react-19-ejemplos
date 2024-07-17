import { Suspense } from "react";
import { Comments } from "@/components/comments/comments";
import { getComments } from "@/lib/services";

export default function UseApi() {
  const commentsPromise = getComments();

  return (
    <div className="flex flex-col w-1/2 my-0 mx-auto p-5 gap-3">
      <Suspense fallback={<div>Loading...</div>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}
