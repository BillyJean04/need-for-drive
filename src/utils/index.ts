export function objectValuesIsFilled(object: Record<string, string | boolean>) {
  const options = Object.values(object);
  const optionsKeys = Object.keys(options);
  const firstThreeOptionsKeys = optionsKeys.slice(0, 3);

  const firstThreeOptionsValues = firstThreeOptionsKeys.map((key) => options[Number(key)]);

  return firstThreeOptionsValues.every((value) => !!value);
}
