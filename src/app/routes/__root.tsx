import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AppShell } from "@mantine/core";
import HeaderMain from "@/widgets/header/HeaderMain";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <AppShell>
        <HeaderMain />
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </React.Fragment>
  );
}
