import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, FormControl, InputLabel, Menu, MenuItem, Select } from '@mui/material';
import { IconMenu } from '@tabler/icons-react';
import { RiSearchLine } from 'react-icons/ri';
import { clearSession } from 'services/store';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
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
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
							bgcolor: 'grey',
							WebkitBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.16)',
							boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.16)',
							position: 'fixed',
							top: '-12px',
							left: '0',
							zIndex: 99,
							maxHeight: 'fit-content',
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
									sx={{ cursor: 'pointer' }}
									onClick={() => {
										navigete('/dashboard/about');
									}}>
									About Us
								</MenuItem>
								<MenuItem
									sx={{ cursor: 'pointer' }}
									onClick={() => {
										navigete('/dashboard/contact');
									}}>
									Contact Us
								</MenuItem>
								<MenuItem
									sx={{ cursor: 'pointer' }}
									onClick={() => {
										clearSession();
										window.location.href = '/';
									}}>
									Logout
								</MenuItem>
							</Menu>
						</div>

						<Box>
							<img
								onClick={() => {
									navigete('/');
								}}
								style={{ cursor: 'pointer' }}
								src="https://www.learnalanguage.com/themes/demo/assets/images/learnalanguage-black.svg"
								alt=""
							/>
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
							bgcolor: '#173857',
							WebkitBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.16)',
							boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.16)',
							position: 'fixed',
							top: '-12px',
							left: '0',
							zIndex: 99,
							maxHeight: 'fit-content',
							'@media (max-width:700px)': {
								display: 'none'
							}
						}}>
						<Box
							onClick={() => {
								navigete('/dashboard');
							}}>
							<img style={{ cursor: 'pointer' }} src="https://www.learnalanguage.com/themes/demo/assets/images/learnlanguage.svg" alt="" />
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
								Contast Us
							</li>
							<li>
								<FormControl sx={{ width: '100px', cursor: 'pointer' }}>
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
												window.location.href = window.location.pathname;
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
							bgcolor: '#173857',
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
							display: 'none',
							justifyContent: 'space-between',
							width: '100%',
							alignItems: 'center',
							height: '100px',
							bgcolor: '#173857',

							padding: '24px',
							'@media (max-width:700px)': {
								display: 'flex'
							}
						}}>
						<Box display="flex" width="70%" justifyContent="center" alignItems="center" gap={1}>
							<input
								style={{
									marginRight: '20px',
									backgroundColor: 'rgba(255,255,255,.1)',
									color: '#fff',
									border: 'none',
									width: '100%',
									padding: '11px 20px 9px',
									borderRadius: '4px'
								}}
								type="text"
							/>
						</Box>
						<RiSearchLine onClick={handleSearch} style={iconStyle} />
					</Box>
				</>
			)}
		</>
	);
};

export default Navbar;
