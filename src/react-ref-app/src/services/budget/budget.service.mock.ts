import { budgetItem } from "@/models";

/**
 * mock implementations for the various budget service functions.
 */
export const budgetGetEntriesMock = jest.fn(() => Promise.resolve<budgetItem[]>([]));

export const useBudgetServiceMock = ({
    getEntries: budgetGetEntriesMock
});