import { useState } from "react";
import EmailsSection from "./EmailSection";
import FormHeader from "./FormHeader";
import MainDataSection from "./MainDataSection";
import PhoneSection from "./PhoneSection";
import ChargeSection from "./ChargeSection";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email_primary: "",
    email_secondary: "",
    phone_primary: "",
    phone_secondary: "",
    charge: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl">
      <form className="flex flex-col gap-6">
        <FormHeader />
        <MainDataSection formData={formData} handleChange={handleChange} />
        <EmailsSection formData={formData} handleChange={handleChange} />
        <PhoneSection formData={formData} handleChange={handleChange} />
        <ChargeSection formData={formData} handleChange={handleChange} />
        <div className="flex md:justify-end gap-4 bg-gray-darker p-4 rounded-lg border border-gray-dark shdow-lg">
          <button
            type="button"
            className="px-4 py-2 cursor-pointer rounded-lg bg-gray-dark text-gray-medium hover:bg-gray-700 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-prim2 cursor-pointer text-gray-darker font-medium hover:opacity-90 transition"
          >
            Salvar Cliente
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
