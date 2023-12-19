function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black","White"],
        players: {
            "Alan Anderson":{
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assits: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,},

             "Reggie Evans":{
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assits: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,},

            "Brook Lopez":{
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assits: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,},

            "Mason Plumlee":{
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assits: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,},
            "Jason Terry":{
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assits: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,},
            
            

            
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien":{
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assits: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,},

             "Bismak Biyombo":{
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assits: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,},

            "DeSagna Diop":{
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assits: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,},

            "Ben Gordon":{
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 12,
                assits: 3,
                steals: 2,
                blocks: 1,
                slamDunks: 1,},
            "Brendan Haywood":{
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assits: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,},
            
        }
      }
    };
  }
  
  function homeTeamName(){
    let object = gameObject()
    return object["home"]["teamName"]
  }

console.log(Object.entries(gameObject))
console.log(Object.keys(gameObject))
console.log(Object.values(gameObject))



function numPointsScored(playerName){
    const game = gameObject;
    for(let teamKey in game){
        if(game.hasOwnProperty(teamKey)){
            const team = game[teamKey];
            const players = team.players;
            if(playerName in players){
                return players[playerName].points
            }
        }
    }


}

function shoeSize(playerName){
    const game = gameObject;
    for(let teamKey in game){
        if(game.hasOwnProperty(teamKey)){
            const team = game[teamKey]
            const players = team.players
            if(playerName in players){
                return players[playerName].shoeSize
            }
        }
    }
}

function teamColors(teamName){
    const game = gameObject;
    for(let teamKey in game){
        if(game.hasOwnProperty(teamKey)){
            const team = game[teamKey]
            if(team.teamName === teamName){
                return team.colors
            }
        }
    }
}

function teamNames(){
    const game = gameObject;
    return Object.keys(game)

}

function playerStats(playerName){
    const game = gameObject;
    for(let teamKey in game){
        if(game.hasOwnProperty(teamKey)){
            const team = game[teamKey]
            const players = team.players
            if(playerName in players){
                return Object.entries(players[playerName])
            }
        }
    }
return "Player not found"
}

function bigShoeRebounds(){

    let maxShoeSize = 0
    let maxShoeSizeRebounds = 0
    const game = gameObject;
    for(let teamKey in game){
        if(game.hasOwnProperty(teamKey)){
            const team = game[teamKey]
            const players = team.players
            for(let playerName in players){
                if(players.hasOwnProperty(playerName)){
                    const player = players[playerName];

                    if(player.shoe > maxShoeSize){
                        maxShoeSize = player.shoe;         
                        maxShoeSizeRebounds = player.rebounds;
                    }
                }
            }
        }
    }
}