export const getCharacter = async () => {
	try {
		// Link de api.tech caído o en mantención. Como opción B) para revisión dejaré la petición a swapi.dev
		//"https://www.swapi.tech/api/people?page=1&limit=100"
		return fetch("https://swapi.dev/api/people/", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getCharactersdetail = async id => {
	try {
		//Link de api.tech caído o en mantención. No encontré una petición de character details en específico, pero le dejo un readme de como se vería <3
		return fetch(`https://www.swapi.tech/api/people/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};
export const getPlanet = async () => {
	try {
		// Link de api.tech caído o en mantenciín. Como opción B) para revisión dejaré la petición a swapi.dev
		//"https://www.swapi.tech/api/planets?page=1&limit=100"
		return fetch( "https://swapi.dev/api/planets/", {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.results);
	} catch (error) {
		return [];
	}
};
export const getPlanetsdetail = async id => {
			// Link de api.tech caido o en mantencion. No encontré una petición de planets details en específico, pero le dejo un readme de como se vería <3
	try {
		return fetch(`https://www.swapi.tech/api/planets/${id}`, {
			method: "GET",
			redirect: "follow"
		})
			.then(response => response.json())
			.then(response => response.result);
	} catch (error) {
		return {};
	}
};

