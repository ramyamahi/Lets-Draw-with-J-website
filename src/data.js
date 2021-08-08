import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaPencilAlt, FaPencilRuler, FaYoutube } from 'react-icons/fa';
import { FcIpad } from 'react-icons/fc';
import { TiTick  } from 'react-icons/ti'
import { BsFillPeopleFill  } from 'react-icons/bs'
import { GiSpellBook  } from 'react-icons/gi'

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaYoutube />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
];

export const services = [
  {
    id: 1,
    title: 'Graphic design',
    icon: <FaPencilAlt />,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at.`,
  },
  {
    id: 2,
    title: 'Procreate Art',
    icon: <FcIpad />,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at.`,
  },
  {
    id: 3,
    title: 'Drawing',
    icon: <FaPencilRuler />,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at.`,
  },
];

export const surveys = [
  {
    id: 1,
    count: '55',
    title: 'Works Completed',
    icon: <TiTick />,
  },
  {
    id: 2,
    count: '40',
    title: 'Clients',
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    count: '6',
    title: 'Years of Experience',
    icon: <GiSpellBook />,
  },
];

export const reviews = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];

export const gallery = [
  {
    id: 1,
    title: 'caricature',
    category: 'caricature',
    img: './images/caricature.jpeg',
  },
  {
    id: 2,
    title: 'Bird',
    category: 'drawing',
    img: './images/birds.jpeg',
  },
  {
    id: 3,
    title: 'retro',
    category: 'procreate',
    img: './images/retro.jpeg',
  },
  {
    id: 4,
    title: 'retro1',
    category: 'procreate',
    img: './images/retro1.jpeg',
  },
  {
    id: 5,
    title: 'retro2',
    category: 'procreate',
    img: './images/retro2.jpeg',
  },
  {
    id: 6,
    title: 'retro3',
    category: 'procreate',
    img: './images/retro3.jpeg',
  },
];
