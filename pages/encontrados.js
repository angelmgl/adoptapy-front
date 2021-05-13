import CustomHead from "../components/CustomHead";
import Layout from "../components/Layout";

export default function Encontrados() {
    return (
        <>
            <CustomHead
                title="Encontrados - AdoptaPy"
                description="Animalitos perdidos encontrados en Paraguay"
                keywords="Paraguay, perritos, gatitos, perdidos"
            />
            <Layout>
                <h1>Animalitos encontrados</h1>
            </Layout>
        </>
    );
}
