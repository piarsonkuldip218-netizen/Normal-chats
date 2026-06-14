"use client";

import { useEffect, useState } from "react";

// =====================================================
// TAMS Dental — Live Updates Gallery (Cloudinary)
// Shows photos AND videos uploaded by the clinic via
// the admin panel (admin.html). Self-contained —
// does not affect any existing gallery, photos, or
// translations.
// =====================================================

const CLOUD_NAME = "dqt43l0z8";

const SECTIONS = ["gallery", "before-after", "team", "updates"];

type CloudItem = {
  public_id: string;
  created_at: string;
  type: "image" | "video";
  context?: { custom?: { caption?: string } };
};

export default function CloudinaryGallery() {
  const [items, setItems] = useState<CloudItem[]>([]);
  const [active, setActive] = useState<CloudItem | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      const all: CloudItem[] = [];

      for (const folder of SECTIONS) {
        // images
        try {
          const res = await fetch(
            `https://res.cloudinary.com/${CLOUD_NAME}/image/list/tams-dental:${folder}.json`
          );
          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data?.resources)) {
              for (const r of data.resources) {
                all.push({ ...r, type: "image" });
              }
            }
          }
        } catch {
          // ignore
        }

        // videos
        try {
          const res = await fetch(
            `https://res.cloudinary.com/${CLOUD_NAME}/video/list/tams-dental:${folder}.json`
          );
          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data?.resources)) {
              for (const r of data.resources) {
                all.push({ ...r, type: "video" });
              }
            }
          }
        } catch {
          // ignore
        }
      }

      all.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      if (isMounted) {
        setItems(all);
        setLoaded(true);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  // Render nothing until loaded, and nothing if no items —
  // keeps the page exactly as-is when the clinic hasn't
  // uploaded anything yet.
  if (!loaded || items.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {items.map((item) => {
          const caption = item.context?.custom?.caption || "";
          const thumbUrl =
            item.type === "video"
              ? `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/w_500,h_500,c_fill,q_auto/${item.public_id}.jpg`
              : `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_500,h_500,c_fill,q_auto,f_auto/${item.public_id}`;

          return (
            <button
              key={item.public_id}
              type="button"
              onClick={() => setActive(item)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition hover:shadow-md"
              aria-label={caption || "View item"}
            >
              <img
                src={thumbUrl}
                alt={caption || "TAMS Dental"}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white/30 text-white backdrop-blur">
                    ▶
                  </div>
                </div>
              )}

              {caption && (
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-xs font-semibold text-white drop-shadow-md sm:text-sm">
                    {caption}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          {active.type === "video" ? (
            <video
              src={`https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto/${active.public_id}.mp4`}
              controls
              autoPlay
              className="max-h-[90vh] max-w-full rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1200,q_auto,f_auto/${active.public_id}`}
              alt="TAMS Dental"
              className="max-h-[90vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button
            type="button"
            onClick={() => setActive(null)}
            className="fixed right-4 top-4 z-[80] grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Close"
            style={{ marginTop: "env(safe-area-inset-top)" }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
