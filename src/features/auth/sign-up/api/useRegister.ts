import { useMutation } from "@tanstack/react-query";
import { httpClient } from "@/shared/api/http";

export function useRegister() {
  return useMutation({
    mutationFn: (data) =>
      httpClient("api/registration", {
        method: "POST",
        body: JSON.stringify(data),
        withAuth: false,
      }),
  });
}
