/**
 * @jest-environment node
 */

import React from 'react';
import renderer from 'react-test-renderer'

import Main from '../src/views/Main.jsx'


describe('Main view', () =>  {
    it('Has only 2 childs', () => {
        jest.useFakeTimers();
        const tree = renderer.create(<Main />).toJSON();
        expect(tree.children.length).toBe(2);
    })
})