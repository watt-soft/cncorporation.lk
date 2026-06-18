/**
 * Returns the correct path for public folder assets.
 * In development, assets are served from root.
 * In production (GitHub Pages), they need the base path prefix.
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if base already ends with one
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
