import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddTodo from "./AddTodo";
import userEvent from "@testing-library/user-event";

const addTodo = jest.fn()

describe('AddTodo comp', () => {
    it('check btn', () => {
        render(<AddTodo addTodo={addTodo} />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    it('check placeholder', () => {
        render(<AddTodo addTodo={addTodo} />)
        expect(screen.getByPlaceholderText(/enter task/i)).toBeInTheDocument()
    })
    it('snapshot AddTodo', () => {
        const comp = render(<AddTodo addTodo={addTodo} />)
        expect(comp).toMatchSnapshot()
    })
    it('check press enter', () => {
        render(<AddTodo addTodo={addTodo} />)
        const input = screen.getByRole('textbox')
        userEvent.type(input, '{enter}')
        expect(addTodo).toHaveBeenCalledTimes(1)
    })
})