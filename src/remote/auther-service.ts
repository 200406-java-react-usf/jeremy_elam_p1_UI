import axios from 'axios';

export const projectOneClient = axios.create({
	baseURL: 'http://http://project1api-env.eba-r6yaudsa.us-east-2.elasticbeanstalk.com',
	headers: {
		'Content-Type': 'application/json'
	}
})