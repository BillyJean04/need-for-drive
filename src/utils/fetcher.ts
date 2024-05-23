import { baseURL, Methods, Urls } from "@/utils/consts/urls";

interface Options {
  method: Methods;
  params?: string;
  body?: string;
}

export async function fetcher(url: Urls, options: Options) {
  try {
    return await fetch(options.params ? `${baseURL}${url}/${options.params}` : `${baseURL}${url}`, {
      method: options.method,
      body: options.body,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (err) {
    throw new Error("Не удалось получить данные...");
  }
}
