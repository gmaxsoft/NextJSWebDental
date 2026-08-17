
"use client"

import { Parallax } from 'react-parallax';
import Image from 'next/image';
import Content from "@/public/json/ParallaxBottom.json";

const ParallaxImg = () => {
	return (
		<>
			<section className="ftco-intro">
				<Parallax strength={200}>
					<div className="parallax-bg">
						<Image
							src="/images/bg_4.webp"
							alt="Tło Stomatolog"
							fill
							quality={85}
							sizes="100vw"
							style={{
								objectFit: 'cover',
							}}
						/>
					</div>

					<div className="overlay"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-12 rem-6 align-items-center text-center">
								<h2>{Content.title}</h2>
								<p className="mb-4">{Content.subtitle}</p>
							</div>
						</div>
					</div>
				</Parallax>
			</section>
		</>
	)
}

export default ParallaxImg