
const questions = [
    {
		id: 1,
		domain: '1. World History',
		questionText: 'Who painted the ceiling of the Sistine Chapel?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Da Vinci'},
			{ answerID: 'b', answerText: 'Correggio'},
			{ answerID: 'c', answerText: 'Michelangelo'},
			{ answerID: 'd', answerText: 'Raphael'},
		],
		correctResponse: 'c',
		questionRationale: `Michelangelo painted the chapel's ceiling between 1508 and 1512 under the patronage of Pope Julius II.`,
	},
	{
		id: 2,
		domain: '1. World History',
		questionText: 'In what year did the Norman Conquest of England occur?',
		answerOptions: [
			{ answerID: 'a', answerText: '55 BC'},
			{ answerID: 'b', answerText: '1066'},
			{ answerID: 'c', answerText: '1139'},
			{ answerID: 'd', answerText: '1470'},
		],
		correctResponse: 'b',
		questionRationale: `The Norman Conquest, the 11th-century invasion and occupation of England by an army made up of thousands of Norman, Breton, Flemish, and French troops, occurred in 1066. `,
	},
	{
		id: 3,
		domain: '1. World History',
		questionText: 'Who was the founder and first khagan of the Mongol Empire?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Tolui'},
			{ answerID: 'b', answerText: 'Kublai Khan'},
			{ answerID: 'c', answerText: 'Ong Khan'},
			{ answerID: 'd', answerText: 'Genghis Khan'},
		],
		correctResponse: 'd',
		questionRationale: `Genghis Khan (also known as Chinggis Khan) was the founder and first khagan of the Mongol Empire, which later became the largest contiguous land empire in history.`,
	},
	{
		id: 4,
		domain: '2. U.S. History',
		questionText: 'Who was the first U.S. president to serve only a single term?',
		answerOptions: [
			{ answerID: 'a', answerText: 'George Washington'},
			{ answerID: 'b', answerText: 'John Adams'},
			{ answerID: 'c', answerText: 'John Quincy Adams'},
			{ answerID: 'd', answerText: 'Franklin Pierce'},
		],
		correctResponse: 'b',
		questionRationale: `John Adams served only a single term. He was the second president of the United States. George Washington, the first US president, served two terms.`,
	},
	{
		id: 5,
		domain: '2. U.S. History',
		questionText: 'What is the capital of Texas?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Austin'},
			{ answerID: 'b', answerText: 'San Antonio'},
			{ answerID: 'c', answerText: 'Houston'},
			{ answerID: 'd', answerText: 'Dallas'},
		],
		correctResponse: 'a',
		questionRationale: `Austin is the capital of Texas. Houston, San Antonio, and Dallas all have larger populations.`,
	},
	{
		id: 6,
		domain: '2. U.S. History',
		questionText: 'The Wright brothers, Orville and William, are generally credited for inventing what?',
		answerOptions: [
			{ answerID: 'a', answerText: 'the microwave oven'},
			{ answerID: 'b', answerText: 'the steam-powered locomotive engine'},
			{ answerID: 'c', answerText: 'the motor-operated airplane'},
			{ answerID: 'd', answerText: 'the x-ray machine'},
		],
		correctResponse: 'c',
		questionRationale: `The Wright brothers made the first controlled, sustained flight of a powered, heavier-than-air aircraft on December 17, 1903, four miles south of Kitty Hawk, North Carolina.`,
	},
	{
		id: 7,
		domain: '3. Technology',
		questionText: 'Who was the only person to win a Nobel Prize in two scientific fields?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Marie Curie'},
			{ answerID: 'b', answerText: 'Albert Einstein'},
			{ answerID: 'c', answerText: 'Gertrude Elion'},
			{ answerID: 'd', answerText: 'Robert Oppenheimer'},
		],
		correctResponse: 'a',
		questionRationale: `Marie Curie was was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win a Nobel Prize in two scientific fields (Physics and Chemistry).`,
	},
	{
		id: 8,
		domain: '3. Technology',
		questionText: 'In automobiles, carburetors were largely replaced by which technology?',
		answerOptions: [
			{ answerID: 'a', answerText: 'alternators'},
			{ answerID: 'b', answerText: 'catalytic converters'},
			{ answerID: 'c', answerText: 'fuel injection'},
			{ answerID: 'd', answerText: 'diesel fuel'},
		],
		correctResponse: 'c',
		questionRationale: `Fuel injection technology replaced carburetors in almost all new automobile manufacturing by the early 1990s.`,
	},
	{
		id: 9,
		domain: '3. Technology',
		questionText: 'What technology allowed Marty McFly to travel back in time in 1985?',
		answerOptions: [
			{ answerID: 'a', answerText: 'warp drive'},
			{ answerID: 'b', answerText: 'soylent green'},
			{ answerID: 'c', answerText: 'millennium falcon'},
			{ answerID: 'd', answerText: 'flux capacitor'},
		],
		correctResponse: 'd',
		questionRationale: `The flux capacitor, which consists of a rectangular-shaped compartment with three flashing Geissler-style tubes arranged in a "Y" configuration, is described by Doc Brown as "what makes time travel possible."`,
	},
	
]

export default questions;
