import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceOrderSchema } from "../../schemas/serviceOrder.schema";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { useServiceOrderOptions } from "../../hooks/useServiceOrderOptions";
import { useSelectClients } from "../../hooks/useSelectClients";
import { useCreateServiceOrder } from "../../hooks/useCreateServiceOrder";

import FormHeader from "./FormHeader";
import MainDataSection from "./MainDataSection";
import ServicesSection from "./ServicesSection";
import SummarySection from "./SummarySection";

import Spinner from "../../components/UI/Spinner";
import toast from "react-hot-toast";
import ButtonSpinner from "../../components/UI/ButtonSpinner";

const OsForm = () => {
  const { loading: loadingClients, clients } = useSelectClients();
  const { loading, thicknessOptions } = useServiceOrderOptions();
  const { createServiceOrder, loading: creating } = useCreateServiceOrder();
  const { clientId } = useParams();
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(serviceOrderSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      client_id: Number(clientId) || null,
      hide_measure: false,
      services: [
        {
          service_name: "",
          width: "",
          height: "",
          amount: "",
          budget_value: "",
          thickness_id: thicknessOptions[2]?.id || null,
        },
      ],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "services",
  });

  const previousClientId = useRef(null);
  const selectedClientId = useWatch({
    control,
    name: "client_id",
  });

  useEffect(() => {
    if (previousClientId.current === null) {
      previousClientId.current = selectedClientId;
      return;
    }

    if (previousClientId.current !== selectedClientId) {
      replace([
        {
          service_name: "",
          width: "",
          height: "",
          amount: "",
          budget_value: "",
          thickness_id: thicknessOptions[2]?.id || null,
        },
      ]);
    }

    previousClientId.current = selectedClientId;
  }, [selectedClientId]);

  const onSubmit = async (data) => {
    try {
      const result = await createServiceOrder(data);
      toast.success(`O.S ${result.code} criada com sucesso!`);

      const timer = setTimeout(() => {
        navigate(`/service-order-page/${result.id}`);
      }, 2010);

      return () => clearTimeout(timer);
    } catch (err) {
      toast.error(err.message || "Erro ao criar O.S");
    }
  };

  if (loading || loadingClients)
    return <Spinner title="Carregando Formulário." />;

  return (
    <div className="max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormHeader />
        <MainDataSection
          clients={clients}
          errorSelect={errors}
          register={register}
          clientIdFromUrl={clientId ? Number(clientId) : null}
        />
        <ServicesSection
          fields={fields}
          append={append}
          remove={remove}
          watch={watch}
          register={register}
          setValue={setValue}
          thicknessOptions={thicknessOptions}
          errors={errors}
        />
        <SummarySection />
        <div className="flex md:justify-end gap-4 bg-gray-darker p-4 rounded-lg border border-gray-dark shdow-lg">
          <button
            type="submit"
            disabled={creating}
            className="focus-visible px-4 py-2 rounded-lg bg-prim2 cursor-pointer text-gray-darker font-medium hover:opacity-90 transition min-w-32.5 flex justify-center items-center"
          >
            {creating ? <ButtonSpinner /> : "Criar O.S"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OsForm;
