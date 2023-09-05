import LoginScheme from '@/schemes/login.scheme';
import {describe, expect, test} from '@jest/globals';
import { ValidationError } from 'yup';

describe('LoginScheme', () => {
    describe('cuando hay username y password', () => {
        test('debe resolver la validacion sin errores', async () => {
            const {username, password} = await LoginScheme.validate({
                username: 'anakin',
                password: 'Test123'
            })
            expect(username).toBe('anakin')
            expect(password).toBe('Test123')
        });
    });
    describe('cuando no hay username', () => {
        test('debe tirar un validation error', async () => {
            const t = async () => {
                await LoginScheme.validate({password: 'Test 123'})
            }
            await expect(t).rejects.toThrowError(ValidationError)
        });
    });
    describe('cuando no hay password', () => {
        test('debe tirar un validation error', async () => {
            const t = async () => {
                await LoginScheme.validate({username: 'anakin'})
            }
            await expect(t).rejects.toThrowError(ValidationError)
        });
    });
});