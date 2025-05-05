import { Potion } from '../models/potion';
import { useDeletePotion } from '../hooks/use-delete-potion';

interface PotionItemProps {
    potion: Potion;
}

export const PotionItem = ({ potion }: PotionItemProps) => {
    const deletePotion = useDeletePotion();

    return (
        <div className="w-[300px] h-[200px] rounded-md p-10 border shadow-md hover:scale-105 transiton-all duration-300 ease-in-out">
            <div>
                <p className="font-bold text-xl capitalize">{potion.name}</p>
                <p className="italic">{potion.category} Potion</p>
                <hr className="color-foreground h-2"></hr>
                <p>{potion.stock} potion(s) in stock</p>
                <p>Seller: {potion.seller}</p>
            </div>

            <button
                onClick={() => deletePotion.mutate(potion.id)}
                className="mt-4 self-end text-sm px-3 py-1 transition"
            >
                Delete
            </button>
        </div>
        
    )
}