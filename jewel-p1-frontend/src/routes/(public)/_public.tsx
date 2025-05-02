import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/_public')({
  component: PublicLayout,
})

function PublicLayout() {
  return <div>Hello "/(public)/_public"!</div>
}

