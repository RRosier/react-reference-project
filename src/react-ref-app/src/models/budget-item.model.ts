export interface budgetItem {
    date: string;
    category: string;
    amount: number;
    notes?: string;
};

export interface budgetItemColumn {
    columnKey: string;
    label: string;
}