import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
describe('App component test', () => {
    test('Title exists', () => {
        render(<App/>);
        const title = screen.getByText('Bienvenidos');
        expect(title).toBeInTheDocument();
    });
})
