import { getPostById } from "./api/posts";
import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";
import * as C from "fp-ts/Console";
import { randomInt } from "fp-ts/Random";

// const program: IO.IO<void> = pipe(
//   randomInt(1, 100),
//   IO.map(getPostById),
//   IO.chain(C.log)
// );
// program();

const program = pipe(
  randomInt(1, 100),
  TE.rightIO,
  TE.chain(getPostById),
  TE.mapLeft((error) => console.log("ERROR", error)),
  TE.chain((i) => TE.fromIO(C.log(i)))
);

program().then();
