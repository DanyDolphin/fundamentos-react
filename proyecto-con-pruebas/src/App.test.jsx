import React from 'react'
import {render, screen} from '@testing-library/react'

import App from './App'

describe('App', () => {

    it('renders app components', async () => {
        // Precondicion
        render(<App/>);
        // Condicion
        const title = screen.getByText('Hello world');
        // Postcondicion
        expect(title).toBeInTheDocument;
    })
})