import { useEffect } from "react";


export default function InstagramPostEmbed({ url }: { url: string }) {
  useEffect(() => {
    // load script once
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
      s.onload = () => (window as any).instgrm?.Embeds?.process?.();
    } else {
      (window as any).instgrm?.Embeds?.process?.();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ background: "transparent", margin: 0, padding: 0 }}
    />
  );
}
