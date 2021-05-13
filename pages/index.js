import Link from "next/link";
import CustomHead from "../components/CustomHead";
import Layout from "../components/Layout";

export default function Home() {
    return(
        <>
            <CustomHead 
                title="AdoptaPy"
                description="Sitio web para adoptar animalitos en Paraguay"
                keywords="Paraguay, perritos, gatitos, adoptar"
            />
            <Layout>
                <h1>AdoptaPy</h1>
                <Link href="adoptar">
                    <a>Quiero adoptar animalitos</a>
                </Link>
                <Link href="dar-en-adopcion">
                    <a>Quiero dar en adopción</a>
                </Link>
                <Link href="perdidos">
                    <a>Perdí a mi mascota</a>
                </Link>
                <Link href="encontrados">
                    <a>Encontré una mascota perdida</a>
                </Link>
            </Layout>
        </>
    )
}