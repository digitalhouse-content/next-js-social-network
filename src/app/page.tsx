import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <p>
          Hola Mundo
        </p>
        <div>
          <Link href="/users">Ver usuarios</Link>
        </div>
    </main>
  )
}
