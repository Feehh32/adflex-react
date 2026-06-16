import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import InputField from "../../components/UI/InputField";
import { loginSchema } from "../../schemas/login.schema";
import { useAuth } from "../../hooks/useAuth";

import ButtonSpiner from "../../components/UI/ButtonSpinner";

const LoginForm = () => {
  const { signIn } = useAuth();
  const [authError, setAuthError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setAuthError(null);

      const { error } = await signIn(data.email, data.password);
      if (error) {
        throw error;
      }
    } catch {
      setAuthError("Email ou senha inválidos");
    }
  };

  return (
    <section className="p-4 bg-gray-darker rounded-lg border border-gray-dark shadow-lg w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputField
          label="Email"
          name="email"
          id="user_email"
          type="email"
          autoComplete="email"
          width="w-full"
          register={register}
          error={errors.email}
          required
        />
        <InputField
          label="Senha"
          name="password"
          id="login-password"
          type="password"
          autoComplete="current-password"
          width="w-full"
          register={register}
          error={errors.password}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-prim2 hover:opacity-90 transition duration-300 ease-in-out py-2 rounded-md cursor-pointer text-gray-darker font-bold flex items-center justify-center"
        >
          {isSubmitting ? <ButtonSpiner /> : "Entrar"}
        </button>
        {authError && (
          <p className="text-sm text-red text-center">{authError}</p>
        )}
      </form>
    </section>
  );
};

export default LoginForm;
