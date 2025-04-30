import SignInPage from "@/pages/auth/sign-in/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in")({
  component: SignInPage,
});
