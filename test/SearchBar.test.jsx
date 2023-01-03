import React from 'react';
import { render } from '@testing-library/react-native'
import SearchBar from '../src/components/SearchBar.jsx'

let component;

describe('SearchBar component', () => {
    beforeEach(() => {
        component = render(<SearchBar />)
    })

    it('The search bar is rendered in the application', () => {
        expect(component).toBeDefined()
    })
})