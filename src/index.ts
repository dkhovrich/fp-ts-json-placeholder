import { getPostById } from "./api/posts";
import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";

const result = pipe(
  1,
  getPostById,
  TE.map((post) => console.log("POST", post)),
  TE.mapLeft((error) => console.log("ERROR", error))
);

result().then();
