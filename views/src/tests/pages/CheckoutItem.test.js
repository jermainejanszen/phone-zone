import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Home tests
import CheckoutItem from '../../components/CheckoutItem';

const mockItem = {
    _id: 0,
    brand: "Apple",
    price: 123.00,
    title: "iPhone 11 Pro 256GB",
    quantity: 4,
    stock: 4,
    reviews: [{
        rating: 4
    },{
        rating: 3
    },{
        rating: 5
    }]
}

test('shows phone image', () => {
    render(<CheckoutItem item={mockItem} />);
    const cardImage = screen.getByAltText(/the phone/i);
    expect(cardImage).toBeInTheDocument();
});

test('shows brand', () => {
    render(<CheckoutItem item={mockItem} />);
    const cardBrand = screen.getByText(/apple/i);
    expect(cardBrand).toBeInTheDocument();
});

test('shows phone price', () => {
    render(<CheckoutItem item={mockItem} />);
    const cardPrice = screen.getByText(/\$123/i);
    expect(cardPrice).toBeInTheDocument();
});

test('shows phone title', () => {
    render(<CheckoutItem item={mockItem} />);
    const cardTitle = screen.getByText(/iPhone 11 Pro 256GB/i);
    expect(cardTitle).toBeInTheDocument();
});

test('shows stock remaining', () => {
    render(<CheckoutItem item={mockItem} />);
    const stockText = screen.getByText(/stock remaining/i);
    expect(stockText).toBeInTheDocument();
});

test('shows subtotal', () => {
    render(<CheckoutItem item={mockItem} />);
    const subtotalText = screen.getByText(/subtotal/i);
    expect(subtotalText).toBeInTheDocument();
});