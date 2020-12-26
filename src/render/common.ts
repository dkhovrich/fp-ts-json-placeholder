import { IO } from "fp-ts/IO";

export type RenderSelector = string;

export const renderElement = <T extends HTMLElement>(
  selector?: RenderSelector
) => (element: T): IO<void> => () => {
  const container =
    typeof selector === "string"
      ? document.querySelector(selector) ?? document.body
      : document.body;

  container.appendChild(element);
};
