import { baseURL, Methods, Urls } from "@/utils/consts/urls";

interface Options {
  method: Methods;
  params?: string;
}

export async function fetcher(url: Urls, options: Options) {
  try {
    return await fetch(options.params ? `${baseURL}${url}/${options.params}` : `${baseURL}${url}`, {
      method: options.method,
    }).then((res) => res.json());
  } catch (err) {
    throw new Error("Не удалось получить данные...");
  }
}
