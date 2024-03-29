import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField } from '@mui/material';
import axios from 'axios';

interface TranslatorProps {}

const Translator: FunctionComponent<TranslatorProps> = () => {
	const navigete = useNavigate();

	const [country1, setCountry1] = useState('English');
	const [country2, setCountry2] = useState('Uzbek');
	const [translate, setTranslator] = useState('');

	const handleChange = async (value: string) => {
		try {
			const { data }: any = await axios.get(`https://api.mymemory.translated.net/get?
            q=${value}&langpair=${country1 === 'English' ? 'en-US' : 'uz-UZ'}|${country2 === 'English' ? 'en-US' : 'uz-UZ'}`);

			setTranslator(data.matches[0].translation);
		} catch (error: any) {
			console.log(error);
		}
	};

	return (
		<>
			<Container
				sx={{
					width: '95%',
					background: 'white',
					height: '50vh',
					marginBottom: '20px',
					marginTop: '20px',
					padding: '24px',
					boxShadow: '0px 2px 6px 0px rgba(0,0,0,.16)',
					border: '1px solid transparent',
					borderRadius: '16px',
					paddingTop: '0'
				}}
				maxWidth="xl">
				<Box gap={5} display="flex" justifyContent="center" alignItems="center" mt={5}>
					<Button
						sx={{
							background: '#f7f9fa',
							borderRadius: '16px',
							padding: '20px 16px',
							width: '144px',
							cursor: 'pointer',
							position: 'relative'
						}}>
						{country1}
					</Button>

					<svg
						onClick={() => {
							setCountry1(country1 === 'English' ? 'Uzbek' : 'English');
							setCountry2(country2 === 'Uzbek' ? 'English' : 'Uzbek');
							handleChange(translate);
						}}
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.15901 4.53269C9.45321 4.24111 9.45533 3.76624 9.16374 3.47204C8.87216 3.17784 8.39729 3.17573 8.10309 3.46731L6.66195 4.89565C6.12577 5.42704 5.67859 5.87022 5.35974 6.26724C5.02532 6.68367 4.77095 7.12131 4.70298 7.6545C4.62006 8.30512 5.15962 8.75 5.68248 8.75H19.4312C19.8454 8.75 20.1812 8.41421 20.1812 8C20.1812 7.58579 19.8454 7.25 19.4312 7.25H6.49484C6.50592 7.23578 6.5174 7.22128 6.52928 7.20649C6.78838 6.88386 7.17374 6.50033 7.74864 5.93054L9.15901 4.53269Z"
							fill="#2D264B"
						/>
						<path
							d="M5.43115 15.25C5.01694 15.25 4.68115 15.5858 4.68115 16C4.68115 16.4142 5.01694 16.75 5.43115 16.75H18.5677C18.5566 16.7642 18.5451 16.7787 18.5333 16.7935C18.2742 17.1161 17.8888 17.4997 17.3139 18.0695L15.9035 19.4673C15.6093 19.7589 15.6072 20.2338 15.8988 20.528C16.1904 20.8222 16.6653 20.8243 16.9595 20.5327L18.4006 19.1044C18.9368 18.573 19.384 18.1298 19.7028 17.7328C20.0372 17.3163 20.2916 16.8787 20.3596 16.3455C20.3625 16.3222 20.3652 16.299 20.3676 16.2757C20.4287 15.6728 19.9331 15.25 19.4312 15.25H5.43115Z"
							fill="#2D264B"
						/>
					</svg>

					<Button
						sx={{
							background: '#f7f9fa',
							borderRadius: '16px',
							padding: '20px 16px',
							width: '144px',
							cursor: 'pointer',
							position: 'relative'
						}}>
						{country2}
					</Button>
				</Box>
				<Box display="flex" justifyContent="center" alignItems="center" width="100%">
					<TextField
						onChange={e => {
							handleChange(e.target.value);
						}}
						style={{ width: '50%', borderRadius: '12px' }}
						placeholder="Enter word"
						multiline
						rows={2}
					/>
					<TextField value={translate} style={{ width: '50%' }} multiline rows={2} />
				</Box>
			</Container>
		</>
	);
};

export default Translator;
