type UnsplashOptions = {
  width?: number;
  quality?: number;
  fit?: "crop" | "max" | "clip" | "scale" | "fill";
};

export function unsplash(url: string, options: UnsplashOptions = {}) {
  const { width = 2000, quality = 85, fit = "crop" } = options;
  const base = url.split("?")[0];
  const params = new URLSearchParams({
    auto: "format",
    fit,
    w: String(width),
    q: String(quality),
  });

  return `${base}?${params.toString()}`;
}

