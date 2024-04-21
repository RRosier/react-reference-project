import * as React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '@fluentui/react-components';
import { budgetItem, budgetItemColumn } from '@/models/budget-item.model';

export interface IBudgetListProps { items?: budgetItem[], columns?: budgetItemColumn[] }

interface IState { items?: budgetItem[] };

const _columns = [
    { columnKey: "date", label: "Date" },
    { columnKey: "category", label: "Category" },
    { columnKey: "amount", label: "Amount" },
    { columnKey: "notes", label: "Notes" }
];

export const BudgetList = (props: IBudgetListProps) => {

    const [state, setState] = React.useState<IState>({});

    React.useEffect(() => {
        setState({ items: props.items });
    }, [props.items, props.columns]);

    return (
        <>
            {(state.items?.length || 0) > 0 ?
                <Table>
                    <TableHeader>
                        <TableRow>
                            {_columns?.map((column) => (
                                <TableHeaderCell key={column.columnKey}>
                                    {column.label}
                                </TableHeaderCell>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {state.items?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>{item.notes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                :
                <>No entries</>
            }
        </>
    );
};