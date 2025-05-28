import type {FC} from "react";
import styles from "./Profile.module.css";
import cn from "classnames";

interface ProfileProps {
    name: string;
    age: number;
    imageUrl: string;
}

const Profile: FC<ProfileProps> = ({name, age, imageUrl}) => {
    const handleClick = () => {
        alert(`You clicked on the profile of ${name}!`);
    }

    return (
        <div className={cn(styles.card, name === "Mary" && styles.specialCard)}>
            <img src={imageUrl} alt="Profile"/>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            {age < 18 && <p>Underage</p>}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default Profile;