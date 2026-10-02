import type { ProjectMediaItem } from "@/types/project";

export function ProjectGallery({ items }: { items: ProjectMediaItem[] }) {
  if (items.length === 0) {
    return <p className="text-muted">[MEDIA GALLERY WILL BE PROVIDED]</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${item.src}-${index}`}
          src={item.src}
          alt={item.alt}
          className="aspect-video w-full rounded-xl border border-border object-cover"
        />
      ))}
    </div>
  );
}
