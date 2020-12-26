import { chain, IO } from "fp-ts/IO";
import { pipe } from "fp-ts/function";
import { Post } from "../../api/posts";
import { renderElement } from "../common";
import "./styles.css";

export const createPostElement = (post: Post): IO<HTMLElement> => () => {
  const container = document.createElement("div");
  container.classList.add("post-container");

  const id = document.createElement("p");
  id.innerText = `ID: ${post.id}`;

  const title = document.createElement("p");
  title.innerText = `Title: ${post.title}`;

  const body = document.createElement("p");
  body.innerText = `Body: ${post.body}`;

  [id, title, body].forEach((element) => container.appendChild(element));
  return container;
};

export const renderPost = (post: Post): IO<void> =>
  pipe(post, createPostElement, chain(renderElement));
