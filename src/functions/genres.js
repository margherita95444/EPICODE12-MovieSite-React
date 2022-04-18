const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
		'X-RapidAPI-Key': '4b2194b024mshf31ac099cba239fp166086jsna72316c37f89'
	}
};

export const getGenres = () => {
    return fetch('https://movies-app1.p.rapidapi.com/api/genres', options)
        .then(response => response.json())
		.then(genres => [...genres.results])
        .catch(err => console.error(err));
};
