/**
 * @jest-environment jsdom
 */

// not sure where to put this input. not working in tests-setup.ts file.
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';

describe('description', () => {
    it('test', () => {
        expect(true).toBe(true);
    });
});