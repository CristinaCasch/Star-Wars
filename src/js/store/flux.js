const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetList: [],
			people: null,
			dplanets: null
		},
		actions: {
			fetchPeople: async () => {
				const url = "https://www.swapi.tech/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peopleList: data.results });
			},

			fetchPlanets: async () => {
				const store = getStore();
				const URL = "https://www.swapi.tech/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const data = await response.json();
				setStore({ planetList: data.results });
			},

			fetchCharacter: async id => {
				const url = `https://www.swapi.tech/api/people/${id}`;
				const response = await fetch(url);
				const data = await response.json();
				setStore({ people: data.result.properties });
			},

			fetchDPlanets: async id => {
				const url = `https://www.swapi.tech/api/planets/${id}`;
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ dplanets: data.result.properties });
			},

			addFavorite: name => {
				const store = getStore();

				store.favorites.includes(name)
					? setStore({ favorites: store.favorites })
					: setStore({ favorites: store.favorites.concat(name) });
				console.log(store.favorites);
			},

			deleteFavorites: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
			}
		}
	};
};

export default getState;
