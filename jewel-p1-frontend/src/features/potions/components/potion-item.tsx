import { Potion } from '../models/potion';
import { useDeletePotion } from '../hooks/use-delete-potion';
import { Link } from '@tanstack/react-router';

interface PotionItemProps {
    potion: Potion;
}

export const PotionItem = ({ potion }: PotionItemProps) => {
    const deletePotion = useDeletePotion();

    return (
        <div className="w-[300px] h-[200px] rounded-md p-10 border shadow-md hover:scale-105 transiton-all duration-300 ease-in-out">
            <div>
                <Link
                    to="/potion/$potionId"
                    params={{ potionId: potion.id.toString() }}
                    className="font-bold text-xl capitalize block hover:underline"
                >
                    <p className="font-bold text-xl capitalize">{potion.name}</p>
                </Link>
                <p className="italic">{potion.category} Potion</p>
                <hr className="color-foreground h-2"></hr>
                <p>{potion.stock} potion(s) in stock</p>
                <p>Seller: {potion.seller}</p>
            </div>

            <button className="mt-4 self-end text-sm px-3 py-1 bg-[#283618] text-[#FEFAE0] rounded-md hover:opacity-90 transition">
                Update
            </button>
            <button
                onClick={() => deletePotion.mutate(potion.id)}
                className="m-2 mt-4 self-end text-sm px-3 py-1 bg-[#283618] text-[#FEFAE0] rounded-md hover:opacity-90 transition"
                >
                Delete
            </button>

        </div>
        
    )
}