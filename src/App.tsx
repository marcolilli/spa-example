import Profile from "./Profile.tsx";

type Profiles = Array<{
    name: string;
    age: number;
    imageUrl: string;
}>

const profiles: Profiles = [
    {
        name: "Mary",
        age: 42,
        imageUrl: "https://placehold.co/600x400"
    },
    {
        name: "John",
        age: 35,
        imageUrl: "https://placehold.co/600x400"
    },
    {
        name: "Mike",
        age: 28,
        imageUrl: "https://placehold.co/600x400"
    }
]

export default function App() {
    return (
        <div className={"page-content"}>
            <div className={"card-grid"}>
                {profiles.map((p, index) => {
                    return (
                        <Profile name={p.name} age={p.age} imageUrl={p.imageUrl} key={index}/>
                    )
                })}
            </div>
        </div>
    );
}