import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Rating from '../../components/Rating';

test('shows correct ratings 1', () => {
    render(<Rating rating="3" />);
    const ratingText = screen.getAllByAltText(/unfilled star/i);
    expect(ratingText.length == 2)
});

test('shows correct ratings 2', () => {
    render(<Rating rating="4" />);
    const ratingText = screen.getAllByAltText(/filled star/i);
    expect(ratingText.length == 4)
});