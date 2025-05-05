import { PotionItem } from '@/features/potions/components/potion-item';
import { useGetPotions } from '@/features/potions/hooks/use-get-potions';
import { createFileRoute, Link} from '@tanstack/react-router'

export const Route = createFileRoute("/(auth)/_auth/")({
  component: Index,
})

function Index() {
    const { data: potions } = useGetPotions();
    return (
        <div className="grid grid-cols-3 gap-4">
            {potions?.map((pot) => (
                <Link key={pot.id} to="/potion/$potionId" params= {{
                    potionId: pot.id.toString(),
                }}>
                    <PotionItem  potion={pot} />
                </Link>
            ))}

        </div>
    )
}

function useAddPotion(): { data: any; } {
    throw new Error('Function not implemented.');
}
