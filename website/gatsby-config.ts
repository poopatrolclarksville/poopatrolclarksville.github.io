import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `poo-patrol`,
    siteUrl: `http://poopatrol.github.io`,
    company: {
      ownerInfo: {
        name: 'Tyler Meeks',
        phone: '(931) 436-3707',
        email: 'poopatrolclarksville@gmail.com',
      },
      socials: {
        facebook: 'https://www.facebook.com/PooPatrolClarksvilleTN',
      },
      services: {
        scooping: 'Poop Scooping',
        deoderizing: 'Yard Deoderizing',
      },
      pricing: {
        weekly: 50.0,
        twiceWeekly: 75.0,
        biWeekly: 33.0,
        oneTime: 40.0,
        deoderizing: 36.0,
        initCleanFee: 25.0,
      },
    },
  },
  // graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/assets/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'icons',
        path: `${__dirname}/assets/icons`
      },
      __key: 'icons',
    },
  ],
};

export default config;
