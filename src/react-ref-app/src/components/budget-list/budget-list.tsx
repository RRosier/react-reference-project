import * as React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '@fluentui/react-components';
import { budgetItem, budgetItemColumn } from '@/models/budget-item.model';

export interface IBudgetListProps { items: budgetItem[], columns: budgetItemColumn[] }

interface IState { items?: budgetItem[], columns?: budgetItemColumn[] };

export const BudgetList = (props: IBudgetListProps) => {

    const [state, setState] = React.useState<IState>({});

    React.useEffect(() => {
        setState({ items: props.items, columns: props.columns });
    }, [props.items, props.columns]);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {state.columns?.map((column) => (
                        <TableHeaderCell key={column.columnKey}>
                            {column.label}
                        </TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {state.items?.map((item) => (
                    <TableRow>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.notes}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};