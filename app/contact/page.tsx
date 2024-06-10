"use client";

import ReactDOM from "react-dom";
import ContactForm from "../../components/contact-form";

import { useForm, SubmitHandler } from "react-hook-form";

export default function App() {
  return (
    <>
      <div>
        <ContactForm />
      </div>
    </>
  );
}
