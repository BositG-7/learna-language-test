/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Box, Button, Container, Modal, Typography } from '@mui/material';
import config from 'config';

import { Rating } from 'components';

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
	const [dataIdx, setDataIdx] = useState(0);
	const [disabled, setDisabled] = useState(false);
	const [checkwinner, setCheckWinner] = useState('');
	const [winnerRating, setWinnerRating] = useState(0);
	const [noWinnerRating, setNoWinnerRating] = useState(0);
	const [isWinner, setisWinner] = useState(false);

	useEffect(() => {
		const quetions = config.data.quetions[dataIdx];

		setData(quetions);
	}, [dataIdx]);

	const handleReset = () => {
		setDataIdx(0);
		setDisabled(false);
		setCheckWinner('');
		setWinnerRating(0);
		setNoWinnerRating(0);
		setisWinner(false);
	};

	const handleClick = (value: string) => {
		if (value === data.right) {
			setCheckWinner('togri');
			setDisabled(true);
			setWinnerRating(winnerRating + 1);
		} else {
			setCheckWinner('notogri');
			setDisabled(true);
			setNoWinnerRating(noWinnerRating + 1);
		}
	};
	const handleNext = () => {
		setDisabled(false);
		setCheckWinner('');
		if (winnerRating + noWinnerRating === 10) {
			setisWinner(true);
			return;
		}
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
				<Rating rating={winnerRating} onReset={handleReset} />
			</>
		);
	}

	return (
		<>
			<Container
				sx={{
					width: '95%',
					background: 'white',
					height: '100vh',
					marginBottom: '20px',
					marginTop: '20px',
					padding: '24px',
					boxShadow: '0px 2px 6px 0px rgba(0,0,0,.16)',
					border: '1px solid transparent',
					borderRadius: '16px',
					minHeight: 'calc(100vh - 48px)'
				}}
				maxWidth="xl">
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
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
											navigete('/');
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
				<Box mt={5} sx={{ fontSize: '18px', lineHeight: '20px', fontWeight: '700px', color: '#404446' }} color="#404446">
					Please, learn new word attentively
				</Box>
				<Box mt={5} sx={{ border: '1px solid #e3e5e6', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
					<img src="https://web-student.inter-nation.uz/images/word.png" alt="" />
				</Box>
				<h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em' }}>
					{
						// @ts-ignore
						data.title
					}
				</h2>

				<Box pt={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%' }}>
					{data?.varinats?.map((item, idx) => (
						// eslint-disable-next-line react/jsx-key
						<Button
							onClick={() => {
								handleClick(item);
							}}
							disabled={disabled}
							sx={{
								width: '25%',
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
					))}
				</Box>
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
							<Box>
								<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M25.5391 6.66219C23.869 6.17542 22.2644 6.84197 20.7253 7.81289C19.1796 8.78801 17.3035 10.3343 14.9563 12.2688L12.8759 13.9834C12.477 14.3122 12.3157 14.4446 12.1558 14.5638C10.8021 15.5725 9.1786 16.1553 7.49235 16.2379C7.29321 16.2476 7.08451 16.248 6.56755 16.248L6.48439 16.248C6.03877 16.2479 5.6954 16.2478 5.38842 16.2821C2.83515 16.5678 0.819842 18.5831 0.534142 21.1364C0.499792 21.4434 0.499889 21.7868 0.500015 22.2324V24.6922C0.499889 25.1379 0.499792 25.4812 0.534142 25.7882C0.819841 28.3415 2.83515 30.3568 5.38842 30.6425C5.69541 30.6768 6.03878 30.6767 6.48442 30.6766L6.56755 30.6766C7.08451 30.6766 7.29321 30.677 7.49235 30.6868C9.1786 30.7693 10.8021 31.3521 12.1558 32.3609C12.3157 32.48 12.477 32.6124 12.8759 32.9412L14.9563 34.6558C17.3035 36.5904 19.1796 38.1366 20.7253 39.1117C22.2644 40.0827 23.869 40.7492 25.5391 40.2624C26.0933 40.1009 26.6187 39.8531 27.0959 39.5281C28.5337 38.5489 29.0399 36.8868 29.2695 35.0816C29.5001 33.2685 29.5001 30.8374 29.5 27.7957V19.129C29.5001 16.0872 29.5001 13.6561 29.2695 11.8431C29.0399 10.0379 28.5337 8.37572 27.0959 7.39654C26.6187 7.07157 26.0933 6.82375 25.5391 6.66219Z"
										fill="#23C16B"
									/>
									<path
										d="M39.0607 8.40165C38.4749 7.81587 37.5252 7.81587 36.9394 8.40165C36.3536 8.98744 36.3536 9.93719 36.9394 10.523L38.3394 11.923C39.5568 13.1404 40.0946 13.6803 40.4991 14.1644C44.9971 19.547 44.9971 27.3776 40.4991 32.7602C40.0946 33.2443 39.5568 33.7842 38.3394 35.0017L36.9394 36.4017C36.3536 36.9874 36.3536 37.9372 36.9394 38.523C37.5252 39.1088 38.4749 39.1088 39.0607 38.523L40.532 37.0517C41.6591 35.9246 42.2995 35.2842 42.8012 34.6839C48.2298 28.1876 48.2298 18.737 42.8012 12.2407C42.2995 11.6404 41.659 10.9999 40.5319 9.87288L39.0607 8.40165Z"
										fill="#23C16B"
									/>
									<path
										d="M35.0607 14.4017C34.4749 13.8159 33.5252 13.8159 32.9394 14.4017C32.3536 14.9874 32.3536 15.9372 32.9394 16.523L33.7394 17.323C33.8628 17.4464 33.9132 17.4969 33.9538 17.5386C37.1593 20.8373 37.1593 26.0874 33.9538 29.386C33.9132 29.4277 33.8628 29.4782 33.7394 29.6016L32.9394 30.4017C32.3536 30.9874 32.3536 31.9372 32.9394 32.523C33.5252 33.1088 34.4749 33.1088 35.0607 32.523L35.8714 31.7123C35.9807 31.6029 36.0479 31.5358 36.1052 31.4768C40.4421 27.0139 40.4421 19.9108 36.1052 15.4479C36.0478 15.3888 35.981 15.3219 35.8713 15.2123L35.0607 14.4017Z"
										fill="#23C16B"
									/>
								</svg>
								<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.6964 9C12.7595 9 12 9.75952 12 10.6964V36.7084C12 37.6453 12.7595 38.4048 13.6964 38.4048C14.6333 38.4048 15.3929 37.6453 15.3929 36.7084V26.4968C16.1253 26.8417 16.8964 27.07 17.675 27.092C19.6587 27.1469 21.5083 26.5216 23.3477 25.8345C23.7682 25.6793 24.1867 25.5181 24.605 25.357C26.1769 24.7516 27.747 24.1468 29.4175 23.8591C31.2583 23.4857 33.1658 23.4518 34.8019 24.4109C34.9884 24.5272 35.1803 24.6506 35.3861 24.7837C35.5429 24.8851 35.7495 24.7728 35.7495 24.5861L35.75 11.8488C35.75 11.1552 35.4707 10.4744 34.88 10.1109C33.9611 9.54534 32.7982 9.128 31.7458 9.03424C30.0374 8.8797 28.4043 9.26793 26.8009 9.81769C26.0737 10.0685 25.3491 10.3288 24.6247 10.5891C23.2158 11.0953 21.8073 11.6014 20.3803 12.0371C18.7519 12.5795 16.9975 12.5398 15.3929 11.924V10.6964C15.3929 9.75952 14.6333 9 13.6964 9Z"
										fill="#23C16B"
									/>
								</svg>
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
							<Box>
								<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M25.5391 6.66219C23.869 6.17542 22.2644 6.84197 20.7253 7.81289C19.1796 8.78801 17.3035 10.3343 14.9563 12.2688L12.8759 13.9834C12.477 14.3122 12.3157 14.4446 12.1558 14.5638C10.8021 15.5725 9.1786 16.1553 7.49235 16.2379C7.29321 16.2476 7.08451 16.248 6.56755 16.248L6.48439 16.248C6.03877 16.2479 5.6954 16.2478 5.38842 16.2821C2.83515 16.5678 0.819842 18.5831 0.534142 21.1364C0.499792 21.4434 0.499889 21.7868 0.500015 22.2324V24.6922C0.499889 25.1379 0.499792 25.4812 0.534142 25.7882C0.819841 28.3415 2.83515 30.3568 5.38842 30.6425C5.69541 30.6768 6.03878 30.6767 6.48442 30.6766L6.56755 30.6766C7.08451 30.6766 7.29321 30.677 7.49235 30.6868C9.1786 30.7693 10.8021 31.3521 12.1558 32.3609C12.3157 32.48 12.477 32.6124 12.8759 32.9412L14.9563 34.6558C17.3035 36.5904 19.1796 38.1366 20.7253 39.1117C22.2644 40.0827 23.869 40.7492 25.5391 40.2624C26.0933 40.1009 26.6187 39.8531 27.0959 39.5281C28.5337 38.5489 29.0399 36.8868 29.2695 35.0816C29.5001 33.2685 29.5001 30.8374 29.5 27.7957V19.129C29.5001 16.0872 29.5001 13.6561 29.2695 11.8431C29.0399 10.0379 28.5337 8.37572 27.0959 7.39654C26.6187 7.07157 26.0933 6.82375 25.5391 6.66219Z"
										fill="#FF5247"
									/>
									<path
										d="M39.0607 8.40165C38.4749 7.81587 37.5252 7.81587 36.9394 8.40165C36.3536 8.98744 36.3536 9.93719 36.9394 10.523L38.3394 11.923C39.5568 13.1404 40.0946 13.6803 40.4991 14.1644C44.9971 19.547 44.9971 27.3776 40.4991 32.7602C40.0946 33.2443 39.5568 33.7842 38.3394 35.0017L36.9394 36.4017C36.3536 36.9874 36.3536 37.9372 36.9394 38.523C37.5252 39.1088 38.4749 39.1088 39.0607 38.523L40.532 37.0517C41.6591 35.9246 42.2995 35.2842 42.8012 34.6839C48.2298 28.1876 48.2298 18.737 42.8012 12.2407C42.2995 11.6404 41.659 10.9999 40.5319 9.87288L39.0607 8.40165Z"
										fill="#FF5247"
									/>
									<path
										d="M35.0607 14.4017C34.4749 13.8159 33.5252 13.8159 32.9394 14.4017C32.3536 14.9874 32.3536 15.9372 32.9394 16.523L33.7394 17.323C33.8628 17.4464 33.9132 17.4969 33.9538 17.5386C37.1593 20.8373 37.1593 26.0874 33.9538 29.386C33.9132 29.4277 33.8628 29.4782 33.7394 29.6016L32.9394 30.4017C32.3536 30.9874 32.3536 31.9372 32.9394 32.523C33.5252 33.1088 34.4749 33.1088 35.0607 32.523L35.8714 31.7123C35.9807 31.6029 36.0479 31.5358 36.1052 31.4768C40.4421 27.0139 40.4421 19.9108 36.1052 15.4479C36.0478 15.3888 35.981 15.3219 35.8713 15.2123L35.0607 14.4017Z"
										fill="#FF5247"
									/>
								</svg>
								<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.6964 9C12.7595 9 12 9.75952 12 10.6964V36.7084C12 37.6453 12.7595 38.4048 13.6964 38.4048C14.6333 38.4048 15.3929 37.6453 15.3929 36.7084V26.4968C16.1253 26.8417 16.8964 27.07 17.675 27.092C19.6587 27.1469 21.5083 26.5216 23.3477 25.8345C23.7682 25.6793 24.1867 25.5181 24.605 25.357C26.1769 24.7516 27.747 24.1468 29.4175 23.8591C31.2583 23.4857 33.1658 23.4518 34.8019 24.4109C34.9884 24.5272 35.1803 24.6506 35.3861 24.7837C35.5429 24.8851 35.7495 24.7728 35.7495 24.5861L35.75 11.8488C35.75 11.1552 35.4707 10.4744 34.88 10.1109C33.9611 9.54534 32.7982 9.128 31.7458 9.03424C30.0374 8.8797 28.4043 9.26793 26.8009 9.81769C26.0737 10.0685 25.3491 10.3288 24.6247 10.5891C23.2158 11.0953 21.8073 11.6014 20.3803 12.0371C18.7519 12.5795 16.9975 12.5398 15.3929 11.924V10.6964C15.3929 9.75952 14.6333 9 13.6964 9Z"
										fill="#FF5247"
									/>
								</svg>
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
