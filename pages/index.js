import Link from "next/link";
import CustomHead from "../components/CustomHead";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <>
            <CustomHead
                title="AdoptaPy - Home"
                description="Sitio web para adoptar animalitos en Paraguay"
                keywords="Paraguay, perritos, gatitos, adoptar"
            />
            <Layout>
                <h1>Bienvenido a AdoptaPY</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>

                <h2>¿Qué deseas hacer?</h2>

                <div className="page-cards grid">
                    <div className="page-card">
                        <Link href="/adoptar">
                            <a>Quiero adoptar animalitos.</a>
                        </Link>
                    </div>

                    <div className="page-card">
                        <Link href="/dar-en-adopcion">
                            <a>
                                Tengo un animalito y quiero darlo en adopción.
                            </a>
                        </Link>
                    </div>

                    <div className="page-card">
                        <Link href="/perdidos">
                            <a>¡Ayuda! Perdí a mi mascota.</a>
                        </Link>
                    </div>

                    <div className="page-card">
                        <Link href="/encontrados">
                            <a>Encontré una mascota perdida</a>
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    );
}
