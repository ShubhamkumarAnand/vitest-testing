interface User {
	username: string;
	name: string;
	projects: string[];
	coolness?: number;
	favoriteFood: string;
}

async function loadUser(username: string): Promise<User | undefined> {
	const users: User[] = [
		{
			username: 'imskanand',
			name: 'shubham',
			projects: ['buyzon', 'hindu-way'],
			favoriteFood: 'litti-chokha',
		},
		{
			username: 'satyamjee',
			name: 'satyam',
			projects: ['love', 'laugh'],
			favoriteFood: 'litti-chokha',
		},
	];

	return users.find((user) => user.username === username);
}

export async function loadUserData(username: string) {
	const user = await loadUser(username);
	if (!user) {
		throw new Error('No User Found');
	}
	user.coolness = username === 'imskanand' ? 100 : -1;
	return user;
}
