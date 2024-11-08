export function isPublished(publishDate: string): boolean {
  const now = new Date();
  const publishDateTime = new Date(publishDate);
  
  // Set publication time to 9:00 CET/CEST
  publishDateTime.setHours(9, 0, 0, 0);
  
  return now >= publishDateTime;
}
