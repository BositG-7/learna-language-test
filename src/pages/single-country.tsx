/* eslint-disable no-nested-ternary */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Modal, Typography } from '@mui/material';
import config from 'config';
import { clearPrognos, getPrognos, setPrognos } from 'services/store';

import { Rating } from 'components';
import CircularWithValueLabel from 'components/prognos';

interface SingleCountryProps {}

const SingleCountry = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigete = useNavigate();

	const [data, setData] = useState<{ title: string; right: string; varinats: string[] }>({
		title: '',
		right: '',
		varinats: ['', '']
	});
	const [dataIdx, setDataIdx] = useState(getPrognos().length ? (getPrognos().length <= 9 ? getPrognos().length : 0) : 0);
	const [disabled, setDisabled] = useState(false);
	const [checkwinner, setCheckWinner] = useState('');

	const [isWinner, setisWinner] = useState(false);
	const [prognosValue, setPrognosValue] = useState(getPrognos().length ? (getPrognos().length <= 9 ? getPrognos().length * 10 : 0) : 0);

	useEffect(() => {
		if (getPrognos().length > 9) {
			clearPrognos();
		}

		const quetions = config.data.quetions[dataIdx];

		setData(quetions);
	}, [dataIdx]);

	const handleReset = () => {
		setDataIdx(0);
		setDisabled(false);
		setCheckWinner('');

		setisWinner(false);
		setPrognosValue(0);
		clearPrognos();
	};

	const handleClick = (value: string) => {
		if (value === data.right) {
			setCheckWinner('togri');
			setDisabled(true);
		} else {
			setCheckWinner('notogri');
			setDisabled(true);
		}
		const oldData = getPrognos();

		oldData.push(value);
		setPrognos(oldData);
	};
	const handleNext = () => {
		setDisabled(false);
		setCheckWinner('');
		if (dataIdx >= 9) {
			setisWinner(true);
			return;
		}

		setPrognosValue(prognosValue + 10);

		setDataIdx(dataIdx + 1);
	};

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 500,
		bgcolor: '#fff',
		boxShadow: 24,
		padding: '24px',
		borderRadius: '24px'
	};

	if (isWinner) {
		return (
			<>
				<Rating onReset={handleReset} />
			</>
		);
	}

	return (
		<>
			<Container
				className="contaner1"
				sx={{
					width: '95%',
					background: 'white',
					marginBottom: '20px',
					marginTop: '20px',
					height: '90vh',
					padding: '24px',
					boxShadow: '0px 2px 6px 0px rgba(0,0,0,.16)',
					border: '1px solid transparent',
					borderRadius: '16px',
					minHeight: 'calc(100vh - 48px)',
					'@media (max-width:600px)': {
						height: '140vh'
					}
				}}
				maxWidth="xl">
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
					<CircularWithValueLabel value={prognosValue} />
				</Box>

				<Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
					<Box>
						<Button onClick={handleOpen}>
							<img src="https://web-student.inter-nation.uz/icons/close1.svg" alt="" />
						</Button>
						<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
							<Box sx={style}>
								<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
									<Typography fontSize="24px" width="calc(100% - 32px)" color="#090a0a">
										{' '}
										Are you sure to quit?
									</Typography>
									<img
										onClick={handleClose}
										style={{ cursor: 'pointer' }}
										src="https://web-student.inter-nation.uz/icons/close1.svg"
										alt=""
									/>
								</Box>
								<p
									style={{
										textAlign: 'center',
										fontWeight: 400,
										fontSize: '16px',
										lineHeight: '24px',
										color: '#72777a',
										marginTop: '8px'
									}}>
									It will slow down your progress.
								</p>

								<Box justifyContent="center" alignItems="center">
									<img
										style={{ marginLeft: '100px' }}
										width={270}
										height={140}
										src="https://web-student.inter-nation.uz/images/hmm.webp"
										alt=""
									/>
								</Box>
								<Box gap={1} mt={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
									<Button
										onClick={handleClose}
										sx={{
											background: '#ffcf00',
											borderRadius: '16px',
											fontSize: '14px',
											padding: '24px',
											width: '50%',
											color: '#090A0A'
										}}>
										Continue
									</Button>
									<Button
										sx={{
											background: '#F7F9FA',
											borderRadius: '16px',
											fontSize: '14px',
											padding: '24px',
											width: '50%',
											color: '#090A0A'
										}}
										onClick={() => {
											navigete(-1);
										}}>
										Quit
									</Button>
								</Box>
							</Box>
						</Modal>
					</Box>
					<Box
						sx={{ border: '1px solid black', padding: '12px', borderRadius: '8px', fontWeight: '500px', fontSize: '16px', lineHeight: '24px' }}>
						Vocabulary
					</Box>
					<Box
						sx={{ border: '1px solid black', padding: '12px', borderRadius: '8px', fontWeight: '500px', fontSize: '16px', lineHeight: '24px' }}>
						{`${dataIdx + 1}/10`}
					</Box>
				</Box>
				<Box mt={3} sx={{ fontSize: '18px', lineHeight: '20px', fontWeight: '700px', color: '#404446' }} color="#404446">
					Please, learn new word attentively
				</Box>
				<Box mt={3} sx={{ border: '1px solid #e3e5e6', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
					<img src="https://web-student.inter-nation.uz/images/word.png" alt="" />
				</Box>
				<h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em' }}>{data.title}</h2>

				<Grid mt={5} container spacing={2}>
					{data?.varinats?.map((item, idx) => (
						// eslint-disable-next-line react/jsx-key
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Button
								onClick={() => {
									handleClick(item);
								}}
								disabled={disabled}
								sx={{
									width: '100%',
									padding: '24px',
									borderRadius: '12px',
									border: '2px solid transparent',
									fontSize: '16px',
									fontWeight: '500px',
									lineHeight: '16px',
									boxShadow: '0px 2px 6px 0px rgba(0,0,0,.16)',
									background: '#fff',
									userSelect: 'none',
									color: '#090a0a'
								}}>
								{item}
							</Button>
						</Grid>
					))}
				</Grid>
				{checkwinner === 'togri' ? (
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
							bgcolor: '#ECFCE5',
							borderRadius: '12px'
						}}
						height={116}
						paddingRight={8}
						paddingLeft={8}
						mt={5}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '50px'
							}}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									gap: '20px'
								}}>
								<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="24" cy="24" r="24" fill="#23C16B" />
									<path
										d="M32.5762 19.4802C32.8414 19.1619 32.7984 18.689 32.4802 18.4239C32.1619 18.1587 31.689 18.2017 31.4239 18.5199L26.0332 24.9887C24.9503 26.2881 24.1886 27.1994 23.5279 27.796C22.8826 28.3787 22.4373 28.5639 22 28.5639C21.5628 28.5639 21.1174 28.3787 20.4721 27.796C19.8114 27.1994 19.0497 26.2881 17.9669 24.9887L16.5762 23.3199C16.311 23.0017 15.8381 22.9587 15.5199 23.2239C15.2017 23.489 15.1587 23.9619 15.4239 24.2802L16.8531 25.9953C17.8884 27.2376 18.7175 28.2326 19.4668 28.9092C20.2409 29.6082 21.0322 30.0639 22 30.0639C22.9679 30.0639 23.7591 29.6082 24.5332 28.9092C25.2826 28.2326 26.1116 27.2377 27.1469 25.9953L32.5762 19.4802Z"
										fill="white"
									/>
								</svg>
								<Typography
									sx={{
										fontWeight: '700px',
										fontSize: '18px',
										lineHeight: '18px',
										color: '#00c853'
									}}>
									Correct answer
								</Typography>
							</Box>
						</Box>
						<Button
							onClick={handleNext}
							sx={{
								fontSize: '14px',
								height: '68px',
								display: 'inline-flex',
								alignItems: 'center',
								borderRadius: '16px',
								justifyContent: 'center',
								position: 'relative',
								padding: '0px 26px !important',
								outline: 'none !important',
								backgroundColor: '#00c853',
								width: '30%',
								color: '#fff'
							}}>
							Next
						</Button>
					</Box>
				) : checkwinner === 'notogri' ? (
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
							bgcolor: '#ffe5e5',
							borderRadius: '12px'
						}}
						height={116}
						paddingRight={8}
						paddingLeft={8}
						mt={5}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '50px'
							}}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									gap: '20px'
								}}>
								<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="24" cy="24" r="24" fill="#FF5247" />
									<path
										d="M31.5304 17.5303C31.8232 17.2374 31.8232 16.7626 31.5304 16.4697C31.2375 16.1768 30.7626 16.1768 30.4697 16.4697L24 22.9394L17.5303 16.4697C17.2374 16.1768 16.7626 16.1768 16.4697 16.4697C16.1768 16.7626 16.1768 17.2374 16.4697 17.5303L22.9394 24L16.4697 30.4697C16.1768 30.7626 16.1768 31.2374 16.4697 31.5303C16.7626 31.8232 17.2375 31.8232 17.5304 31.5303L24 25.0607L30.4697 31.5303C30.7626 31.8232 31.2374 31.8232 31.5303 31.5303C31.8232 31.2374 31.8232 30.7626 31.5303 30.4697L25.0607 24L31.5304 17.5303Z"
										fill="white"
									/>
								</svg>
								<Box>
									<Typography
										sx={{
											fontWeight: '700px',
											fontSize: '18px',
											lineHeight: '18px',
											color: '#ff5247'
										}}>
										Wrong answer
									</Typography>

									<Typography
										mt={1}
										sx={{
											'-webkit-user-select': 'none',
											'-moz-user-select': 'none',
											'user-select': 'none',
											display: 'inline-flex',
											gap: '4px',
											'font-weight': 500,
											'font-size': '14px',
											'line-height': '20px',
											color: '#ff5247'
										}}>
										Correct: {data.right}
									</Typography>
								</Box>
							</Box>
						</Box>
						<Button
							onClick={handleNext}
							sx={{
								fontSize: '14px',
								height: '68px',
								display: 'inline-flex',
								alignItems: 'center',
								borderRadius: '16px',
								justifyContent: 'center',
								position: 'relative',
								padding: '0px 26px !important',
								outline: 'none !important',
								backgroundColor: '#ff5247',
								width: '30%',
								color: '#fff'
							}}>
							Next
						</Button>
					</Box>
				) : (
					''
				)}
			</Container>
		</>
	);
};

export default SingleCountry;
