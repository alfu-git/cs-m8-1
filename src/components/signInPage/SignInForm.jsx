"use client";
import React, { useState } from "react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const SignInForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email(
      {
        email: userData.email,
        password: userData.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          alert("Sign In Successful!");
        },
        onError: (str) => {
          alert(str.error.message);
        },
      },
    );
  };

  return (
    <div className="border p-4 rounded-lg shadow-xl">
      <Form className="flex w-96 flex-col gap-4 " onSubmit={onSubmit}>
        {/* email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        {/* password */}
        <TextField name="password">
          <Label>Password</Label>

          <InputGroup>
            <InputGroup.Input
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
