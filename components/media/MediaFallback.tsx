function filenameOf(src: string) {
  return src.split("/").pop() ?? src;
}

export default function MediaFallback({ src, kind }: { src: string; kind: "image" | "video" }) {
  return (
    <div
      className="absolute inset-0 flex items-end bg-indigo p-4"
      aria-hidden="true"
    >
      <span className="font-body text-xs text-brass">
        {kind === "video" ? "video " : "image "}
        {filenameOf(src)}
      </span>
    </div>
  );
}
