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

    React.useEffect(() => {
        _service.getEntries()
            .then(items => {
                setState(prevState => { return { ...prevState, items: items }; });
            })
            .finally(() => setState(prevState => { return { ...prevState, loading: false }; }));
    }, []);

    return (
        <>
            <h1>Budget Entries List</h1>
            {state.loading && <Spinner labelPosition="before" label="Loading entries..." />}
            {!state.loading && <BudgetList items={state.items} />}
        </>
    );
};