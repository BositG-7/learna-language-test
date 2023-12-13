import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container, Modal, Typography } from '@mui/material';

interface SingleCountryProps {}

const SingleCountry = () => {
	const { language } = useParams();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigete = useNavigate();

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

	return (
		<>
			<Container
				sx={{
					width: '95%',
					background: 'white',
					height: '95vh',
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
						1/10
					</Box>
				</Box>
				<Box mt={10} sx={{ fontSize: '18px', lineHeight: '20px', fontWeight: '700px', color: '#404446' }} color="#404446">
					Please, learn new word attentively
				</Box>
				<Box mt={5} sx={{ border: '1px solid #e3e5e6', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
					<img src="https://web-student.inter-nation.uz/images/word.png" alt="" />
				</Box>
				<h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em' }}>Wallet</h2>

				<Box pt={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%' }}>
					<Button
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
						Planshet
					</Button>
					<Button
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
						Soyabon
					</Button>
					<Button
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
						Ruchka
					</Button>
					<Button
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
						Hamyon
					</Button>
				</Box>
			</Container>
		</>
	);
};

export default SingleCountry;
