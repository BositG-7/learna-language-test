import store from 'store2';
import config from 'config';

interface Tokens {
	access: string;
	reflesh: string;
}

export const getSession = (): any => store.get(config.api.sessionKEY) || {};

export const clearSession = () => store.remove(config.api.sessionKEY)!;

export const setSession = (tokens: any) => store.set(config.api.sessionKEY, tokens);

export const getId = (): any => store.get(config.api.key) || 0;

export const clearId = () => store.remove(config.api.key)!;

export const setId = (tokens: any) => store.set(config.api.key, tokens);

export const getPrognos = (): any => store.get(config.api.progos) || [];

export const clearPrognos = () => store.remove(config.api.progos)!;

export const setPrognos = (tokens: any) => store.set(config.api.progos, tokens);
