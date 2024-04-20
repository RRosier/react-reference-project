import * as React from 'react';
import { Spinner } from '@fluentui/react-components';
import { BudgetList } from '@/components/budget-list/budget-list';
import { useBudgetService } from '@/services';
import { budgetItem } from '@/models';

export interface IBudgetListViewProps { }

interface IState {
    items: budgetItem[];
    loading: boolean;
}

/** View that list all budget entries by month. */
export const BudgetListView = (props: IBudgetListViewProps) => {
    const [state, setState] = React.useState<IState>({ items: [], loading: true });
    const _service = useBudgetService();

    const columns = [
        { columnKey: "date", label: "Date" },
        { columnKey: "category", label: "Category" },
        { columnKey: "amount", label: "Amount" },
        { columnKey: "notes", label: "Notes" }
    ];

    React.useEffect(() => {
        const loadEntries = async () => {
            _service.getEntries()
                .then(items => {
                    setState(prevState => { return { ...prevState, items: items }; });
                })
                .finally(() => setState(prevState => { return { ...prevState, loading: false }; }));
        };
        // const loadEntries = async () => {
        //     const items = await _service.getEntries();
        //     setState(prevState => { return { ...prevState, items: items, loading: false }; });
        // };

        loadEntries();
    }, []);

    return (
        <>
            <h1>Budget Entries List</h1>
            {state.loading && <Spinner labelPosition="before" label="Loading entries..." />}
            {!state.loading && <BudgetList items={state.items} columns={columns} />}
        </>
    );
};