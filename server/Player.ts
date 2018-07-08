import { v4 as uuid } from 'uuid';

export default class Player {
	socket: SocketIO.Socket;
	id: string;
	state: {
		x: number,
		y: number,
		z: number
	}
	constructor(socket: SocketIO.Socket) {
		this.socket = socket;
		this.id = uuid();
	}

	get shortId() {
		return this.id.split('-')[0];
	}
}