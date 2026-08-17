"use client"

import React from 'react'

function GoogleMap() {

	return (
		<>
			<div className="google-map">
				<iframe
					title="Google Mapa Zielona Góra"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.4325061485986!2d15.505237376503452!3d51.94193244027415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613d92ee1d903%3A0xaa6f365d63adec6!2sPrywatna%20Praktyka%20Stomatologiczna%20Anna%20Mi%C5%9Bk%C3%B3w!5e0!3m2!1spl!2spl!4v1752792661188!5m2!1spl!2spl"
					width="100%"
					height="550"
					allowFullScreen
					loading="lazy"
				/>
			</div>
		</>
	);
}

export default GoogleMap;
