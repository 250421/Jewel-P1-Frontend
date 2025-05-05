import { useGetPotions } from '@/features/potions/hooks/use-get-potions';
import { createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute("/(auth)/_auth/")({
  component: Index,
})

function Index() {
    const { data: potions } = useGetPotions();
    return (
        <div>
            {potions?.map((pot) => (
                <div key={pot?.id}>
                    <p>{pot?.name}</p>
                    <p>{pot?.category}</p>
                    <p>{pot?.stock}</p>
                    <p>{pot?.seller}</p>
                </div>
            ))}

        </div>
    )
}

function useAddPotion(): { data: any; } {
    throw new Error('Function not implemented.');
}
