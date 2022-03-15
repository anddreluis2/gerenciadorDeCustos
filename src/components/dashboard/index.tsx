import { Container } from "./styles";
import { Summary } from "../Summary/Index";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}