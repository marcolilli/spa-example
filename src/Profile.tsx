import type {FC} from "react";

interface ProfileProps {
    name: string;
    age: number;
    imageUrl: string;
}

const Profile: FC<ProfileProps> = ({name, age, imageUrl}) => {
    if (name === "marco") {
        return null;
    }

    return (
        <div className={"card"}>
            <img src={imageUrl} alt="Profile"/>
            <h3>{name}</h3>
            <p>Age: {age}</p>
        </div>
    )
}
export default Profile;