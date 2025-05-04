import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { useAuth } from "../hooks/use-auth";

export const UserProfile = () => {
    // const { data: user } = useAuth();

    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}