import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/recovery-password')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/recovery-password"!</div>
}
