import CustomHead from "../components/CustomHead";
import Layout from "../components/Layout";
import axios from "axios";

export default function Adoptar({ data }) {
    return (
        <>
            <CustomHead
                title="Adoptar - AdoptaPy"
                description="Adoptar animalitos en Paraguay"
                keywords="Paraguay, perritos, gatitos, adoptar"
            />
            <Layout>
                <h1>Adoptar animalitos</h1>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    const res = await axios.get("https://adoptapy.herokuapp.com/api/adoptions");
    const data = await res.data;
    console.log(data);
    return {
        props: {
            data
        }
    }
}