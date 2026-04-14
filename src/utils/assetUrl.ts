/**
 * Build a URL for a static asset that respects Vite's configured `base`.
 *
 * WHY THIS EXISTS
 * ---------------
 * GitHub Pages serves this site at `https://<user>.github.io/samizdat/`,
 * so Vite is configured with `base: '/samizdat/'`. Hard-coded paths like
 * `/1.jpg` would resolve to `<user>.github.io/1.jpg` (404), not
 * `<user>.github.io/samizdat/1.jpg`.
 *
 * At build time Vite exposes the configured base as `import.meta.env.BASE_URL`
 * (e.g. `'/samizdat/'` in production, `'/'` in `npm run dev`). This helper
 * joins that prefix with a relative path so components can stay agnostic
 * about where the site is deployed.
 *
 * USAGE
 * -----
 *   <img src={assetUrl('1.jpg')} />              // -> /samizdat/1.jpg in prod
 *   <div style={{ backgroundImage: `url(${assetUrl('19.jpg')})` }} />
 *
 * CONTRACT
 * --------
 * - Input may start with `/` or not — both should work.
 * - Output must never contain a double slash between base and path.
 * - External URLs (`http://`, `https://`) should pass through unchanged,
 *   so the same helper can wrap the picsum fallbacks without breaking them.
 */
export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
