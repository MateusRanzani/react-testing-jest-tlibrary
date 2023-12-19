import { render } from "@testing-library/react";
import InitialPage from ".";

describe("Testing InitialPage component", () => {
  it("Get text", () => {
    const { getByText } = render(<InitialPage />);

    expect(getByText("Initial page")).toBeTruthy();
    expect(getByText("Initial page")).toBeInTheDocument();
  });
});
