import React from "react";

import s from "./NewEvent.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";
import { createEvent, registerUser } from "../../services/api";
import { toast } from "react-toastify";

const NewEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    const { email, nameOrganizer, name, description, date } = data;
    registerUser({ email, name: nameOrganizer })
      .then((response) => {
        console.log(response.data);
        const organizer = response.data._id;
        console.log(organizer);
        createEvent({ name, description, date, organizer });
      })
      .catch((error) => {
        toast.error("Submission error:", error);
      })
      .finally(navigate("/"));
  };

  return (
    <div>
      <h1>Event registration</h1>
      <form onSubmit={handleSubmit(submit)} className={s.form}>
        <InputField
          id="email"
          name="email"
          type="email"
          label="Enter your email"
          placeholder="E-mail"
          register={register}
          error={errors.email?.message}
        />
        <InputField
          id="nameOrganizer"
          name="nameOrganizer"
          type="text"
          label="Enter your name"
          placeholder="Full name"
          register={register}
          error={errors.name?.message}
        />
        <InputField
          id="name"
          name="name"
          type="text"
          label="Enter name of event"
          placeholder="Name of event"
          register={register}
          error={errors.name?.message}
        />
        <InputField
          id="description"
          name="description"
          type="text"
          label="Enter description"
          placeholder="Description"
          register={register}
          error={errors.name?.message}
        />
        <InputField
          id="date"
          name="date"
          type="date"
          label="Enter date"
          placeholder="date"
          register={register}
          error={errors.name?.message}
        />

        <button className={s.button}>Register</button>
      </form>
    </div>
  );
};

export default NewEvent;
