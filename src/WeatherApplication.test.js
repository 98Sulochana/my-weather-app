import { render, screen } from '@testing-library/react';
import WeatherApplication from './WeatherApplication';

test('renders learn react link', () => {
  render(<WeatherApplication />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
