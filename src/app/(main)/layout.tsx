import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const UsersLayout: FC<PropsWithChildren> = ({children}) => {
    return <>
        <header className="flex justify-between mb-4 px-8 py-4 bg-gray-100">
          <div>
            LOGO
          </div>
          <div className="flex">
            <div>
              <Link href="/users">Usuarios</Link>
            </div>
            <div className="ml-4">
              <Link href="/messages">Mensajes</Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <div>
          PIE DE PAGINA MAIN
        </div>
    </>
}

export default UsersLayout;