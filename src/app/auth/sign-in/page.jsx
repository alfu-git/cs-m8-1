import SignInForm from "@/components/signInPage/SignInForm";
import React from "react";

export const metadata = {
  title: "Auth-SignIn",
};

const SignInPage = () => {
  return (
    <section className="py-10">
      <div>
        <h2 className="mb-5 text-3xl font-medium text-center">
          Please Sign In
        </h2>

        <div className="flex justify-center">
          <SignInForm />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
