export interface User {}
export interface User {
	readonly id: number;
	readonly email: string;
	readonly name: string;
	readonly isOnline: boolean;
	readonly photo?: string | null;
}
