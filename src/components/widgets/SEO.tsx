import * as React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Personal portfolio and resume of Samir Roy',
  title: (t = '') => `Samir Roy - ${t ? ` - ${t}` : ''}`,
  url: 'https://samirroy.com',
  author: 'Samir Roy',
  keywords: ['samir roy', 'startup', 'product', 'engineer', 'software', 'quant'],
  img: '',
};

const SEO = ({ title }: { title?: string } = {}) => (
  <Helmet>
    <meta property="og:title" content={SEO_DATA.title(title)} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SEO_DATA.url} />
    <meta property="og:image" content={SEO_DATA.img} />
    <meta property="og:description" content={SEO_DATA.description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={SEO_DATA.url} />
    <meta name="twitter:title" content={SEO_DATA.title(title)} />
    <meta name="twitter:description" content={SEO_DATA.description} />
    <meta name="twitter:domain" content={SEO_DATA.url} />
    <meta name="twitter:image:src" content={SEO_DATA.img} />

    <meta name="description" content={SEO_DATA.description} />
    <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
    <meta name="author" content={SEO_DATA.author} />
    <title>{SEO_DATA.title(title)}</title>
    <html lang="en" />
  </Helmet>
);

export default SEO;
