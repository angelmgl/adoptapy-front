import Link from "next/link";

export default function Layout({ children }) {
    return(
        <main>
            <Link href="/">
                <a>AdoptaPy</a>
            </Link>
            {children}
        </main>
    )
}