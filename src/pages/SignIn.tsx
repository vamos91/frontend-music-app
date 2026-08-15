import AuthForm from "../components/AuthForm";
import AuthLayout from "../components/AuthLayout";

const SignIn = () => (
  <AuthLayout
    eyebrow="Bon retour"
    title="Se connecter"
    subtitle="Accédez à votre bibliothèque et reprenez là où vous vous étiez arrêté."
    footerText="Vous n'avez pas de compte ?"
    footerLink="/signup"
    footerLabel="S'inscrire"
  >
    <AuthForm
      fields={[
        { id: "email", label: "Adresse e-mail", type: "email", placeholder: "vous@exemple.com", autoComplete: "email" },
        { id: "password", label: "Mot de passe", type: "password", placeholder: "••••••••", autoComplete: "current-password" },
      ]}
      buttonLabel="Se connecter"
      showForgot
    />
  </AuthLayout>
);

export default SignIn;
