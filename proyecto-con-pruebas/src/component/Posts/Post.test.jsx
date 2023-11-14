import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Posts from './Posts';
import 'whatwg-fetch'

describe('Posts', () => {
    it('renders posts if request succeeds', async () => {
        // Precondicion
        render(<Posts/>);

        // Condicion
        const listItems = await screen.findAllByRole('listitem');
        
        // Postcondicion
        expect(listItems).not.toHaveLength(0);
    });

    it('render pots with request mocked', async () => {
        // Precondicion
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => ({
                results: [
                    {
                        id: 1,
                        name: 'Fake name'
                    }
                ]
            })
        });
        render(<Posts/>);

        // Condicion
        const listItems = await screen.findAllByRole('listitem');
        
        // Postcondicion
        expect(listItems).not.toHaveLength(0);
    })
});