import { LinkType } from "@/types/link.types";
import Link from "next/link";

type MenuProps = {
    links: LinkType[]
}

const Menu = ({links}: MenuProps) => {
    return <nav className="flex flex-col w-full">
        <ul className="mb-4 w-full">
            {links && links.map((link, index) => 
            <li key={`menu-link-${index}`}
                className="text-2xl w-full hover:bg-blue-400 hover:text-white">
                <Link href={link.href} className="p-2 w-full flex">{link.title}</Link>
            </li> 
            )}
        </ul>
        <button className="button-primary">Postear</button>
    </nav>
}

export default Menu;