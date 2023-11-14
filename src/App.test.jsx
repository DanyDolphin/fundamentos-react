import { render, screen } from "@testing-library/react";
import ReactDOM from 'react-dom'

import App from "./App";

describe("App", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => element);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it("renders App component", async () => {
    render(<App />);
    const linkElement = await screen.findByText(/Kaliteye hoşgeldiniz/i);
    expect(linkElement).toBeInTheDocument();
  });
});
