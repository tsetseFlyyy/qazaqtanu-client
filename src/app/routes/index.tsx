import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>text</h1>
      <h1>dwada</h1>
      <h1>dwada</h1>
      <h1>dwada</h1>
      <h1>dwada</h1>
      <h1>dwada</h1>
      <h1>dwada</h1>
    </div>
  );
}
