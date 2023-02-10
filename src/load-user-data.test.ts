import { loadUserData } from './load-user-data';
import { describe, test, expect } from 'vitest';

describe('loadUserData', () => {
	test('load user data as expected', async () => {
		const user = await loadUserData('imskanand');
		expect(user).toMatchSnapshot();
	});

	test('Setting up the coolness correctly', async () => {
		const imskanand = await loadUserData('imskanand');
		const satyam = await loadUserData('satyamjee');

		expect(imskanand.coolness).toBe(100);
		expect(satyam.coolness).toBe(-1);
	});

	test('Throws the error which does not exists', async () => {
		expect(async () => await loadUserData('fakeUser')).rejects.toThrowError('No User Found');
	});
});
