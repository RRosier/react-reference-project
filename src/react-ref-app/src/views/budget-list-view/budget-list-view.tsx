import * as React from 'react';
import * as styles from './budget-list-view.styles';
import { BudgetList } from '@/components/budget-list/budget-list';

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
        <>
            <h1>Budget list view</h1>
            <BudgetList items={items} columns={columns} />
        </>
    );
};