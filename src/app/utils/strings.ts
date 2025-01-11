export function compareStrings(a?: string, b?: string): number {
  if (a === undefined || b === undefined) {
    return 0;
  }

  return a.toLowerCase().localeCompare(b.toLowerCase());
}
