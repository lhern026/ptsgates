"use client";

import ReactDOM from "react-dom";
import ContactForm from "../../components/contact-form";

import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <h1>hello</h1>
      <div className="bg-slate-600">
        <ContactForm />
      </div>
    </>
  );
}
