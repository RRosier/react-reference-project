/**
 * @jest-environment jsdom
 */

// not sure where to put this input. not working in tests-setup.ts file.
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { budgetGetEntriesMock, useBudgetServiceMock } from '@/services/mocks';
import { BudgetListView } from './budget-list-view';

jest.mock('@/services', () => ({
    useBudgetService: () => useBudgetServiceMock
}));

beforeEach(() => {
    // reset any mock implementations.
    budgetGetEntriesMock.mockImplementation(() => Promise.resolve([]));
});

describe('view rendering', () => {
    it('render spinner while retrieving data', () => {
        render(<BudgetListView />);
        expect(screen.getByText(/Loading entries/)).toBeInTheDocument();
    });

    it('spinner not rendered after retrieving data', async () => {
        render(<BudgetListView />);

        // wait until the 'loading' spinner is gone after retrieving the data.
        await waitForElementToBeRemoved(() => screen.queryByText(/Loading entries/));

        expect(screen.queryByText(/Loading entries/)).toBeNull();

        /// this no longer works. setImmediate is from node. current runtime is jsdom.
        // setImmediate(() => {
        //     expect(screen.queryByText(/Loading entries/)).toBeNull();
        //     done();
        // });
    });

    it('display list of entries after loading', async () => {
        budgetGetEntriesMock.mockImplementation(() => Promise.resolve([{ date: '20-04-2024', category: 'food', amount: -13.34, notes: '' }]));
        render(<BudgetListView />);

        // wait until the 'loading' spinner is gone after retrieving the data.
        await waitForElementToBeRemoved(() => screen.queryByText(/Loading entries/));

        expect(screen.getByRole('table')).toBeInTheDocument();
    });
});