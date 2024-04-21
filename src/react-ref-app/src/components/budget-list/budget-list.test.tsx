/**
 * @jest-environment jsdom
 */

// not sure where to put this input. not working in tests-setup.ts file.
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BudgetList } from './budget-list';

describe('budget list rendering', () => {

    it('render empty list', () => {
        render(<BudgetList />);
        expect(screen.getByText(/No entries/)).toBeInTheDocument();
    });

    it('render entries list', () => {
        const items = [
            { date: '2024-04-10', category: 'food', amount: -24.32, notes: '' },
            { date: '2024-04-17', category: 'food', amount: 200, notes: 'salary' },
            { date: '2024-04-18', category: 'clothing', amount: -59.55, notes: '' }
        ];
        render(<BudgetList items={items} />);
        expect(screen.getByRole('table')).toBeInTheDocument();
    });
});