import ExploreTrending from "@/components/explore/ExploreTrending";
import Menu from "@/components/menu/Menu";
import exploreApi from "@/services/explore/explore.service";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const LINKS = [{title: 'Inicio', href:'/'},
{title: 'Explorar', href: "/explorar"},
{title: 'Perfil', href: "/mi-perfil"}]

const UsersLayout: FC<PropsWithChildren> = async ({children}) => {
    const hashes = await exploreApi.getTrendingHashtags(0, 3);

    return <>
        <div className="w-full h-full grid grid-cols-12 gap-4 mx-4">
          <div className="col-span-3">
            <Menu links={LINKS}/>
          </div>
          <main className="col-span-6">{children}</main>
          <div className="col-span-3">
            <ExploreTrending hashes={hashes.content}/>
          </div>
        </div>
    </>
}

export default UsersLayout;