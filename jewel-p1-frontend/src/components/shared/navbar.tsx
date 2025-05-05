import { UserDropdown } from '@/features/auth/components/user-dropdown'

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: '#283618', color: '#FEFAE0'}}>
            <div>
                <h1 className="font-bold text-2xl">Magical Apothecary</h1>
                <h3 className="font-bold text-sm italic">Potion Inventory Management System</h3>
            </div>
            <UserDropdown />
        </nav>
    );
}
