import urlJoin from "url-join";
import axios from "axios";
import * as TE from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export function createUrl(url: string): string {
  return urlJoin(BASE_URL, url);
}

export function makeRequest<T>(url: string): TE.TaskEither<Error, T> {
  return pipe(
    TE.tryCatch(
      () => axios.get(url),
      (error) => new Error(`${error}`)
    ),
    TE.map((response) => response.data)
  );
}
