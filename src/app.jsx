import HeadLoader from "./components/head.jsx"
import NavbarLoader from "./components/navbar.jsx"
import CardListLoader from "./components/cardlist.jsx"
import CardLoader from "./components/card.jsx"
import FootLoader from "./components/foot.jsx"

function AppLoader() {
  return (
	<body id = "Container">
	<div id = "Head">
		<header>
			<HeadLoader />
		</header>
	</div>
	
	<nav id = "NavBar">
		<NavbarLoader />
	</nav>

	<main>
		<div id = "CardList">
			<CardListLoader />
		</div>
		<CardLoader firstName="Tanya" lastName="Harrison" capStat="4" athStat="6" perStat="10" resStat="5" perk1="Hi-Fi" perk2="Survival Skills" perk3="Guardian Shadow" />
		<br></br>
		<CardLoader firstName="Rachel" lastName="Calahan" capStat="7" athStat="5" perStat="2" resStat="8" perk1="Full Moon" perk2="Aura of Awareness" perk3="Sixth Sense" />
		<br></br>
		<CardLoader firstName="Thomas" lastName="Armitage" capStat="7" athStat="8" perStat="10" resStat="2" perk1="Running Back" perk2="Inspiring" perk3="Barricade" />
		<br></br>
		<CardLoader firstName="Jennifer" lastName="Aarons" capStat="5" athStat="9" perStat="6" resStat="7" perk1="Dreamer" perk2="Ghost" perk3="Survival Rage" />
		<br></br>
		<CardLoader firstName="Marcus" lastName="Navarro" capStat="7" athStat="5" perStat="4" resStat="10" perk1="Lone Wolf" perk2="Repair Expert" perk3="Trespasser" />
		<br></br>
		<CardLoader firstName="Bob" lastName="Simms" capStat="9" athStat="8" perStat="4" resStat="3" perk1="Heavyweight" perk2="Lethal Pitch" perk3="Runner's High" />
		<br></br>
		<CardLoader firstName="Annie" lastName="Brackett" capStat="5" athStat="4" perStat="6" resStat="8" perk1="Speed Kills" perk2="Exit Strategy" perk3="Convincing Plea" />
		<br></br>
		<CardLoader firstName="Lynda" lastName="Van Der Klok" capStat="4" athStat="8" perStat="7" resStat="5" perk1="Totally Amazing" perk2="Blinding Light" perk3="Fade to Black" />
		<br></br>
		<CardLoader firstName="Laurie" lastName="Strode" capStat="8" athStat="6" perStat="9" resStat="7" perk1="Spatial Awareness" perk2="Knockout" perk3="Revenge" />
		<br></br>
		
	</main>
	
	<footer id = "Foot">
		<FootLoader />
	</footer>
</body>
	
  )
};

export default AppLoader;