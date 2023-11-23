import { vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import newsMock from './mocks/newsMock';
import App from '../App';

const queryClient = new QueryClient();
const fetchMock = { json: async () => newsMock } as Response;

describe('Tests related with the header component', () => {
  it('Check if header title shows up correctly', () => {
    render(<QueryClientProvider client={ queryClient }><App /></QueryClientProvider>);

    const title = screen.getByText(/Trybe News/i);

    expect(title).toBeInTheDocument();
  });
});

// describe('Tests related with the main news component', () => {
//   afterEach(() => {
//     vi.clearAllMocks();
//   });
//
//   it('Tests if title is loaded correctly', async () => {
//     vi.spyOn(global, 'fetch').mockResolvedValue(fetchMock);
//     await act(async () => {
//       render(<QueryClientProvider client={ queryClient }><App /></QueryClientProvider>);
//     });
//
//     await screen.findByText(/IBGE/);
//   });
// });

describe('Tests related with the filters component', () => {
  it('Check if filter headers shows up correctly', () => {
    render(<QueryClientProvider client={ queryClient }><App /></QueryClientProvider>);

    const mostRecentButton = screen.getByText('Mais recentes');
    const newsButton = screen.getByText('Notícia');
    const releaseButton = screen.getByText('Release');
    const favoritesButton = screen.getByText('Favoritas');

    expect(mostRecentButton).toBeInTheDocument();
    expect(newsButton).toBeInTheDocument();
    expect(releaseButton).toBeInTheDocument();
    expect(favoritesButton).toBeInTheDocument();
  });
});
