import { useBudgetService } from "./budget.service";

describe('getEntries', () => {
    it('get list of budget entries', async () => {
        const { getEntries } = useBudgetService();
        const entries = await getEntries();
        expect(entries.length).toBe(3);
    });
});