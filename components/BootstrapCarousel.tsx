"use client"

import { SetStateAction, useState } from "react";
import Jsoncards from "@/public/json/Slider.json";
import { Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function BootstrapCarousel() {
  const { bootstrap } = Jsoncards.cards;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<any | null>) => {
    setIndex(selectedIndex);
  };

  // d-none d-sm-block na samym .slider: pełna szerokość tła + brak CLS z JS
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="slider d-none d-sm-block">
      {bootstrap.map((item, idx) => (
        <Carousel.Item key={item.id} className="item" interval={4000}>
          <Image
            src={item.imageUrl}
            alt={`Baner Stomatolog Dentysta ${idx + 1}`}
            width={1920}
            height={750}
            sizes="(max-width: 575.98px) 0vw, 100vw"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '1920px',
              maxHeight: '750px',
              margin: '0 auto',
              display: 'block',
            }}
            priority={idx === 0}
            quality={75}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
