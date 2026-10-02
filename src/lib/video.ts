export function toGoogleDriveEmbedUrl(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) ?? url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const fileId = match?.[1];
  if (!fileId) return null;
  return `https://drive.google.com/file/d/${fileId}/preview`;
}
