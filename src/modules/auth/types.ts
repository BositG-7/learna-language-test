export namespace IEntity {
	export interface User {
		email: string;
	}
}

export namespace IContext {
	export interface Auth {
		user: IEntity.User | null;
		isLoading: boolean;
		methods: {
			login: (user: IEntity.User) => void;
			logout: () => void;
		};
	}
}
