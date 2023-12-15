import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { getSession } from 'services/store';

import { Types } from '.';

interface State {
	isLoading: boolean;
	user: Types.IEntity.User | null;
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
	const { accessToken } = getSession();

	const [state, setState] = React.useState<State>({ isLoading: !!accessToken, user: null });

	useEffect(() => {
		const request = async () => {
			const user = getSession();

			console.log(user);

			setState({ user, isLoading: false });
		};

		request();
	}, []);

	return [state, setState];
};

export default useProfile;
