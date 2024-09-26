import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import InputField from "../InputField/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioButton from "../RadioButton/RadioButton";
import { registerSchema } from "../../Schemas/registerSchema";

import s from "./Registration.module.css";
import { registerUser } from "../../services/api";

const Registration = () => {
  const { eventId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    registerUser({ ...data, eventId })
      .then((response) => {
        if (!response.error) {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Submission error:", error);
      });
  };
  return (
    <div>
      <h1>Event registration</h1>
      <form onSubmit={handleSubmit(submit)}>
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
          id="name"
          name="name"
          type="text"
          label="Enter your name"
          placeholder="Full name"
          register={register}
          error={errors.name?.message}
        />
        <fieldset className={s.fieldsetGender}>
          <legend className={s.legend}>Your gender identity</legend>
          <RadioButton
            id="Social media"
            name="heardAbout"
            value="Social media"
            label="Social media"
            register={register}
            defaultChecked="true"
          />
          <RadioButton
            id="Friends"
            name="heardAbout"
            value="Friends"
            label="Friends"
            register={register}
          />
          <RadioButton
            id="Found myself"
            name="heardAbout"
            value="Found myself"
            label="Found myself"
            register={register}
          />
        </fieldset>
        <button className={s.button}>Register</button>
      </form>
    </div>
  );
};

export default Registration;
