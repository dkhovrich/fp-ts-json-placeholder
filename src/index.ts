import { getPostById } from "./api/posts";
import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";
import * as IO from "fp-ts/IO";
import { randomInt } from "fp-ts/Random";

const result = pipe(
  1,
  getPostById,
  TE.map((post) => {
    // console.log("POST", post);
    return post;
  }),
  TE.mapLeft((error) => console.log("ERROR", error))
);

result().then();

const log = (s: unknown): IO.IO<void> => () => console.log(s);

const program: IO.IO<void> = pipe(
  randomInt(1, 100),
  IO.map(getPostById),
  IO.chain(log)
);

program();
