import * as React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '@fluentui/react-components';
import * as styles from './budget-list-view.styles';

export interface IBudgetListViewProps { }

interface IState { }

/** View that list all budget entries by month. */
export const BudgetListView = (props: IBudgetListViewProps) => {

    const items = [
        { date: '2024-04-10', category: 'food', amount: -24.32, notes: '' },
        { date: '2024-04-17', category: 'food', amount: 200, notes: 'salary' },
        { date: '2024-04-18', category: 'clothing', amount: -59.55, notes: '' }
    ];
    const columns = [
        { columnKey: "date", label: "Date" },
        { columnKey: "category", label: "Category" },
        { columnKey: "amount", label: "Amount" },
        { columnKey: "notes", label: "Notes" }
    ];

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHeaderCell key={column.columnKey}>
                            {column.label}
                        </TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map((item) => (
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