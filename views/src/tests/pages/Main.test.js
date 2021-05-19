import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// NavBar tests
import NavBar from '../../components/NavBar';
/*
test('shows home button', () => {
    render(<NavBar />);
    const homeButton = screen.findByAltText("Website Logo");
    expect(homeButton).toBeInTheDocument();
});
*/

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

// Item tests
import Item from '../../components/Item';

/*
test('shows item seller text', () => {
    render(<Item />);
    const itemSellerText = screen.getByText(/Seller: /i);
    expect(itemSellerText).toBeInTheDocument();
})
*/

