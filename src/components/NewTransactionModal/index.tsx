import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './style';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

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
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título'>

                </input>
                <input type="number" placeholder='Valor'>
                </input>

                <TransactionTypeContainer>
                    <button
                        type='button'
                    >
                        <img src={IncomeImg} alt='Botão de entrada' />
                        <span>Entrada</span>
                    </button>

                    <button
                        type='button'
                    >
                        <img src={OutcomeImg} alt='Botão de saida' />
                        <span>Saida</span>
                    </button>

                </TransactionTypeContainer>


                <input placeholder='Categoria'>

                </input>
                <button type='submit'>
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}
