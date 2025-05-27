import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí enviarías el mensaje via fetch o axios
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name", { required: true })} placeholder="Tu nombre" />
      {errors.name && <span className="text-red-500">Este campo es requerido</span>}

      <input {...register("email", { required: true })} placeholder="Tu email" type="email" />
      {errors.email && <span className="text-red-500">Email inválido</span>}

      <textarea {...register("message", { required: true })} placeholder="Tu mensaje"></textarea>
      {errors.message && <span className="text-red-500">Por favor escribe un mensaje</span>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;