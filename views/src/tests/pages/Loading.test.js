import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from '../../components/Loading';

test('shows loading image', () => {
    render(<Loading />);
    const loadingImage = screen.getByAltText(/logo/i);
    expect(loadingImage).toBeInTheDocument();
});

test('shows loading text', () => {
    render(<Loading />);
    const loadingText = screen.getByText(/loading.../i);
    expect(loadingText).toBeInTheDocument();
});