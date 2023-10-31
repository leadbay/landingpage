import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const encode = (data: Record<string, unknown>) => {
  return Object.keys(data)
    .map(
      // @ts-ignore
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&")
}
