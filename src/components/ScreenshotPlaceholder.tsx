export function ScreenshotPlaceholder({ caption }: { caption: string }) {
  return (
    <figure className="mt-8 max-w-xl">
      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-12">
        <p className="text-sm font-medium tracking-wide text-[#FF6A3D]">
          Screenshot coming soon
        </p>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-zinc-500">
        {caption}
      </figcaption>
    </figure>
  );
}
