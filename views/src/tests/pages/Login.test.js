import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../../pages/Login';

test('shows home button', () => {
    render(<Login />);
    const homeButton = screen.getByAltText(/Website Logo/i);
    expect(homeButton).toBeInTheDocument();
});

test('shows website name', () => {
    render(<Login />);
    const websiteName = screen.getByText(/Phone Zone/i);
    expect(websiteName).toBeInTheDocument();
});

test('shows form title', () => {
    render(<Login />);
    const formTitle = screen.getAllByText(/^Login$/);
    expect(formTitle[0]).toBeInTheDocument();
});

test('shows email label', () => {
    render(<Login />);
    const emailLabel = screen.getByText(/^Email$/i);
    expect(emailLabel).toBeInTheDocument();
});

test('shows email input', () => {
    render(<Login />);
    const emailInput = screen.getByTitle(/email/i);
    expect(emailInput).toBeInTheDocument();
});

test('shows password label', () => {
    render(<Login />);
    const passwordLabel = screen.getByText(/Password$/i);
    expect(passwordLabel).toBeInTheDocument();
});

test('shows password input', () => {
    render(<Login />);
    const passwordInput = screen.getByTitle(/password$/i);
    expect(passwordInput).toBeInTheDocument();
});

test('shows password visibility label', () => {
    render(<Login />);
    const passwordVisibilityLabel = screen.getByText(/Toggle Password Visibility$/i);
    expect(passwordVisibilityLabel).toBeInTheDocument();
});

test('shows password visibility input', () => {
    render(<Login />);
    const passwordVisibilityInput = screen.getByTitle(/password-visibility$/i);
    expect(passwordVisibilityInput).toBeInTheDocument();
});

test('shows signup button', () => {
    render(<Login />);
    const signupButton = screen.getByText(/Create a new account$/i);
    expect(signupButton).toBeInTheDocument();
});