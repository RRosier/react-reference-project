import * as React from 'react';
import { DatePicker, } from '@fluentui/react-datepicker-compat';
import { Field } from '@fluentui/react-components';
import { format } from 'date-fns';

export interface IMonthPickerProps {
    initialDate?: Date,
    onSelectedMonth?: (date: Date) => void
}

interface IState { date: Date };

/** Allow to select a specific month and year. */
export const MonthPicker = (props: IMonthPickerProps) => {
    const today = new Date();
    const [state, setState] = React.useState<IState>({ date: props.initialDate ?? new Date(today.getFullYear(), today.getMonth(), 1) });

    const _dateSelected = (date: Date | null | undefined) => {
        console.debug('date selected triggered')
        if (date) {
            setState({ date: date });
            props.onSelectedMonth?.call(this, date);
        }
    };

    const _formatDate = (date: Date | undefined) => {
        return !date
            ? ""
            : format(date, "MMMM yyyy");
    };

    return (
        <Field label={"Select a month"}>
            <DatePicker
                initialPickerDate={state.date}
                value={state.date}
                onSelectDate={_dateSelected}
                formatDate={_formatDate} />
        </Field>
    );
};