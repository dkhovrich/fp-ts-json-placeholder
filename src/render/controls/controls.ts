import { chain, IO } from "fp-ts/IO";
import { renderElement, RenderSelector } from "../common";
import { pipe } from "fp-ts/function";

export type OnControlClick = (id: number) => void;

export const createControlsElement = (
  onNext: OnControlClick
): IO<HTMLElement> => () => {
  const container = document.createElement("menu");

  const currentPost = document.createElement("span");
  currentPost.innerText = "1";

  const nextButton = document.createElement("button");

  nextButton.innerText = "NEXT";
  nextButton.addEventListener("click", () => {
    const nextId = +currentPost.innerText + 1;
    currentPost.innerText = `${nextId}`;

    onNext(nextId);
  });

  [currentPost, nextButton].forEach((el) => container.appendChild(el));
  return container;
};

export const renderControls = (selector?: RenderSelector) => (
  onNext: OnControlClick
): IO<void> => {
  return pipe(onNext, createControlsElement, chain(renderElement(selector)));
};
