/**
 * 7. More set data structure
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}