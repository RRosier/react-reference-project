/**
 * @jest-environment jsdom
 */

// not sure where to put this input. not working in tests-setup.ts file.
import '@testing-library/jest-dom';
import * as React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MonthPicker } from './month-picker';

afterEach(() => {
    // unmount React trees that were mounted with render.
    cleanup();
});

describe('month picker rendering', () => {
    it('render picker', () => {
        render(<MonthPicker />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('render initial date', () => {
        const date = new Date(Date.parse('2024-04-22'));
        render(<MonthPicker initialDate={date} />);
        expect(screen.getByRole('combobox')).toHaveDisplayValue('April 2024');
    });

    it('call function on date change', () => {
        const selectedDate = Date.parse('2023-02-01');
        const onMonthChange = jest.fn();
        render(<MonthPicker onSelectedMonth={onMonthChange} />);

        // screen.debug();
        // TODO-rro: this event does not trigger the DatePicker.onSelectDate event.
        fireEvent.change(screen.getByRole('combobox'), {
            target: { value: selectedDate }
        });

        // screen.debug();
        expect(onMonthChange).toHaveBeenCalledTimes(1);
    });
});