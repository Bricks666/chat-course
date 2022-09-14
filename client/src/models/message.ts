export interface Message {
	readonly id: number;
	readonly senderId: number;
	readonly senderName: string;
	readonly senderPhoto?: string;
	readonly content: string;
	readonly sendedAt: string;
}
