import { loadUserData } from './load-user-data';
import { describe, test, expect, vi } from 'vitest';

// vi.mock('./load-user-data', () => {
// 	return {
// 		loadUserData() {
// 			return {
// 				coolness: -1,
// 				favoriteFood: 'Boiled Vegetables',
// 				name: 'imskanand',
// 				projects: [],
// 				snack: false,
// 				username: 'fakeUser',
// 			};
// 		},
// 	};
// });

describe('loadUserData', () => {
	test('load user data as expected', async () => {
		const user = await loadUserData('imskanand');

		expect(user).toMatchInlineSnapshot(`
			{
			  "coolness": 100,
			  "favoriteFood": "litti-chokha",
			  "name": "shubham",
			  "projects": [
			    "buyzon",
			    "hindu-way",
			  ],
			  "snack": true,
			  "username": "imskanand",
			}
		`);
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
