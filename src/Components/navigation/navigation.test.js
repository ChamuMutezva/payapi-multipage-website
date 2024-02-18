import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";

test("Navigation list items", () => {
    render(
        <Router>
            <Navigation />
        </Router>
    );
    const homeLink = screen.getByText("payapi home");
    expect(homeLink).toBeInTheDocument();
});
