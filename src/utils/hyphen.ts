/**
 *
 * @param str
 * @returns hypenated string
 */

export function hyphen(str: string): string {
  return str.replace(/_/g, '-');
}
