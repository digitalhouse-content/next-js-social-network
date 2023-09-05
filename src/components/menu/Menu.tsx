"use client"
import { LinkType } from "@/types/link.types";
import Link from "next/link";
import { useRouter } from "next/navigation";

type MenuProps = {
    links: LinkType[]
}

const Menu = ({links}: MenuProps) => {
    const router = useRouter();
    
    const onGoToLink = (href: string) => {
        router.push(href);
        router.refresh();
    }

    return <nav className="flex flex-col w-full">
        <ul className="mb-4 w-full">
            {links && links.map((link, index) => 
            <li key={`menu-link-${index}`}
                className="text-2xl w-full hover:bg-blue-400 hover:text-white">
                <div onClick={() => onGoToLink(link.href) } className="p-2 w-full flex">
                    {link.title}
                </div>
            </li> 
            )}
        </ul>
        <button className="button-primary">Postear</button>
    </nav>
}

export default Menu;