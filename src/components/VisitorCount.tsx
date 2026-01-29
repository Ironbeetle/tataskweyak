import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const hostname = typeof window !== 'undefined' ? window.location.hostname : 'site';
    const namespace = encodeURIComponent(hostname);
    const key = 'visits';
    const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (d && typeof d.value === 'number') setCount(d.value);
      })
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="text-stone-300 text-sm">
      {count === null ? 'Visitors: —' : `Visitors: ${count}`}
    </div>
  );
}
