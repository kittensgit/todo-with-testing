import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';
import "@testing-library/jest-dom/extend-expect";

const toggleTodo = jest.fn();
const removeTodo = jest.fn();

describe('Todo component', () => {
    it('click on title', () => {
        render(
            <Todo
                title="to buy a shampoo"
                id="todo-1"
                toggleTodo={toggleTodo}
            />
        );
        const paragraph = screen.getByText('to buy a shampoo');
        userEvent.click(paragraph);
        expect(toggleTodo).toHaveBeenCalledTimes(1)
    });
    it('snapshot Todo', () => {
        const todo = render(<Todo
            title="to buy a shampoo"
            id="todo-1"
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            complete={false}
        />)
        expect(todo).toMatchSnapshot()
    })
});

// хотела сделать проверку наличие класса после клика, но увы не вышло