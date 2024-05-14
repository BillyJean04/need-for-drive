export function objectValuesIsFilled(object: string | Record<string, string | boolean>) {
  const options = Object.values(object ?? {});
  const optionsKeys = Object.keys(options);
  const firstThreeOptionsKeys = optionsKeys.slice(0, 3);

  const firstThreeOptionsValues = firstThreeOptionsKeys.map((key) => options[Number(key)]);

  return firstThreeOptionsValues.every((value) => !!value);
}

export function formatPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function createRenderArray(length: number) {
  return new Array(length).fill(1).map((_, i) => i + 1);
}
