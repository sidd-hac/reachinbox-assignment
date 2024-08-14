import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateContent = (content: string, maxLength: number) => {
  return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
}


export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
      month: 'long', 
      day: 'numeric', 
      timeZone: 'UTC', 
  };
  return date.toLocaleString('en-US', options); 
}
export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
      month: 'long', 
      day: 'numeric',
      hour: 'numeric', 
      minute: 'numeric',  
      timeZone: 'UTC', 
  };
  return date.toLocaleString('en-US', options); 
}