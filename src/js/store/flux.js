const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetList: []
		},
		actions: {
			fetchPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peopleList: data.results });
			},

			fetchPlanets: async () => {
				const store = getStore();
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ planetList: json.results });
			}

			/**
            fetch().then().then(data => setStore({ "foo": data.bar }))
        */
		}
	};
};

export default getState;
