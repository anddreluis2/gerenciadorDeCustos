import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './style';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState, useContext } from 'react';
import { api } from '../../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

Modal.setAppElement('#root')

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault()

        createTransaction({
            title,
            amount: value,
            category,
            type,
        })

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt='Fechar Modal' />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título' value={title} onChange={e => setTitle(e.target.value)} />
                <input type="number" placeholder='Valor' value={value} onChange={e => setValue(+e.target.value)} />
                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={IncomeImg} alt='Botão de entrada' />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={OutcomeImg} alt='Botão de saida' />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder='Categoria' value={category} onChange={e => setCategory(e.target.value)} />
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}
