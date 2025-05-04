import { UserDropdown } from '@/features/auth/components/user-dropdown'

export const Navbar = () => {
    return (
        <nav className="py-4 bg-green-300">
            <ul>
                <h1 className="font-bold text-2xl">Magical Apothecary</h1>
            </ul>
            <ul>
                <h3 className="font-bold">Potion Inventory Management System</h3>
            </ul>
            <ul>
                <UserDropdown />
            </ul>
        </nav>
    )
}