import axios, { AxiosResponse } from 'axios';

import config from '../config';

import { getSession } from './store';

export { AxiosError } from 'axios';

const http = axios.create({ baseURL: config.api.baseURL });

http.interceptors.request.use(
	(request: { headers: any }) => {
		const { access } = getSession();

		request.headers = {
			...request.headers,
			...(access ? { Authorization: `Bearer ${access}` } : {})
		};

		return request;
	},
	(error: any) => Promise.reject(error)
);

http.interceptors.response.use(null, err => {
	const response = err?.response || ({} as AxiosResponse);

	const { data } = response || {};

	return Promise.reject(response);
});

export default http;
