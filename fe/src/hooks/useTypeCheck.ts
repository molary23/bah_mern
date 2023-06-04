export default function useTypeCheck(
  value: any,
  type: string = "string"
): boolean {
  return typeof value === type;
}
