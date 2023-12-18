import { FunctionComponent, useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { RiSearchLine } from 'react-icons/ri';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	const [search, setSearch] = useState(false);

	const iconStyle = {
		height: '25px',
		width: '25px',
		color: 'white',
		'&:hover': {
			color: 'blue'
		}
	};

	const handleSearch = () => {
		setSearch(!search);
	};

	return (
		<>
			{!search ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
						alignItems: 'center',
						height: '100px',
						padding: '24px'
					}}>
					<Box>
						<img src="https://www.learnalanguage.com/themes/demo/assets/images/learnlanguage.svg" alt="" />
					</Box>

					<ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', height: '100%', listStyle: 'none' }}>
						<li style={{ fontSize: '16px', color: '#fff', cursor: 'pointer' }}>About Us</li>
						<li style={{ fontSize: '16px', color: '#fff', cursor: 'pointer' }}>Contast Us</li>
						<li style={{ fontSize: '16px', color: '#fff', cursor: 'pointer' }}>Blog</li>
						<li>
							<FormControl sx={{ width: '100px' }}>
								<InputLabel>Learn</InputLabel>
								<Select>
									<MenuItem>Engilish</MenuItem>
									<MenuItem>Spanish</MenuItem>
									<MenuItem>Franch</MenuItem>
									<MenuItem>Italian</MenuItem>
									<MenuItem>German</MenuItem>
									<MenuItem>Turkish</MenuItem>
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
			) : (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
						alignItems: 'center',
						height: '100px',
						padding: '24px'
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
			)}
		</>
	);
};

export default Header;
