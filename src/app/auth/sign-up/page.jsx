import SignUpForm from "@/components/signUpPage/SignUpForm";
import React from "react";

export const metadata = {
  title: "Auth-SignUp",
};

const SignUpPage = () => {
  return (
    <section className="py-10">
      <div>
        <h2 className="mb-5 text-3xl font-medium text-center">
          Please Sign Up
        </h2>

        <div className="flex justify-center">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
