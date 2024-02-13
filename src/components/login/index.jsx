"use client";

import * as components from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

const LoginComponent = () => {
  const router = useRouter();
  const cookies = useCookies();

  const schema = yup
    .object({
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
      const res = await axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
        method: "POST",
        data: formdata,
      });
      console.log({ res });
      if (res.status === 200) {
        cookies.set("studentData", JSON.stringify(res.data.response));
        cookies.set("studentToken", res.data.response.token);
        toast.success("Login Successful!");
        router.push("/student");

        return;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="w-full">
      <div className="w-full lg:w-1/2 min-h-screen flex justify-center items-center">
        <div className="w-[90%] mx-auto max-w-[450px] p-5">
          <h1 className="text-center text-headingText font-semibold text-2xl md:text-3xl">
            Welcome back
          </h1>
          <p className="text-customGray500 text-center mt-3 text-base">
            Welcome back! Please enter your details.
          </p>

          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            <components.CustomInput
              errors={errors.email}
              name="email"
              placeholder="Enter your email"
              register={register}
              label="email"
            />

            <components.CustomInput
              errors={errors.password}
              name="password"
              placeholder="********"
              register={register}
              type="password"
              label="password"
            />

            <div className="w-full flex justify-between items-center">
              <div className="w-fit flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="accent-buttonColor"
                  id="remember"
                />

                <label
                  htmlFor="remember"
                  className="text-fontColor font-medium text-xs"
                >
                  Remember for 30 days
                </label>
              </div>

              <p className="m-0 p-0 text-primaryPurple text-xs font-semibold">
                Forgot password?
              </p>
            </div>

            <components.AuthButton isLoading={isSubmitting} />
          </form>

          <div className="mt-10 w-full flex items-center text-customGray600 text-sm justify-center">
            <p className="">Don&apos;t have an account?</p>&nbsp;
            <Link href="/register" className="text-buttonColor font-semibold">
              Sign up.
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-1/2 bg-loginBg bg-no-repeat bg-cover hidden lg:block"></div>
    </section>
  );
};

export default LoginComponent;
