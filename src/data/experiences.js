import huge from "../assets/huge.png";
import magneto from "../assets/magneto.jpg";
import make from "../assets/make.jpg";
import vantty from '../assets/vantty.png';

export const experiences = [
  {
    section: 'employee',
    cards: [
      {
        title: 'Huge Inc.',
        subtitle: 'Web Developer',
        description: 'Experience design and digital marketing agency that provides strategy, marketing, design, and technology services.',
        image: {
          src: huge,
          alt: 'huge logo',
        },
        icons: [
          {
            url: 'https://www.hugeinc.com/',
            icon: 'world',
          }
        ],
      },
      {
        title: 'Make it Real',
        subtitle: 'Mentor',
        description: 'High quality online and live programming mentoring.',
        image: {
          src: make,
          alt: 'make it real logo',
        },
        icons: [
          {
            url: 'https://makeitreal.camp/',
            icon: 'world',
          }
        ],
      },
      {
        title: 'Magneto365',
        subtitle: 'Web Developer',
        description: 'Find and apply to inspiring jobs.',
        image: {
          src: magneto,
          alt: 'magneto logo',
        },
        icons: [
          {
            url: 'https://www.magneto365.com/',
            icon: 'world',
          }
        ],
      },
    ],
  },
  {
    section: 'entrepreneurship',
    cards: [
      {
        title: 'Vantty',
        subtitle: 'Co-Founder & Web Developer',
        description: 'Make up artist marketplace. Connect clients with top make up artists.',
        image: {
          src: vantty,
          alt: 'vantty logo',
          size: 'contain',
        },
        icons: [
          {
            url: 'https://www.vantty.com/',
            icon: 'world',
          }
        ]
      }
    ],
  }
];
