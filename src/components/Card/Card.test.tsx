import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe('Name of the group', () => {
  test('should ', () => {
    render(
      <BrowserRouter>
        <Card category="man" img="" to="" />
      </BrowserRouter>

    )
    expect(screen.getByText("man")).toBeInTheDocument()
  
  });
});