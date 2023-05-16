/**
 *
 * @param str
 * @returns hypenated string
 */

export function hyphen(str: string): string {
  return str.replace(/_/g, '-');
}

/**
 *
 * @param str
 * @returns hypenated string
 */

export function underscore(str: string): string {
  return str.replace(/-/g, '_');
}
