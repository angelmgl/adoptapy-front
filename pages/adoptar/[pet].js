import { useRouter } from "next/router";
import axios from "axios";
import {
    FaDog,
    FaCat,
    FaMapMarkedAlt,
    FaBirthdayCake,
    FaVenus,
    FaMars,
} from "react-icons/fa";
import CustomHead from "../../components/CustomHead";
import Layout from "../../components/Layout";

export default function Pet({ data }) {
    const router = useRouter();
    const { petData, petContact } = data.data;

    return (
        <>
            <CustomHead
                title={petData.petName}
                description={`Adoptar un ${petData.petSpecie} ${petData.petBreed} en ${petData.petCity}.`}
                keywords={`adoptar, ${petData.petSpecie}, ${petData.petCity}, ${petData.petBreed}`}
            />
            <Layout>
                <div className="pet-page grid">
                    <div className="pet-picture">
                        {petData.petPictures.map((pic) => (
                            <img
                                src={pic}
                                alt={data.data.petData.petName}
                                key={Date.now()}
                            />
                        ))}
                    </div>
                    <div className="pet-data">
                        <div className="flex">
                            <h2>{petData.petName}</h2>
                            {petData.petSpecie === "perro" ? (
                                <FaDog className="pet-icon" />
                            ) : (
                                <FaCat className="pet-icon" />
                            )}
                        </div>
                        <div className="flex">
                            <p>
                                <FaMapMarkedAlt className="pet-icon" />
                                &nbsp;{petData.petCity}
                            </p>
                            <p>
                                <FaBirthdayCake className="pet-icon" />
                                &nbsp;{petData.petAge}
                            </p>
                            {petData.petSex === "macho" ? (
                                <FaMars className="pet-icon" />
                            ) : (
                                <FaVenus className="pet-icon" />
                            )}
                        </div>
                        <p>{petData.petDescription}</p>
                        <div className="flex">
                            <p className="cap">
                                <span className="bold">Tamaño:</span>{" "}
                                {petData.petSize}
                            </p>
                            <p className="cap">
                                <span className="bold">Raza:</span>{" "}
                                {petData.petBreed}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <h2>¿Te interesa {petData.petName}?</h2>
                    <p className="tcenter">Contacta con {petContact.name}: {petContact.number}</p>
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const res = await axios.get(
        `https://adoptapy.herokuapp.com/api/adoptions/${params.pet}`
    );
    const data = await res.data;

    return {
        props: {
            data,
        },
    };
}
