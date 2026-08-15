import AuthForm from "../components/AuthForm";
import AuthLayout from "../components/AuthLayout";

const SignUp = () => (
  <AuthLayout
    eyebrow="Commencez l'écoute"
    title="Créer un compte"
    subtitle="Rejoignez Soundspace et composez une expérience musicale à votre image."
    footerText="Vous avez déjà un compte ?"
    footerLink="/signin"
    footerLabel="Se connecter"
  >
    <AuthForm
      fields={[
        { id: "name", label: "Nom complet", type: "text", placeholder: "Votre nom", autoComplete: "name" },
        { id: "email", label: "Adresse e-mail", type: "email", placeholder: "vous@exemple.com", autoComplete: "email" },
        { id: "password", label: "Mot de passe", type: "password", placeholder: "8 caractères minimum", autoComplete: "new-password" },
      ]}
      buttonLabel="Créer mon compte"
    />
  </AuthLayout>
);

export default SignUp;
