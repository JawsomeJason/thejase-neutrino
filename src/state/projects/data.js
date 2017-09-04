import { PropTypes } from 'react';

export const PROP_TYPES = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  screenshots: PropTypes.objectOf(PropTypes.bool).isRequired,
  slug: PropTypes.string,

  employer: PropTypes.string,
  ended: PropTypes.string,
  started: PropTypes.string,
  tags: PropTypes.objectOf(PropTypes.bool),
  testimonials: PropTypes.objectOf(PropTypes.bool),
  url: PropTypes.string,
};

export const DEFAULT_PROPS = {
  employer: null,
  ended: null,
  started: null,
  tags: {},
  testimonials: {},
  url: null,
};

const projects = [
  {
    id: 'one-kings-lane',
    description: 'One Kings Lane is an online marketplace that brings shoppers exceptional value on a spectacular collection of top-brand, designer, and vintage items for the home.\n\n## Accomplishments\n\n* Single-handedly engineered/implemented the mobile-first, mobile-optimized experience.  Naturally scaffolded to scale up.\n* Consumer storefront development, feature enhancements, performance engineering.  \n* Passionate focus on Web accessibility and usability.  \n* Lead development for the mobile-optimized website, creating a rich, usable and accessible environment for consumers.  \n* Spearhead standards and documentation for fellow front-end engineers.  \n* Host internal tech talks for colleagues, providing knowledge transfer and ramping up for the latest development tools and techniques.\n* Sass master. Period.',
    employer: 'one-kings-lane',
    ended: '2014-06-01T00:00:00.000Z',
    logo: 'one-kings-lane',
    name: 'Responsive Shopping Experience',
    property: 'One Kings Lane',
    screenshots: {
      'one-kings-lane': true,
      'one-kings-lane-iphone': true,
      'one-kings-lane-ipad': true,
      'one-kings-lane-desktop': true,
    },
    slug: 'one-kings-lane',
    started: '2011-11-01T00:00:00.000Z',
    tags: {
      'front-end-leader': true,
    },
    testimonials: {
      'erin-medlin': true,
      'daniel-pritchard': true,
      'melanie-oei': true,
    },
    url: 'https://www.onekingslane.com',
  },
  {
    id: 'pagerduty',
    description: "PagerDuty is an alarm aggregation and dispatching service for system administrators and support teams. It collects alerts from your monitoring tools, gives you an overall view of all of your monitoring alarms, and alerts an on duty engineer if there's a problem.\n\n\nI spearheaded many accessibility and usability improvements to the PagerDuty Web platform, including proper application and form interaction, as well as defined the internal CSS framework methodoligies and guidelines.\n\n### Accomplishments\n\n* Focus on analyzing and implementing adaptive, intuitive interfaces across the PagerDuty web application.  \n* Migrate existing platform from Backbone.js to Ember.js.\n* Overhauling a batch user input/invite form to allow full keyboard-only interactions, eliminating the existing problems that required using a pointing device to continually add new users.  Increased average user addition per session by ~240%.  Extended this interaction model across the entire application.\n* Create and maintain a single source of truth rulebook and parser for user permissions.  Roles defined once and parsed from every platform, eliminating repetitive definitions and ensuring role parity.\n* CSS go-to and gatekeeper for the entire application.  Host many brown-bag lunches, offering insight and advanced understanding of CSS complexity management.",
    employer: 'pagerduty',
    logo: 'pagerduty',
    name: 'Alert Platform Accessibility',
    property: 'PagerDuty',
    screenshots: {
      pagerduty: true,
      'pagerduty-desktop': true,
    },
    slug: 'pagerduty',
    tags: {
      'front-end-leader': true,
    },
    url: 'https://www.pagerduty.com',
  },
  {
    id: 'hunters-alley',
    description: "*A marketplace for décor lovers, Hunters Alley lets you buy and sell vintage, contemporary pre-owned, and handcrafted furnishings and decor.*\n\n### Accomplishments\n\n* Incessantly focus on pixel-perfect implementation of Creative design (closely knit with creative teams), whilst accounting for a responsive medium \n* Owner of CSS architecture (Sass pre-processor + OO/BEM class structure)\n* Utilize Angular JS for event delegation, constantly maintaining a progressively-enhanced approach\n* Restructure and implement content for SEO and accessibility/usability\n* Modern browser-centric approach--as long as it's usable on older devices, it works",
    employer: 'one-kings-lane',
    ended: '2014-06-01T00:00:00.000Z',
    logo: 'hunters-alley',
    name: 'Décor Shopping Experience',
    property: 'Hunters Alley',
    screenshots: {
      'hunters-alley': true,
      'hunters-alley-desktop': true,
    },
    slug: 'hunters-alley',
    started: '2013-09-01T00:00:00.000Z',
    testimonials: {
      'erin-medlin': true,
      'adam-panasowich': true,
    },
  },
  {
    id: 'food-network',
    description: '*Food Network is a unique lifestyle network, website and magazine that connects viewers to the power and joy of food. It is a unique lifestyle network, website and magazine that connects viewers to the power and joy of food. The network strives to be viewers’ best friend in food and is committed to leading by teaching, inspiring and empowering through its talent and expertise. Food Network is distributed to more than 100 million U.S. households and averages more than 9.9 million unique web users monthly. Since launching in 2009, Food Network Magazine has tripled its rate base and delivers a circulation of 1.4 million. Headquartered in New York, Food Network has a growing international presence with programming in more than 150 countries, including 24 hour networks in Great Britain, India, Asia and Africa.*\n\n### Accomplishments\n\n* Manage a team of over 10 engineers across 6 of the best cable television brands.\n* Strong focus on skill growth matrices, knowledge transfer, risk mitigation and high ROI toolsets.  \n* Lead video API development, allowing all brands to utilize one digital video interface, including user metrics and advertisement interstitials, all while utilizing whatever video provider is needed.',
    employer: 'scripps-networks-interactive',
    logo: 'food-network',
    name: 'Show Pages and Video API',
    property: 'Food Network',
    screenshots: {
      'food-network': true,
      'food-network-desktop': true,
    },
    slug: 'food-network',
    url: 'http://www.foodnetwork.com',
  },
  {
    id: 'gac-tv',
    description: '*Great American Country offers all things Americana, from shabby chic decorating for a home or wedding to southern comfort food, entertainment and travel tips across the U.S.*\n\n## Accomplishments\n\n- Management of country music celebrity tour pages.\n- Automatic tour location updates (e.g. *"Buy Tickets" vs. "See Photos"*) based on the time the visitor loads the tour page.',
    employer: 'scripps-networks-interactive',
    logo: 'gac-tv',
    name: 'GAC TV Tour Pages',
    property: 'Great American Country Television',
    screenshots: {
      'gac-tv': true,
      'gac-tv-desktop': true,
    },
    slug: 'great-american-country-television',
    url: 'http://www.greatamericancountry.com',
  },
  {
    id: 'hgtv',
    description: '* HGTV is an online  television channel that features programming on home décor, remodeling ideas, landscaping, and bathroom design.*\n\n## Accomplishments\n\n* Managed popular TV-show pages, including [House Hunters](http://www.hgtv.com/shows/house-hunters), [Design Star](http://www.hgtv.com/shows/hgtv-design-star) and [Curb Appeal](http://www.hgtv.com/shows/curb-appeal)\n* Implemented the first Scripps Networks shared Video API, including syncronized ads and interstitials\n* Annually managed the [HGTV Dream Home Giveaway](http://www.hgtv.com/design/hgtv-dream-home)',
    employer: 'scripps-networks-interactive',
    logo: 'hgtv',
    name: 'Lifestyle Entertainment and Contests',
    property: 'HGTV',
    screenshots: {
      hgtv: true,
      'hgtv-desktop': true,
    },
    slug: 'hgtv',
    url: 'http://www.hgtv.com',
  },
  {
    id: 'river-sports-outfitters',
    description: '*River Sports Outfitters is an independent outdoor specialty retailer in Knoxville, Tennessee. They provide local and online customers with the best in road / trail biking, road / trail running, camping / backpacking, rock climbing, and paddle sports gear.*\n\n## Accomplishements\n\n- Built and managed the front-end for the AspxCommerce platform.\n ',
    ended: '2009-07-01T00:00:00.000Z',
    logo: 'river-sports-outfitters',
    name: 'Outdoor Sports Shopping Experience',
    property: 'River Sports Outfitters',
    screenshots: {
      'river-sports-outfitters': true,
      'river-sports-outfitters-desktop': true,
    },
    slug: 'river-sports-outfitters',
    url: 'https://www.riversportsoutfitters.com',
  },
  {
    id: 'outdoor-knoxville',
    description: 'Outdoor Knoxville is an initiative to make incredible natural and recreation assets an economic driver for Knoxville, Tennessee.\n\n## Accomplishments\n\n- Created a social network for local outdoor enthusiasts.\n- Implemented a community-driven social event calendar\n- Lead the front-end experience',
    ended: '2009-02-01T00:00:00.000Z',
    logo: 'outdoor-knoxville',
    name: 'Outdoor Sports Social Network',
    property: 'Outdoor Knoxville',
    screenshots: {
      'outdoor-knoxville': true,
      'outdoor-knoxville-desktop': true,
    },
    slug: 'outdoor-knoxville',
    url: 'http://www.outdoorknoxville.com',
  },
];

export default projects;