import { IO } from "fp-ts/IO";

export const renderElement = <T extends HTMLElement>(
  element: T
): IO<void> => () => document.body.appendChild(element);
