interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

// Iterating properties.
let planeta: Planet = {
	name : "Earth",
	galaxy: "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};

for(let prop in planeta)
{
	console.log("Planeta " + prop + " :- " + planeta[prop as keyof Planet]);
}