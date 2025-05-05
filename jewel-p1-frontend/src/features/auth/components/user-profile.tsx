import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const UserProfile = () => {

    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}