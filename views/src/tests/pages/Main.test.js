import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Home tests
import Home from '../../components/Home';

test('shows sold out soon text', () => {
    render(<Home />);
    const soldOutText = screen.getByText(/Sold Out Soon/i);
    expect(soldOutText).toBeInTheDocument();
});

test('shows best sellers text', () => {
    render(<Home />);
    const bestSellersText = screen.getByText(/Best Sellers/i);
    expect(bestSellersText).toBeInTheDocument();
})

// Search tests
import Search from '../../components/Search';

test('shows search results text', () => {
    render(<Search />);
    const searchResultsText = screen.getByText(/Search Results/i);
    expect(searchResultsText).toBeInTheDocument();
})

