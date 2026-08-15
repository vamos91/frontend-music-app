const Logo = ({ compact = false }: { compact?: boolean }) => (
  <span className="inline-flex items-center gap-2.5 text-white">
    <span className="grid size-9 place-items-center rounded-full bg-emerald-400 text-black">
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <path d="M7 15V8.5l10-2V13" />
        <circle cx="5" cy="16" r="2" />
        <circle cx="15" cy="14" r="2" />
      </svg>
    </span>
    {!compact && <span className="text-lg font-bold tracking-tight">soundspace</span>}
  </span>
);

export default Logo;
