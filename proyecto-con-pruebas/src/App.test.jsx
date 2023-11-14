import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from './App'

describe('App', () => {
    beforeEach(() => {
        // Precondicion
        render(<App/>);
    })

    it('renders input', async () => {
        // Condicion
        const input = screen.getByPlaceholderText('title');
        // Postcondicion
        expect(input).toBeInTheDocument;
    });

    it('renders title with same value as input', async () => {
        const expectedValue = 'Hola Mundo';

        // Condicion
        const input = screen.getByPlaceholderText('title');
        expect(input).toBeInTheDocument;
        expect(input).toHaveValue('');

        await userEvent.type(input, expectedValue);
        expect(input).toHaveValue(expectedValue);

        // Postcondicion
        const title = screen.getByText(expectedValue);
        expect(title).toBeInTheDocument;
    });
})