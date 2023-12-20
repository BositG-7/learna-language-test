import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, FormControl, InputLabel, Menu, MenuItem, Select } from '@mui/material';
import { IconMenu } from '@tabler/icons-react';
import { RiSearchLine } from 'react-icons/ri';
import { clearSession } from 'services/store';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	const [search, setSearch] = useState(false);

	const navigete = useNavigate();
	const iconStyle = {
		height: '25px',
		width: '25px',
		color: 'white',
		cursor: 'pointer',
		'&:hover': {
			color: 'blue'
		}
	};
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSearch = () => {
		setSearch(!search);
	};

	return (
		<>
			{!search ? (
				<>
					<Box
						sx={{
							cursor: 'pointer',

							display: 'none',
							justifyContent: 'space-between',
							width: '100%',
							alignItems: 'center',
							height: '100px',
							padding: '10px',
							'@media (max-width:700px)': {
								display: 'flex'
							}
						}}>
						<div>
							<Button
								id="basic-button"
								aria-controls={open ? 'basic-menu' : undefined}
								aria-haspopup="true"
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClick}>
								<Avatar
									sx={{ cursor: 'pointer' }}
									variant="rounded" // Use "rounded" instead of "radius" for rounded avatars
									alt="it's me">
									<IconMenu color="#000000" />
								</Avatar>
							</Button>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'basic-button'
								}}>
								<MenuItem
									onClick={() => {
										navigete('/dashboard/about');
									}}>
									About Us
								</MenuItem>
								<MenuItem
									onClick={() => {
										navigete('/dashboard/contact');
									}}>
									Contact Us
								</MenuItem>
								<MenuItem
									onClick={() => {
										clearSession();
										window.location.href = '/';
									}}>
									Logout
								</MenuItem>
							</Menu>
						</div>

						<Box>
							<img src="https://www.learnalanguage.com/themes/demo/assets/images/learnalanguage-black.svg" alt="" />
						</Box>

						<Box>
							<RiSearchLine onClick={handleSearch} style={iconStyle} />
						</Box>
					</Box>

					<Box
						sx={{
							cursor: 'pointer',

							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							alignItems: 'center',
							height: '100px',
							padding: '24px',

							'@media (max-width:700px)': {
								display: 'none'
							}
						}}>
						<Box
							onClick={() => {
								navigete('/dashboard');
							}}>
							<img src="https://www.learnalanguage.com/themes/demo/assets/images/learnlanguage.svg" alt="" />
						</Box>

						<ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', height: '100%', listStyle: 'none' }}>
							<li
								style={{ fontSize: '16px', color: '#fff', cursor: 'pointer' }}
								onClick={() => {
									navigete('/dashboard/about');
								}}>
								About Us
							</li>
							<li
								style={{ fontSize: '16px', color: '#fff', cursor: 'pointer' }}
								onClick={() => {
									navigete('/dashboard/contact');
								}}>
								Contact Us
							</li>
							<li>
								<FormControl sx={{ width: '100px' }}>
									<InputLabel>Learn</InputLabel>
									<Select>
										<MenuItem
											onClick={() => {
												navigete('/dashboard/language/eng');
											}}>
											Engilish
										</MenuItem>
										<MenuItem
											onClick={() => {
												navigete('/dashboard/language/spa');
											}}>
											Spanish
										</MenuItem>
										<MenuItem
											onClick={() => {
												navigete('/dashboard/language/fre');
											}}>
											Franch
										</MenuItem>
										<MenuItem
											onClick={() => {
												navigete('/dashboard/language/ita');
											}}>
											Italian
										</MenuItem>
										<MenuItem
											onClick={() => {
												navigete('/dashboard/language/ger');
											}}>
											German
										</MenuItem>
										<MenuItem
											onClick={() => {
												navigete('/dashboard/language/tur');
												window.location.reload();
											}}>
											Turkish
										</MenuItem>
									</Select>
								</FormControl>
							</li>
							<li
								onClick={handleSearch}
								style={{
									cursor: 'pointer'
								}}>
								<RiSearchLine style={iconStyle} />
							</li>
						</ul>
					</Box>
				</>
			) : (
				<>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							width: '100%',
							alignItems: 'center',
							height: '100px',
							padding: '24px',
							'@media (max-width:700px)': {
								display: 'none'
							}
						}}>
						<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
							<input
								style={{
									marginRight: '20px',
									backgroundColor: 'rgba(255,255,255,.1)',
									color: '#fff',
									border: 'none',
									width: '370px',
									padding: '11px 20px 9px',
									borderRadius: '4px'
								}}
								type="text"
							/>
							<Button
								sx={{
									border: '1px solid rgba(255,255,255,.5)',
									color: '#fff',
									padding: '8px 32px'
								}}>
								Search
							</Button>
							<img onClick={handleSearch} style={{ cursor: 'pointer' }} src="https://web-student.inter-nation.uz/icons/close1.svg" alt="" />
						</Box>
					</Box>
					<Box
						sx={{
							cursor: 'pointer',

							display: 'none',
							justifyContent: 'center',
							width: '100%',
							alignItems: 'center',
							height: '100px',
							padding: '24px',
							'@media (max-width:700px)': {
								display: 'flex'
							}
						}}>
						<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
							<input
								style={{
									marginRight: '20px',
									backgroundColor: 'rgba(255,255,255,.1)',
									color: '#fff',
									border: 'none',
									width: '70%',
									padding: '11px 20px 9px',
									borderRadius: '4px'
								}}
								type="text"
							/>

							<img onClick={handleSearch} style={{ cursor: 'pointer' }} src="https://web-student.inter-nation.uz/icons/close1.svg" alt="" />
						</Box>
					</Box>
				</>
			)}
		</>
	);
};

export default Header;
