import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema } from "../../schemas/client.schema";
import { useCreateClient } from "../../hooks/useCreateClient";
import { useUpdateClient } from "../../hooks/useUpdateClient";
import PropTypes from "prop-types";

import EmailsSection from "./EmailSection";
import FormHeader from "./FormHeader";
import MainDataSection from "./MainDataSection";
import PhoneSection from "./PhoneSection";
import ChargeSection from "./ChargeSection";
import ButtonSpinner from "../../components/UI/ButtonSpinner";
import toast from "react-hot-toast";

const ClientForm = ({ client = null, isEditMode }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: client?.name || "",
      email_primary: client?.email_primary || "",
      email_secondary: client?.email_secondary || "",
      phone_primary: client?.phone_primary || "",
      phone_secondary: client?.phone_secondary || "",
      charge: client?.charge || "",
    },
  });

  useEffect(() => {
    if (isEditMode)
      reset({
        ...client,
        charge: client.charge != null ? Number(client.charge).toFixed(2) : "",
      });
  }, [client, reset]);

  const { createClient, loading: creating } = useCreateClient();
  const { updateClient, loading: updating } = useUpdateClient();
  const isLoading = creating || updating;
  const onSubmit = async (data) => {
    const promise = isEditMode
      ? updateClient(client.id, data)
      : createClient(data);

    toast.promise(promise, {
      loading: isEditMode ? "Editando cliente..." : "Criando cliente...",
      success: isEditMode
        ? "Cliente editado com sucesso."
        : "Cliente criado com sucesso.",
      error: (err) => err.message || "Erro ao criar cliente",
    });

    try {
      const result = await promise;

      const idToRedirect = isEditMode ? client.id : result.data.id;
      const timer = setTimeout(() => {
        navigate(`/clients/${idToRedirect}`);
      }, 2000);

      return () => clearTimeout(timer);
    } catch (err) {
      if (err.field)
        setError(err.field, { type: "manual", message: err.message });
    }
  };
  return (
    <div className="max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormHeader
          register={register}
          errors={errors}
          isEditMode={isEditMode}
        />
        <MainDataSection register={register} errors={errors} />
        <EmailsSection register={register} errors={errors} />
        <PhoneSection control={control} errors={errors} />
        <ChargeSection register={register} errors={errors} />
        <div className="flex md:justify-end gap-4 bg-gray-darker p-4 rounded-lg border border-gray-dark shdow-lg">
          <button
            type="submit"
            disabled={isLoading}
            className="focus-visible px-4 py-2 rounded-lg bg-prim2 cursor-pointer text-gray-darker font-medium hover:opacity-90 transition min-w-32.5 flex justify-center items-center"
          >
            {isLoading ? (
              <ButtonSpinner />
            ) : isEditMode ? (
              "Editar Cliente"
            ) : (
              "Salvar Cliente"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

ClientForm.propTypes = {
  client: PropTypes.object,
  isEditMode: PropTypes.bool,
};

export default ClientForm;
