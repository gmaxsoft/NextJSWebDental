"use client"

import { SetStateAction, useEffect, useState } from "react";
import Jsoncards from "@/public/json/Slider.json";
import { Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function BootstrapCarousel() {
  const { bootstrap } = Jsoncards.cards;
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 576px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handleSelect = (selectedIndex: SetStateAction<any | null>) => {
    setIndex(selectedIndex);
  };

  // Na mobile carousel jest ukryty CSS-em – nie ładuj ciężkich obrazów (LCP/bandwidth)
  if (!isDesktop) {
    return null;
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
      {bootstrap.map((item, idx) => (
        <Carousel.Item key={item.id} className="item" interval={4000}>
          <Image
            src={item.imageUrl}
            alt={`Baner Stomatolog Dentysta ${idx + 1}`}
            width={1920}
            height={750}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxWidth: '1920px', maxHeight: '750px' }}
            priority={idx === 0}
            quality={75}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
