const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


const scoredEntries = Object.entries(game.scored);


for (const [goalNum, player] of scoredEntries) {
  console.log(`Goal ${Number(goalNum) + 1}: ${player}`);
}


const oddValues = Object.values(game.odds);


let sum2 = 0;
let avg2;
for (const odd of oddValues) {
  sum2 += odd;
  avg2 = sum2 / oddValues.length;
}
console.log(`Odd sum: ${sum2}. Average Odd: ${Math.trunc(avg2)} ⚽`);



const oddEntries = Object.entries(game.odds);
console.log(oddEntries);

for (const [team, oddValue] of oddEntries) {
  const teamStr = game[team] ? `victory ${game[team]}` : `Draw`;
  console.log(`Odd of ${teamStr}: ${oddValue}`);
}


const scorer = {};
for (const player of game.scored) {

  scorer[player] ? scorer[player]++ : (scorer[player] = 1);
}
console.log(scorer);