/** next/image does not prefix basePath onto local `src`, so static-export builds need it added. */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
