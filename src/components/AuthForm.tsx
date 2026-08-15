import { useNavigate } from "react-router";
import useUser from "../store/user";

type Field = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
};



const AuthForm = ({ fields, buttonLabel, showForgot = false }: { fields: Field[]; buttonLabel: string; showForgot?: boolean }) => {
  const navigate = useNavigate()
  //const storeUser = useUser((state) => state.increment())

  const getEvent = (event: any) => {
    event.preventDefault()
    if (!event.target.email.value || !event.target.password.value) return
    
    const register = async () => {
      // const user = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`)
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email: event.target.email.value, password: event.target.password.value})
      })
      if (response.status === 201) {
        navigate('/signin')
      }
    }

    const login = async () => {
      // const user = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`)
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({email: event.target.email.value, password: event.target.password.value})
      })
      if (response.status === 200) {
        const responseJson = await response.json()
        console.log(responseJson)
        //storeUser(responseJson)
        navigate('/')
      }
    }

    try {
      if (showForgot) {
        login()
      } else {
        register();
      } 
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
      <form className="mt-8 space-y-5" onSubmit={getEvent}>
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
    </>
  )
  
};

export default AuthForm;
