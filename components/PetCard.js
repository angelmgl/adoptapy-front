import { FaCat, FaDog, FaBirthdayCake, FaMars, FaVenus } from "react-icons/fa";

const PetCard = ({ data }) => {
    return (
        <div className="pet-card">
            <div className="pet-card-head">
                <h2 className="pet-name">{data.petData.petName}</h2>
                {data.petData.petSpecie === "perro" ? (
                    <FaDog className="pet-specie" />
                ) : (
                    <FaCat className="pet-specie" />
                )}
                <img
                    src={data.petData.petPictures[0]}
                    alt={data.petData.petName}
                />
            </div>
            <div className="pet-card-body">
                <p className="cap">
                    <span className="bold">Raza:&nbsp;</span>
                    {data.petData.petBreed}
                </p>
                <p className="cap">
                    <span className="bold">Tamaño:&nbsp;</span>
                    {data.petData.petSize}
                </p>
                <div className="icons-container">
                    <p className="bold">
                        <FaBirthdayCake className="pet-icon" />
                        &nbsp;
                        {data.petData.petAge}
                    </p>
                    {data.petData.petSex === "macho" ? (
                        <FaMars className="pet-icon" />
                    ) : (
                        <FaVenus className="pet-icon" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PetCard;
