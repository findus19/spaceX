import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper';
import './features.css';

const image = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
	
  }

const Features = ({rocketFeatures}) => {

	const formatNubmer = Intl.NumberFormat('en');
	
	return(
    <section className="features">
		<h2 className="features-title">
			Falcon 1 <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{rocketFeatures.height ? `${rocketFeatures.height.meters} m / ${rocketFeatures.height.feet} ft` : ''}</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{rocketFeatures.diameter ? `${rocketFeatures.diameter.meters} m / ${rocketFeatures.diameter.feet} ft` : ''}</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{rocketFeatures.mass ? `${formatNubmer.format(rocketFeatures.mass.kg)} kg / ${formatNubmer.format(rocketFeatures.mass.lb)} lb` : ''}</td>
					</tr>
					{rocketFeatures.payload_weights ? rocketFeatures.payload_weights.map((item, i) => (
						<tr key={i}> 
							<td className="table-column"> PAYLOAD TO {item.id.toUpperCase()}</td>
							<td className="table-column"> {`${formatNubmer.format(item.kg)} kg / 
						${formatNubmer.format(item.lb)} lb`}</td>
						</tr>
					)) : ''}
				</thead>
			</table>
			<RelaxWrapper speed={14}>
				<img
					src={`./img/${image[rocketFeatures.name]}.png`}
					alt="rocket"
					className="rocket"
				/>
			</RelaxWrapper>
			
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{rocketFeatures.description ? rocketFeatures.description : ''}
				</p>
			</article>
		</div>
	</section>
	
)}

export default Features;