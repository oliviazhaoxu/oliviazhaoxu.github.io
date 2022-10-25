import React from "react";
// install ReactSoundCloud: https://www.npmjs.com/package/react-soundcloud-embedded
import ReactSoundCloud from 'react-soundcloud-embedded';
import './audio.css'

const Audio = () => {
  const tracks = [
    {
      id: 1,
      title: 'Mandarin: Accent and Identity',
      audioSrc: 'https://soundcloud.com/zhao-xu-233382804/mandarin-accent-and-identity?si=ad1d56fc29a94d298add2978a95d3e33&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      intro: 'At 17, I went to a university in Beijing. It was the first time I left my little hometown behind, and also the first time that I discovered, I’ve been saying the name of “salt” wrong the whole time...'
    },

    {
      id: 2,
      title: 'Christmas Tree Hunt',
      audioSrc: 'https://soundcloud.com/j-school-talks/christmas-tree-farm?si=575a0edf3e184bdb9c203e7a68f1d19d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      intro: 'Christmas is around the corner. And North Gate Radio’s Olivia Zhao went to a Christmas tree lot in Albany to find the perfect Christmas Tree.'
    },

    {
      id: 3,
      title: 'Haunted History Halloween Hike',
      audioSrc: 'https://soundcloud.com/j-school-talks/haunted-hike?si=bf4f0ed776ed4551ad5e509e3b406449&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      intro: 'If you happened to have walked past the Point Richmond Market & Deli this past Saturday afternoon, you might have heard a woman in a lavender, vintage dress and silk ribbon bonnet crying hysterically. Don’t panic, you didn’t step through a time machine. This was a character in the Halloween Haunted History Hike led by Karen Buchanan.'
    },

    {
      id: 4,
      title: 'Hosting: North Gate Radio',
      audioSrc: 'https://soundcloud.com/j-school-talks/local-legends?si=e7a4e999cd5a48c59ef1db399ec471fd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      intro: 'For the first episode of this season, I was hosting with Lola Proctor. I interviewed a health expert at UC Berkeley for how to have a safe Halloween trick-or-treat.'
    }
  ]

  return (
    <section id="audio">
      <h1>Audio Work</h1>

      <div className="container audio__container">
        {
          tracks.map(({id, title, audioSrc, intro}) => {
            return (
              <div key={id} className='track'>
                  <h2>{title}</h2>
                  <ReactSoundCloud url={audioSrc} height="200px" />
                  <p>{intro}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Audio