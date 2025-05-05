import React from 'react'
import { Potion } from '../models/potion';

interface PotionItemProps {
    potion: Potion;
}

export const PotionItem = ({ potion }: PotionItemProps) => {
    return (
        <div className="w-[300px] h-[200px] rounded-md p-10 border shadow-md hover:scale-105 transiton-all duration-300 ease-in-out">
            <div>
                <p className="font-bold text-xl capitalize">{potion.name}</p>
                <p className="italic">{potion.category} Potion</p>
                <p>{potion.stock} potion(s) in stock</p>
                <p>Seller: {potion.seller}</p>
            </div>
        </div>
    )
}