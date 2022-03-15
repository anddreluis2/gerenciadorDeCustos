import { Container } from "./styles";

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>Desenvolvimento web</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/03</td>
                    </tr>

                    <tr>
                        <td>PGTO</td>
                        <td className="withdraw">- R$ 1.100</td>
                        <td>Aluguel</td>
                        <td>05/03</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}