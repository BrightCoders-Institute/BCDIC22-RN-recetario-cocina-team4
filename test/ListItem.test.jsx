import React from 'react';
import { render } from '@testing-library/react-native'
import ListItem from '../src/components/ListItem.jsx'

let component;

describe('ListItem component:', () => {
    beforeEach(() => {
        component = render(<ListItem />)
    })

    it('The list is rendered in the application', () => {
        expect(component).toBeDefined()
    })
})