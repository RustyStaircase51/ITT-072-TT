function CardLoader({ firstName, lastName, capStat, athStat, perStat, resStat, perk1, perk2, perk3 }) {
	return (
  
        <div class = "Card">
		
			<h3 id = {firstName}>{firstName} {lastName}</h3>
                <h4>Stats</h4>
                <p>Capability: {capStat}/10
                <br></br>Athleticism: {athStat}/10
                <br></br>Personality: {perStat}/10
                <br></br>Resourcefulness: {resStat}/10</p>
            
            <h4>Starting Perks</h4>
                <p>{perk1}
                <br></br>{perk2}
                <br></br>{perk3}</p>
        </div>  
	
    )
};

export default CardLoader;