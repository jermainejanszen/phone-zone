import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from '../../components/Card';

const mockItem = {
    brand: "Apple",
    price: 123.00,
    title: "iPhone 11 Pro 256GB",
    reviews: [{
        rating: 4
    },{
        rating: 3
    },{
        rating: 5
    }]
}

test('shows phone image', () => {
    render(<Card item={mockItem} />);
    const cardImage = screen.getByAltText(/the phone/i);
    expect(cardImage).toBeInTheDocument();
});

test('shows brand', () => {
    render(<Card item={mockItem} />);
    const cardBrand = screen.getByText(/apple/i);
    expect(cardBrand).toBeInTheDocument();
});

test('shows phone price', () => {
    render(<Card item={mockItem} />);
    const cardPrice = screen.getByText(/\$123/i);
    expect(cardPrice).toBeInTheDocument();
});

test('shows phone title', () => {
    render(<Card item={mockItem} />);
    const cardTitle = screen.getByText(/iPhone 11 Pro 256GB/i);
    expect(cardTitle).toBeInTheDocument();
});