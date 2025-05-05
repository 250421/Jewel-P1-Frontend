import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserProfile } from './user-profile'
import { useSignOut } from "../hooks/use-sign-out";
import { LogOut, Plus } from "lucide-react";
import { useState } from "react";
import { AddPotionDialog } from "@/features/potions/components/add-potion-dialog";
  

export const UserDropdown = () => {
    const [openAddPotionDialog, setOpenAddPotionDialog] = useState(false);
    const { mutate: signOut } = useSignOut();
    
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <UserProfile />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setOpenAddPotionDialog(true)}>
                    <Plus className="size-4 mr-2" />
                        Add Potion</DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut className="size-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AddPotionDialog 
                open={openAddPotionDialog} 
                setOpen={setOpenAddPotionDialog}
            />
        </>
    );
    
}