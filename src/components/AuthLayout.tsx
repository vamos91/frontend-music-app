import type { ReactNode } from "react";
import { Link } from "react-router";
import Logo from "./Logo";

type AuthLayoutProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLink: string;
  footerLabel: string;
};

const AuthLayout = ({ eyebrow, title, subtitle, children, footerText, footerLink, footerLabel }: AuthLayoutProps) => (
  <div className="min-h-screen bg-[#0c0e0d] px-5 py-8 text-white selection:bg-emerald-400 selection:text-black sm:px-8">
    <header className="mx-auto flex max-w-6xl items-center justify-between">
      <Link to="/" aria-label="Retour à l'accueil"><Logo /></Link>
      <Link to="/" className="text-sm font-semibold text-zinc-400 transition hover:text-white">Retour à l'accueil</Link>
    </header>

    <main className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-16 py-14 lg:grid-cols-[1fr_28rem]">
      <section className="hidden lg:block">
        <p className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase">{eyebrow}</p>
        <h2 className="mt-6 max-w-xl text-5xl leading-[1.08] font-bold tracking-tight">La musique qui vous ressemble, partout avec vous.</h2>
        <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400">Retrouvez vos artistes préférés, organisez vos playlists et découvrez chaque jour de nouveaux horizons sonores.</p>
        <div className="mt-10 flex gap-3">
          {["#34d399", "#1b4034", "#24332e", "#151b19"].map((color, index) => (
            <span key={color} style={{ backgroundColor: color }} className={`h-24 rounded-2xl ${index === 0 ? "w-24" : "w-14"}`} />
          ))}
        </div>
      </section>

      <section className="w-full rounded-3xl border border-white/8 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 sm:p-9">
        <p className="text-xs font-bold tracking-[0.18em] text-emerald-400 uppercase">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500">{subtitle}</p>
        {children}
        <p className="mt-7 text-center text-sm text-zinc-500">
          {footerText} <Link to={footerLink} className="font-semibold text-white underline decoration-emerald-400 underline-offset-4 transition hover:text-emerald-300">{footerLabel}</Link>
        </p>
      </section>
    </main>
  </div>
);

export default AuthLayout;
