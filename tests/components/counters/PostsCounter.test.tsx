import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import PostCounter from '@/components/counters/PostsCounter';

describe('PostsCounters', () => {
    describe('cuando el contador es 0', () => {
        test('debe devolver un component vacio', async () => {
            render(<PostCounter count={0} />)
            expect(screen.queryByText('0 posteo')).not.toBeInTheDocument()
        });
    });
    describe('cuando el contador es 1', () => {
        test('debe devolver un mensaje en singular', async () => {
            render(<PostCounter count={1} />)
            expect(screen.getByText('1 posteo')).toBeInTheDocument()
        });
    });
    describe('cuando el contador es mayor a 1', () => {
        test('debe devolver un mensaje en plural', async () => {
            render(<PostCounter count={2} />)
            expect(screen.getByText('2 posteos')).toBeInTheDocument()
        });
    });
});