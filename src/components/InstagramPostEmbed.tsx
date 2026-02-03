import { useEffect, useRef } from "react";


declare global {
  interface Window {
    instgrm?: {
      Embeds?: { process?: () => void };
    };
  }
}

export default function InstagramPostEmbed({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Clear previous embed block (important on hot reload / rerenders)
    ref.current.innerHTML = `
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="${url}"
        data-instgrm-version="14"
        style="background:transparent; border:0; margin:0; padding:0; width:100%;"
      ></blockquote>
    `;

    const runProcess = () => window.instgrm?.Embeds?.process?.();

    // Load embed script once
    const SCRIPT_SRC = "https://www.instagram.com/embed.js";
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`) as HTMLScriptElement | null;

    if (!existing) {
      const s = document.createElement("script");
      s.async = true;
      s.defer = true;
      s.src = SCRIPT_SRC;
      s.onload = runProcess;
      document.body.appendChild(s);
    } else {
      runProcess();
    }
  }, [url]);

  return (
    <div
      className={className}
      ref={ref}
      // Instagram injects its own HTML; this wrapper keeps layout stable
    />
  );
}
