import { getPostById } from "./api/posts";
import { flow, pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";
import * as C from "fp-ts/Console";
import { randomInt } from "fp-ts/Random";
import { renderPost } from "./render/posts/posts";
import { renderElement } from "./render/common";
import { OnControlClick, renderControls } from "./render/controls/controls";

const wrapper = document.createElement("div");
wrapper.id = "post-container";

pipe(wrapper, renderElement())();

const onClick: OnControlClick = (id) => console.log("ID", id);

pipe(onClick, renderControls())();

const program = pipe(
  randomInt(1, 100),
  TE.rightIO,
  TE.chain(getPostById),
  TE.mapLeft((error) => C.error(error)()),
  TE.chain(flow(renderPost("#post-container"), TE.fromIO))
);

(async () => await program())();
