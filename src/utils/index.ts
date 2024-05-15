export function objectValuesIsFilled(object: string | Record<string, string | boolean>) {
  const options = Object.values(object ?? {});
  const optionsKeys = Object.keys(options);
  const firstThreeOptionsKeys = optionsKeys.slice(0, 3);

  const firstThreeOptionsValues = firstThreeOptionsKeys.map((key) => options[Number(key)]);

  return firstThreeOptionsValues.every((value) => !!value);
}

export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function formatPrice(priceMin?: number, priceMax?: number) {
  if (!priceMin || !priceMax) return "Цена не указана";

  return `${formatNumber(priceMin)} - ${formatNumber(priceMax)}`;
}

export function createRenderArray(length: number) {
  return new Array(length).fill(1).map((_, i) => i + 1);
}
