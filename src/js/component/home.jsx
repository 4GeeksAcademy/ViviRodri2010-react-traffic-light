import React, { useState } from "react";

//create your first component
const Home = () => {
	const [colors, setColors]  = useState(["red", "yellow", "green"]);
	const [activeColor, setActiveColor] = useState("")

	const isActiveColor = (color) => {
		return color == activeColor ? "light-" + color : ""  
	};

	const addColor = () => {
		if(colors.find(a => a == "purple")){
			return;
		}
		let arr = colors.map(i => {
			return i;
		});
		arr.push("purple");
		setColors(arr);
	}

	const cycleLights = () => {
		let colorIndex = -1;
		if(activeColor == ""){
			setActiveColor("red");
			return;
		}
		colorIndex = colors.findIndex(a => a == activeColor)
		colorIndex += 1;
		if(colorIndex == colors.length){
			colorIndex = 0;
		}
		setActiveColor(colors[colorIndex]);
	}
	return (
		<>
			<div className="d-flex container-1">
				<div className="palo">

				</div>
				<div className="traffic-light">
					{colors.map(col => {
						return(
							<>
								<div onClick={() => {
									setActiveColor(col);
								}} className={"circle " + isActiveColor(col) + " " + col}>
								
								</div>
							</>
						);
					})}
				</div>
			</div>
			<div className="d-flex align-items-center flex-column">
				<button className="bg-success text-light rounded border-0 my-2" onClick={cycleLights}>Cycle light</button>
				<button className="bg-primary text-light rounded border-0" onClick={addColor}>Add color</button>
			</div>
		</>
	);
};

export default Home;
