import axios from "axios";
import CustomHead from "../components/CustomHead";
import Layout from "../components/Layout";
import PetCard from "../components/PetCard";

export default function Adoptar({ data }) {
    const pets = data.data.docs;

    return (
        <>
            <CustomHead
                title="Adoptar - AdoptaPy"
                description="Adoptar animalitos en Paraguay"
                keywords="Paraguay, perritos, gatitos, adoptar"
            />
            <Layout>
                <h1>Adoptar animalitos</h1>
                <div className="pet-grid">
                    {pets.map((pet) => {
                        return <PetCard data={pet} key={pet._id} />;
                    })}
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    const res = await axios.get("https://adoptapy.herokuapp.com/api/adoptions");
    const data = await res.data;

    return {
        props: {
            data,
        },
    };
}
