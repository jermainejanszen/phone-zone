import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from '../../pages/Signup';

test('shows home button', () => {
    render(<Signup />);
    const homeButton = screen.getByAltText(/Website Logo/i);
    expect(homeButton).toBeInTheDocument();
});

test('shows website name', () => {
    render(<Signup />);
    const websiteName = screen.getByText(/Phone Zone/i);
    expect(websiteName).toBeInTheDocument();
});

test('shows form title', () => {
    render(<Signup />);
    const formTitle = screen.getByText(/Create your account/i);
    expect(formTitle).toBeInTheDocument();
});

test('shows first name label', () => {
    render(<Signup />);
    const firstNameLabel = screen.getByText(/First Name/i);
    expect(firstNameLabel).toBeInTheDocument();
});

test('shows first name input', () => {
    render(<Signup />);
    const firstNameInput = screen.getByTitle(/firstname/i);
    expect(firstNameInput).toBeInTheDocument();
});

test('shows last name label', () => {
    render(<Signup />);
    const lastNameLabel = screen.getByText(/Last Name/i);
    expect(lastNameLabel).toBeInTheDocument();
});

test('shows last name input', () => {
    render(<Signup />);
    const lastNameInput = screen.getByTitle(/lastname/i);
    expect(lastNameInput).toBeInTheDocument();
});

test('shows email label', () => {
    render(<Signup />);
    const emailLabel = screen.getByText(/Email/i);
    expect(emailLabel).toBeInTheDocument();
});

test('shows email input', () => {
    render(<Signup />);
    const emailInput = screen.getByTitle(/email/i);
    expect(emailInput).toBeInTheDocument();
});

test('shows password label', () => {
    render(<Signup />);
    const passwordLabel = screen.getByText(/Password$/i);
    expect(passwordLabel).toBeInTheDocument();
});

test('shows password input', () => {
    render(<Signup />);
    const passwordInput = screen.getByTitle(/password$/i);
    expect(passwordInput).toBeInTheDocument();
});

test('shows password hint', () => {
    render(<Signup />);
    const passwordHint = screen.getByText(/at least 8 characters/i);
    expect(passwordHint).toBeInTheDocument();
});

test('shows password visibility label', () => {
    render(<Signup />);
    const passwordVisibilityLabel = screen.getByText(/Toggle Password Visibility$/i);
    expect(passwordVisibilityLabel).toBeInTheDocument();
});

test('shows password visibility input', () => {
    render(<Signup />);
    const passwordVisibilityInput = screen.getByTitle(/password-visibility$/i);
    expect(passwordVisibilityInput).toBeInTheDocument();
});

test('shows login button', () => {
    render(<Signup />);
    const loginButton = screen.getByText(/Login here$/i);
    expect(loginButton).toBeInTheDocument();
});