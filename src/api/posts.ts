import { createUrl, makeRequest } from "./makeRequest";
import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export function getPostById(id: number): TE.TaskEither<Error, Post> {
  return pipe(`/posts/${id}`, createUrl, (url) => makeRequest(url));
}
