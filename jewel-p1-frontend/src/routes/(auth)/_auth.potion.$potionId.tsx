import { useGetPotionById } from '@/features/potions/hooks/use-get-potion-by-id';
import { createFileRoute, useParams } from '@tanstack/react-router'
import { Loader2 } from 'lucide-react';

export const Route = createFileRoute('/(auth)/_auth/potion/$potionId')({
  component: PotionIdPage,
})

function PotionIdPage () {
  const { potionId } = useParams({
    from: "/(auth)/_auth/potion/$potionId",
  });
  const { data: potion, isLoading: isPotionLoading } = useGetPotionById({
    id: potionId,
  })
  
  if (isPotionLoading) {
    return (
      <div className="flex items-center h-screen justify-center">
        <Loader2 className="size-8 animate-spin" />
      </div>
    )
  };

  if (!potion) {
    return <h1>No potion found.</h1>
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="w-[300px] rounded-xl p-6 text-center space-y-3">
        <p className="text-xl font-bold">{potion?.name}</p>
        <p className="italic">{potion.category} Potion</p>
        <hr className="border-t" />
        <p>{potion.stock} potion(s) in stock</p>
        <p>Seller: {potion.seller}</p>
      </div>
    </div>
  );
  
}
