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
				varinats: ['Bu', 'Anavilar', 'Kim', 'Bular']
			},
			{
				title: 'Wallet',
				right: 'Hamyon',
				varinats: ['Hamyon', 'Soyabon', 'Planshet', 'Ruchka']
			},

			{
				title: 'Umbrella',
				right: 'Soyabon',
				varinats: ['Noutbuk', 'Soyabon', 'Hamyon', 'Ruchka']
			},

			{
				title: 'Those',
				right: 'Anavilar',
				varinats: ['Anavilar', 'Kim', 'Obyekt(Narsa)', 'Bu']
			},
			{
				title: 'This',
				right: 'Bu',
				varinats: ['Bu', 'Anavilar', 'Bular', 'Kim']
			},
			{
				title: 'These',
				right: 'Bular',
				varinats: ['Bu', 'Obyekt(Narsa)', 'Bular', 'Kim']
			},
			{
				title: 'Tablet',
				right: 'Planshet',
				varinats: ['Noutbok', 'Planshet', 'Hamyon', 'Soyabon']
			},
			{
				title: 'Pen',
				right: 'Ruchka',
				varinats: ['Hamyon', 'Soyabon', 'Planshet', 'Ruchka']
			},
			{
				title: 'Object',
				right: 'Obyekt (Narsa)',
				varinats: ['Bular', 'Anavilar', 'Obyekt (Narsa)', 'Kim']
			},
			{
				title: 'Laptop',
				right: 'Noutbuk',
				varinats: ['Planshet', 'Soyabon', 'Noutbuk', 'Ruchka']
			}
		]
	}
};

export default config;
