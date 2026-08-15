import { Link } from "react-router";
import Logo from "../components/Logo";

type IconProps = { className?: string };

const HomeIcon = ({ className = "size-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const SearchIcon = ({ className = "size-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);

const PlusIcon = ({ className = "size-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const PlayIcon = ({ className = "size-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.5v13l10-6.5L8 5.5Z" />
  </svg>
);

const ClockIcon = ({ className = "size-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const tracks = [
  {
    title: "Midnight Drive",
    artist: "Neon Valley",
    album: "City After Dark",
    duration: "3:42",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Quiet Motion",
    artist: "Lena Rivers",
    album: "Soft Focus",
    duration: "4:08",
    cover: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Northern Lights",
    artist: "Atlas Grey",
    album: "Open Skies",
    duration: "3:27",
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Golden Hour",
    artist: "Maya Bloom",
    album: "Slow Sundays",
    duration: "2:58",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=160&q=80",
  },
  {
    title: "Parallel Lines",
    artist: "The Moderns",
    album: "New Geometry",
    duration: "4:16",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=160&q=80",
  },
];

const playlists = ["Deep Focus", "Morning Energy", "Productive Flow"];

const Home = () => (
  <div className="min-h-screen bg-[#0c0e0d] font-sans text-white selection:bg-emerald-400 selection:text-black">
    <header className="fixed inset-x-0 top-0 z-30 flex h-20 items-center border-b border-white/8 bg-[#0c0e0d]/90 px-5 backdrop-blur-xl lg:px-8">
      <Link to="/" className="shrink-0" aria-label="Soundspace, accueil">
        <Logo />
      </Link>

      <div className="mx-auto hidden w-full max-w-md items-center md:flex">
        <SearchIcon className="pointer-events-none ml-4 size-5 text-zinc-500" />
        <input
          type="search"
          placeholder="Rechercher des titres, artistes, albums..."
          className="-ml-9 w-full rounded-full border border-white/8 bg-white/6 py-3 pr-5 pl-12 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-400/50 focus:bg-white/8"
        />
      </div>

      <nav className="ml-auto flex items-center gap-2 text-sm font-semibold" aria-label="Authentification">
        <Link to="/signup" className="hidden rounded-full px-5 py-2.5 text-zinc-300 transition hover:text-white sm:block">
          S'inscrire
        </Link>
        <Link to="/signin" className="rounded-full bg-white px-5 py-2.5 text-[#111311] transition hover:bg-emerald-300 sm:px-6">
          Se connecter
        </Link>
      </nav>
    </header>

    <aside className="fixed top-20 bottom-0 left-0 z-20 hidden w-64 flex-col border-r border-white/8 bg-[#0c0e0d] px-4 py-7 lg:flex">
      <nav className="space-y-2" aria-label="Navigation principale">
        <Link to="/" className="flex items-center gap-3 rounded-xl bg-white/8 px-4 py-3 text-sm font-semibold text-white">
          <HomeIcon /> Accueil
        </Link>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-400 transition hover:bg-white/5 hover:text-white">
          <SearchIcon /> Découvrir
        </button>
      </nav>

      <div className="mt-9 flex items-center justify-between px-4">
        <p className="text-xs font-bold tracking-[0.14em] text-zinc-500 uppercase">Votre bibliothèque</p>
        <button aria-label="Ajouter une playlist" className="rounded-full p-1.5 text-zinc-400 transition hover:bg-white/8 hover:text-white">
          <PlusIcon className="size-4" />
        </button>
      </div>

      <button className="mt-4 flex items-center gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-left text-sm font-semibold transition hover:border-emerald-400/30 hover:bg-white/7">
        <span className="grid size-9 place-items-center rounded-lg bg-emerald-400 text-black"><PlusIcon className="size-5" /></span>
        Créer une playlist
      </button>

      <div className="mt-5 space-y-1">
        {playlists.map((playlist) => (
          <button key={playlist} className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
            {playlist}
          </button>
        ))}
      </div>

      <p className="mt-auto px-4 text-xs leading-5 text-zinc-600">© 2026 Soundspace<br />Musique pour tous.</p>
    </aside>

    <main className="pb-24 pt-20 lg:pb-0 lg:pl-64">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-[radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.22),transparent_37%),linear-gradient(135deg,#1c211f,#111312)] px-6 py-10 sm:px-10 sm:py-12">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase">Sélection du jour</p>
            <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl">Votre journée mérite<br className="hidden sm:block" /> sa propre bande-son.</h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">Une sélection pensée pour vous aider à rester concentré, inspiré et toujours dans le bon rythme.</p>
            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-emerald-300">
              <PlayIcon className="size-4" /> Écouter la sélection
            </button>
          </div>
          <div className="absolute -right-20 -bottom-36 size-80 rounded-full border-[46px] border-emerald-300/10 sm:right-4" />
        </section>

        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-400">Pour vous</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Titres du moment</h2>
            </div>
            <button className="text-sm font-semibold text-zinc-400 transition hover:text-white">Tout afficher</button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025]">
            <div className="hidden grid-cols-[2rem_minmax(16rem,1.5fr)_minmax(10rem,1fr)_5rem] gap-4 border-b border-white/8 px-5 py-3 text-xs font-semibold tracking-wider text-zinc-500 uppercase sm:grid">
              <span>#</span><span>Titre</span><span>Album</span><ClockIcon />
            </div>
            {tracks.map((track, index) => (
              <button key={track.title} className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-white/5 px-3 py-3 text-left transition last:border-0 hover:bg-white/6 sm:grid-cols-[2rem_minmax(16rem,1.5fr)_minmax(10rem,1fr)_5rem] sm:gap-4 sm:px-5">
                <span className="hidden text-sm text-zinc-500 sm:block group-hover:hidden">{index + 1}</span>
                <span className="hidden text-emerald-400 sm:group-hover:block"><PlayIcon className="size-4" /></span>
                <span className="flex min-w-0 items-center gap-3">
                  <img src={track.cover} alt="" className="size-12 shrink-0 rounded-lg object-cover" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-zinc-100">{track.title}</span>
                    <span className="mt-1 block truncate text-xs text-zinc-500">{track.artist}</span>
                  </span>
                </span>
                <span className="hidden truncate text-sm text-zinc-500 sm:block">{track.album}</span>
                <span className="text-sm tabular-nums text-zinc-500">{track.duration}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>

    <nav className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-around border-t border-white/8 bg-[#111311]/95 px-4 py-3 backdrop-blur lg:hidden" aria-label="Navigation mobile">
      <Link to="/" className="flex flex-col items-center gap-1 text-[11px] font-semibold text-emerald-400"><HomeIcon className="size-5" />Accueil</Link>
      <button className="flex flex-col items-center gap-1 text-[11px] font-semibold text-zinc-500"><SearchIcon className="size-5" />Rechercher</button>
      <button className="flex flex-col items-center gap-1 text-[11px] font-semibold text-zinc-500"><PlusIcon className="size-5" />Playlist</button>
    </nav>
  </div>
);

export default Home;
