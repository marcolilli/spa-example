import type {FC} from "react";

interface ProfileProps {
    name: string;
    age: number;
}

const Profile: FC<ProfileProps> = ({name, age}) =>
    <div className={"card"}>
        <img src={"https://placehold.co/600x400"} alt="Profile" />
        <h3>{name}</h3>
        <p>Age: {age}</p>
    </div>

export default Profile;