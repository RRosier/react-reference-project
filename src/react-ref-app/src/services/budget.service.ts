import { budgetItem } from '@/models';

const _budgetItems = [
    { date: '2024-04-10', category: 'food', amount: -24.32, notes: '' },
    { date: '2024-04-17', category: 'food', amount: 200, notes: 'salary' },
    { date: '2024-04-18', category: 'clothing', amount: -59.55, notes: '' }
];

/**
 * Service hook to handle budget entries.
 */
export const useBudgetService = () => {

    /**
     * Return all budget entries.
     */
    const getEntries = async (): Promise<budgetItem[]> => {
        return Promise.resolve(_budgetItems);
    };

    return {
        getEntries
    }
};