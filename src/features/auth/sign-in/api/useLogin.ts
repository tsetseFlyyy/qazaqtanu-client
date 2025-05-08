// src/features/auth/sign-in/api/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { httpClient } from "@/shared/api/http";

type LoginPayload = {
  email: string;
  password: string;
};

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginPayload) =>
      httpClient("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        withAuth: false,
      }),
  });
}
