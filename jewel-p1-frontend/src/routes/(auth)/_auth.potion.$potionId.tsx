import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth/potion/$potionId')({
  component: PotionIdPage,
})

function PotionIdPage () {
  const { potionId } = useParams({
    from: "/(auth)/_auth/potion/$potionId",
  });
  
  return (
    <div>
      {potionId}
    </div>
  )
}
