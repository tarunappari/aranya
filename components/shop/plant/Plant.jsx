import Image from 'next/image';
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import plantImg from '@/public/assets/plant/plantAbout.jpg'
import styles from '@/styles/shop/plant/Plant.module.scss'
import Star from '@/public/assets/icons/star.svg'
import TruckSvg from '@/public/assets/icons/truck.svg'
import GiftSvg from '@/public/assets/icons/gift.svg'
import ReturnSvg from '@/public/assets/icons/return.svg'
import stylesAccordian from '@/styles/shop/Sidebar.module.scss'
import PlantCard from '../PlantCard';
import Cart from '@/components/cart/Cart';

const Plant = () => {
  return (
    <div>
      <div className={styles.plantContainer}>
        <div className={styles.plantImgs}>
          <div className="imgContainerr">
            <div className="off">30% off</div>
            <Image src={plantImg} alt='img' layout='fill' objectPosition='center' objectFit='cover' />
          </div>
          <div className="imgContainerr">
            <Image src={plantImg} alt='img' layout='fill' objectPosition='center' objectFit='cover' />
          </div>
          <div className="imgContainerr">
            <Image src={plantImg} alt='img' layout='fill' objectPosition='center' objectFit='cover' />
          </div>
          <div className="imgContainerr">
            <Image src={plantImg} alt='img' layout='fill' objectPosition='center' objectFit='cover' />
          </div>
          <div className="imgContainerr">
            <Image src={plantImg} alt='img' layout='fill' objectPosition='center' objectFit='cover' />
          </div>
          <div className="imgContainerr">
            <Image src={plantImg} alt='img' layout='fill' objectPosition='center' objectFit='cover' />
          </div>
        </div>
        <div className={styles.plantInfo}>
          <div className={styles.firstSection}>
            <span style={{ fontSize: '0.9rem' }}>Plant & Pot / Countertop</span>
            <div className={styles.plantTitle}>
              <h2>Plant & Pot</h2>
              <div>
                <span style={{ textDecoration: 'line-through' }}>Price</span>
                <span style={{ color: 'black' }}>Price</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', marginTop: '-0.3rem' }}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <span style={{ paddingLeft: '0.5rem', fontSize: '0.9rem' }}>5.0 (2 Reviews)</span>
            </div>
            <div className={styles.coloumnContainer}>
              <span>Color</span>
              <div className={styles.colorDiv}><div></div></div>
            </div>
            <div className={styles.coloumnContainer}>
              <span>Size</span>
              <div className={styles.sizeContainer}>48x23x12</div>
            </div>
            <Cart />
          </div>
          <div className={styles.secondSection}>
            <div>
              <TruckSvg />
              <div>
                <h2>Free Shipping</h2>
                <p>On all orders. <span>Learn more.</span></p>
              </div>
            </div>
            <div>
              <ReturnSvg />
              <div>
                <h2>Easy Returns</h2>
                <p>Extended returns through. <span>Returns Details.</span></p>
              </div>
            </div>
            <div>
              <GiftSvg />
              <div>
                <h2>Send It As A Gift</h2>
                <p>Add a free personalized note during checkout.</p>
              </div>
            </div>
          </div>
          <div className={styles.thirdSection}>
            <h2>Ceramic Pot. Plant</h2>
            <p>Introducing your new favourite addition to any indoor garden. The EcoPot® Planter features all the classic design elements—smooth curves, a drainage hole for excess water, and a sturdy base, along with two side handles for easy lifting. The interior is lined with a breathable fabric to promote healthy root growth, and it’s crafted from 100% recycled materials. Think vibrant, lush, and effortlessly stylish. With a commitment to sustainability, EcoPot® aims to minimise waste and promote eco-friendly gardening practices, ensuring that every planter contributes to a greener planet.</p>
            <div>
              <h3>Material</h3>
              <p>Ceramic</p>
            </div>
          </div>
          <div className={styles.fourthSection}>
            <Accordion type="single" collapsible className={`w-full ${stylesAccordian.accordianContainer}`}>
              <AccordionItem value="item-1" className={stylesAccordian.accordianItem} >
                <AccordionTrigger className={styles.accordianTrigger}>How to Care</AccordionTrigger>
                <AccordionContent className={styles.accordionContent}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum recusandae veniam placeat asperiores maiores consequatur voluptates delectus dolorum tempora, fuga provident saepe doloribus officiis ex nam! Expedita ullam soluta fugiat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className={styles.recommended}>
        <div className="title">
          Recomended Products
        </div>
        <div>
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
        </div>
      </div>
    </div>
  )
}

export default Plant;