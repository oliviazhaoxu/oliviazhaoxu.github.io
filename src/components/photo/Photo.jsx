import React from 'react'
import "./photo.css"
import IMG1 from "../../assets/pandemic/_MG_0083.JPG"
import IMG2 from "../../assets/cal_football/_MG_0277.JPG"
import IMG3 from "../../assets/fleet_week/_MG_0819.JPG"
import IMG4 from "../../assets/china_protest/_MG_0847.JPG"

const gallery = [
    {
        id: 1,
        title: 'Post Pandemic',
        subTitle: 'A look at the (almost) post pandemic life',
        imgSrc: IMG1,
        altText: 'a blue-haired woman standing in the middle of a yellow room at SF MOMA',
        link: 'www.google.com'

    },

    {
        id:2,
        title: 'Cal Football',
        subTitle: 'Sep 24, 2022. Cal vs. Arizona. Go Bears!',
        imgSrc: IMG2,
        altText: 'four Cal football players preparing to go on field',
        link: 'www.google.com'
    },

    {
        id: 3,
        title: 'Fleet Week',
        subTitle: 'Ready for ship and K9?',
        imgSrc: IMG3,
        altText: 'a navy officer and his girlfriend. shot from behind',
        link: 'www.google.com'
    },

    {
        ID: 4,
        title: 'China Protest',
        subTitle: 'Posters I found on campus',
        imgSrc: IMG4,
        altText: 'two red posters on UCB campus billboard',
        link: 'www.google.com'
    }
]

const Photo = () => {
  return (
    <section id='photo'>
        <h1>Photography</h1>
        <div className='container photo__container'>
            {
                gallery.map(({id, title, subTitle, imgSrc, link, altText}) => 
                    {
                        return (
                            <div key={id} className='photo__item'>
                                <div class="photo__item__image">
                                    <img src={imgSrc} alt={altText} />
                                </div>
                                <h3>{title}</h3>
                                <a href={link} className='btn' target='blank'>See More</a>
                                <p>{subTitle}</p>
                            </div>
                        )
                    })
            }
        </div>
    </section>
  )
}

export default Photo