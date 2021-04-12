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
