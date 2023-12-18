import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { getSession } from 'services/store';

import { Types } from '.';

interface State {
	isLoading: boolean;
	user: Types.IEntity.User | null;
}

const useProfile = (): [State, Dispatch<SetStateAction<State>>] => {
	const user = getSession();

	const [state, setState] = React.useState<State>({ isLoading: !!user, user: null });

	useEffect(() => {
		const request = async () => {
			setState({ user, isLoading: false });
		};

		if (user) request();
	}, []);

	return [state, setState];
};

export default useProfile;
