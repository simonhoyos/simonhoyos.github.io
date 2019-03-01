import reactmde from '../assets/reactmde.png';
import make from "../assets/make.jpg";

export const projects = [
  {
    section: 'Training and Mentoring',
    cards: [
      {
        title: 'React Medellin Meetup',
        subtitle: 'Co-Organizer & Speaker',
        description: 'A group of people interested in learning React and its ecosystem.',
        image: {
          src: reactmde,
          alt: 'React Medellin Meetup logo'
        },
        icons: [
          {
            url: 'https://reactmedellin.org/',
            icon: 'world',
          },
          {
            url: 'https://github.com/react-medellin/meetup',
            icon: 'github',
          },
          {
            url: 'https://www.meetup.com/React-Medellin/',
            icon: 'meetup',
          },
        ],
      },
      {
        title: 'Make it Real Top',
        subtitle: 'Mentor',
        description: 'High quality online and live programming mentoring.',
        image: {
          src: make,
          alt: 'make it real logo',
        },
        icons: [
          {
            url: 'https://makeitreal.camp/top',
            icon: 'world',
          }
        ],
      },
    ],
  },
  {
    section: 'Build With React',
    cards: [
      {
        title: 'YouTube Viewer',
        description: 'A group of people interested in learning React and its ecosystem.',
        image: {
          src: reactmde,
          alt: 'YouTube Viewer App Preview',
        },
        icons: [
          {
            url: 'https://www.meetup.com/React-Medellin/',
            icon: 'world',
          },
          {
            url: 'https://github.com/simonhoyos/react-youtube',
            icon: 'github',
          },
        ]
      },
      {
        title: 'Blog',
        description: 'High quality online and live programming mentoring.',
        image: {
          src: reactmde,
          alt: 'YouTube Viewer App Preview',
        },
        icons: [
          {
            url: 'https://www.meetup.com/React-Medellin/',
            icon: 'world',
          },
          {
            url: 'https://github.com/simonhoyos/react-blog',
            icon: 'github',
          },
        ]
      },
      {
        title: 'Forecast',
        description: 'High quality online and live programming mentoring.',
        image: {
          src: reactmde,
          alt: 'YouTube Viewer App Preview',
        },
        icons: [
          {
            url: 'https://www.meetup.com/React-Medellin/',
            icon: 'world',
          },
          {
            url: 'https://github.com/simonhoyos/react-forecast',
            icon: 'github',
          },
        ]
      },
    ],
  }
];
