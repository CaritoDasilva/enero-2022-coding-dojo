/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from "./Home";

describe('Home component test', () => {
    test('Title exists', () => {
        render(<Home/>);
        const title = screen.getByText('Bienvenidos');
        expect(title).toBeInTheDocument();
    })
    test('form works correctly', async () => {
        const { debug } = render(<Home />);
        const inputComment = await screen.findByRole('textbox');
        expect(inputComment).toBeInTheDocument();
        fireEvent.change(inputComment, { target: { value: 'textTest' } });
        expect(inputComment.value).toBe('textTest');
        const buttonSubmit = await screen.findByRole('button');
        expect(buttonSubmit).toBeInTheDocument();
        fireEvent.click(buttonSubmit);
        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(screen.getByText('textTest')).toBeInTheDocument();
        // eslint-disable-next-line testing-library/no-node-access
        const deleteBtn = document.getElementById('delete-btn');
        fireEvent.click(deleteBtn);
        // expect(editBtn).not.toBeInTheDocument();
        fireEvent.change(inputComment, { target: { value: 'soy un comentario' } });
        fireEvent.click(buttonSubmit);
        const editBtn = document.getElementById('edit-btn');
        fireEvent.click(editBtn);
        fireEvent.change(inputComment, { target: { value: 'soy otro comentario' } });
        fireEvent.click(buttonSubmit);
        debug();
        // expect(await screen.getB('soy un comentario')).not.toBeVisible();
        expect(await screen.findByText('soy otro comentario')).toBeInTheDocument();
    });
})

