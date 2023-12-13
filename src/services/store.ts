import store from 'store2';
import config from 'config';

interface Tokens {
	access: string;
	reflesh: string;
}

export const getSession = (): Tokens => store.get(config.api.sessionKEY) || {};

export const clearSession = () => store.remove(config.api.sessionKEY)!;

export const setSession = (tokens: Tokens) => store.set(config.api.sessionKEY, tokens);
