import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

interface LanguageProps {}

const Language: FunctionComponent<LanguageProps> = () => {
	const { language } = useParams();

	return (
		<>
			<h1>{language}</h1>
		</>
	);
};

export default Language;
