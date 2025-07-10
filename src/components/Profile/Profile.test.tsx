import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Profile from "./Profile.tsx";
import styles from "./Profile.module.css";

describe("Profile component", () => {
    it('should show underage label for a minor', () => {
        render(<Profile name={"Peter"} age={12} imageUrl={"https://placehold.co/600x400"}/>);

        expect(screen.queryByText("Underage")).toBeInTheDocument();
    });
    it("should not show underage label for an adult", () => {
        render(<Profile name={"Peter"} age={18} imageUrl={"https://placehold.co/600x400"}/>);

        expect(screen.queryByText("Underage")).not.toBeInTheDocument()
    });
    it("should show the name of the user", () => {
        render(<Profile name={"Peter"} age={18} imageUrl={"https://placehold.co/600x400"}/>);

        expect(screen.getByText("Peter")).toBeInTheDocument();
    });
    it("should show the age of the user", () => {
        render(<Profile name={"Peter"} age={18} imageUrl={"https://placehold.co/600x400"}/>);

        expect(screen.getByText("Age: 18")).toBeInTheDocument();
    });
    it("should have the class 'specialCard' if the name is 'Mary'", () => {
        const {container} = render(<Profile name={"Mary"} age={42} imageUrl={"https://placehold.co/600x400"}/>);

        const card = container.firstChild;

        expect(card).toHaveClass(styles.specialCard);
    });
    it("should not have the class 'specialCard' if the name is not 'Mary'", () => {
        const {container} = render(<Profile name={"John"} age={35} imageUrl={"https://placehold.co/600x400"}/>);

        const card = container.firstChild;

        expect(card).not.toHaveClass(styles.specialCard);
    });
})