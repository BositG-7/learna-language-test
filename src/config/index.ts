const ENV = process.env;

const config = {
	api: {
		baseURL: ENV.REACT_APP_BASE_URL,
		sessionKEY: ENV.REACT_APP_SESSION_KEY
	},
	data: {
		quetions: [
			{
				title: 'Who',
				right: 'Kim',
				varinats: ['Bu', 'Anavilar', 'Kim', 'Bular'].sort((a, b) => 0.5 - Math.random())
			},
			{
				title: 'Wallet',
				right: 'Hamyon',
				varinats: ['Hamyon', 'Soyabon', 'Planshet', 'Ruchka'].sort((a, b) => 0.5 - Math.random())
			},

			{
				title: 'Umbrella',
				right: 'Soyabon',
				varinats: ['Noutbuk', 'Soyabon', 'Hamyon', 'Ruchka'].sort((a, b) => 0.5 - Math.random())
			},

			{
				title: 'Those',
				right: 'Anavilar',
				varinats: ['Anavilar', 'Kim', 'Obyekt(Narsa)', 'Bu'].sort((a, b) => 0.5 - Math.random())
			},
			{
				title: 'This',
				right: 'Bu',
				varinats: ['Bu', 'Anavilar', 'Bular', 'Kim'].sort((a, b) => 0.5 - Math.random())
			},
			{
				title: 'These',
				right: 'Bular',
				varinats: ['Bu', 'Obyekt(Narsa)', 'Bular', 'Kim'].sort((a, b) => 0.5 - Math.random())
			},
			{
				title: 'Tablet',
				right: 'Planshet',
				varinats: ['Noutbok', 'Planshet', 'Hamyon', 'Soyabon'].sort((a, b) => 0.5 - Math.random())
			},
			{
				title: 'Pen',
				right: 'Ruchka',
				varinats: ['Hamyon', 'Soyabon', 'Planshet', 'Ruchka'].sort((a, b) => 0.5 - Math.random())
			},
			{
				title: 'Object',
				right: 'Obyekt (Narsa)',
				varinats: ['Bular', 'Anavilar', 'Obyekt (Narsa)', 'Kim'].sort((a, b) => 0.5 - Math.random())
			},
			{
				title: 'Laptop',
				right: 'Noutbuk',
				varinats: ['Planshet', 'Soyabon', 'Noutbuk', 'Ruchka'].sort((a, b) => 0.5 - Math.random())
			}
		].sort((a, b) => 0.5 - Math.random())
	}
};

export default config;
