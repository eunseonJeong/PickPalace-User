import Link from "next/link";
import { NavLinks } from "./nav-links";
import { NavActions } from "./nav-actions";
import getCategories from "@/app/actions/get-categories";
import {Container} from "@/components/ui/container";

const Navbar = async () => {
    const categories = await getCategories();
    return (
        <div className="border-b">
            <Container>
                <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
                        <p className="text-xl font-bold">STORE</p>
                    </Link>
                    <NavLinks data={categories} />
                    <NavActions />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
