import { Params } from "react-router-dom";

import { baseURL, Urls } from "@/utils/consts/urls";

export default async function orderLoader({ params }: { params: Params }) {
  const data = await fetch(`${baseURL}${Urls.order}/${params?.orderId}`).then((res) => res.json());
  if (data.data === null) {
    throw new Error(`Не удалось найти заказ #${params.orderId}`);
  }
  return data;
}
