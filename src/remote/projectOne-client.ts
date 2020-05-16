import axios from 'axios';

export const projectOneClient = axios.create({
	baseURL: 'http://project1api-env.eba-r6yaudsa.us-east-2.elasticbeanstalk.com',
	// baseURL: "http://localhost:8080",
	headers: {
		'Content-Type': 'application/json'
	}
})