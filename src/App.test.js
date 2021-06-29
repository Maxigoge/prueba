import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Titulo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Parcial 3 - IdS - 2021/i);
  expect(linkElement).toBeInTheDocument();
});
