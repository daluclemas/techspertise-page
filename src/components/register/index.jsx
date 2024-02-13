"use client";

import * as components from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const schema = yup
    .object({
      firstname: yup.string().required("Please enter your name"),
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("Please enter your email address."),
      password: yup
        .string()
        .min(8)
        .max(32)
        .required("Please enter a valid password."),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formdata) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/signup`,
        formdata
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        router.push("/login");
        return;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="w-full">
      <div className="fixed left-0 top-0 bottom-0 w-[60%] bg-signupBg bg-no-repeat bg-cover hidden lg:block">
        <div className="h-full w-full bg-customGradient flex items-center">
          <article className="w-[90%] mx-auto">
            <figure className="m-0 p-0 w-[70px] h-[70px] bg-starsBg bg-no-repeat bg-center"></figure>

            <h2 className="text-white mt-6 max-w-[600px] w-full text-6xl leading-[1.5]">
              Start turning your ideas into reality.
            </h2>
            <p className="max-w-[600px] w-full text-lg text-white">
              Create a free account and get full access to all features for
              30-days. No credit card needed. Trusted by over 4,000
              professionals.
            </p>
          </article>
        </div>
      </div>
      <div className="w-full lg:w-[40%] ml-auto min-h-screen flex justify-center items-center">
        <div className="w-[90%] mx-auto max-w-[400px] p-5">
          <h1 className=" text-headingText font-semibold text-2xl md:text-3xl">
            Sign up
          </h1>

          <form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
            <components.CustomInput
              errors={errors.fullName}
              name="firstname"
              placeholder="Enter your name"
              register={register}
              label="name"
              isRequired={true}
              type="text"
            />
            <components.CustomInput
              errors={errors.email}
              name="email"
              placeholder="Enter your email"
              register={register}
              label="email"
              isRequired={true}
            />

            <components.CustomInput
              errors={errors.password}
              name="password"
              placeholder="********"
              register={register}
              type="password"
              label="password"
              isRequired={true}
            />

            <div className="mt-10 w-full">
              <components.AuthButton
                text="Get started"
                isLoading={isSubmitting}
              />
            </div>
          </form>

          <div className="mt-10 w-full flex items-center text-customGray600 text-sm justify-center">
            <p className="">Already have an account?</p>&nbsp;
            <Link href="/login" className="text-buttonColor font-semibold">
              Log in.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
