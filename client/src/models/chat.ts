export interface Chat {
	readonly id: number;
	readonly companionName: string;
	readonly companionPhoto?: string;
	readonly lastMessage: string;
	readonly lastActivityTime: string;
	readonly newMessageCount: number;
}
