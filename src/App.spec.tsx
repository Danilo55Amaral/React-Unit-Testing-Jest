import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// test('sun', () => {
//     const { getByText } = render(<App />)

//     expect(getByText('Hello World')).toBeInTheDocument()
// })

// // Posso utilizar o toHaveAttribute para verificar se meu h1 tem alguma classe esspecifica.
// test('sun', () => {
//     const { getByText } = render(<App />)

//     expect(getByText('Hello World')).toHaveAttribute('class', 'test')
// })


// verificando se os items da minha lista estão sendo exibidos em tela

describe('App Component', () => {
    it('should render list items', () => {
        const { getByText } = render(<App />) 

        expect(getByText('Julia')).toBeInTheDocument()
        expect(getByText('Danilo')).toBeInTheDocument()
        expect(getByText('Clara')).toBeInTheDocument()
    });

    // testando a funcionalidade do botão Adicionar e utilizando o fireEvent
    it('should be able to add new item to the list', () => {
        const { getByText } = render(<App />)

        const addButton = getByText('Adicionar');

        userEvent.click(addButton);

        expect(getByText('Novo')).toBeInTheDocument()
    });
});