type Field = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
};

const AuthForm = ({ fields, buttonLabel, showForgot = false }: { fields: Field[]; buttonLabel: string; showForgot?: boolean }) => (
  <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
    {fields.map((field) => (
      <label key={field.id} htmlFor={field.id} className="block">
        <span className="mb-2 block text-sm font-semibold text-zinc-300">{field.label}</span>
        <input
          id={field.id}
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/70 focus:ring-3 focus:ring-emerald-400/10"
        />
      </label>
    ))}
    {showForgot && (
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-zinc-400"><input type="checkbox" className="size-4 accent-emerald-400" />Se souvenir de moi</label>
        <button type="button" className="font-semibold text-zinc-300 hover:text-white">Mot de passe oublié ?</button>
      </div>
    )}
    <button type="submit" className="w-full rounded-full bg-emerald-400 px-5 py-3.5 text-sm font-bold text-black transition hover:bg-emerald-300 focus:ring-4 focus:ring-emerald-400/20 focus:outline-none">
      {buttonLabel}
    </button>
  </form>
);

export default AuthForm;
