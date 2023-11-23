// import { renderWithRouter } from '../utils/renderWithRouter';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('should show "Vite + React" text', () => {
  render(<App />);
  // renderWithRouter(<App />);

  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
