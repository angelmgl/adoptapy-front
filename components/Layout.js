import Link from "next/link";

export default function Layout({ children }) {
    return (
        <main>
            <header>
                <Link href="/">
                    <img
                        className="logo"
                        src="/img/adoptapy.png"
                        alt="AdoptaPy"
                    />
                </Link>
            </header>

            <main className="container">{children}</main>

            <footer>
                <img className="adoptapy-icon" src="/img/icon.png" alt="AdoptaPy Icon" />
                <span>AdoptaPY 2021&copy;</span>
            </footer>
        </main>
    );
}
