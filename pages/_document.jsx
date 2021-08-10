import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Nestor Eduardo Mamani Pantoja</title>
          <meta name='title' content='Nestor Eduardo Mamani Pantoja' />
          <meta
            name='description'
            content='Filled by curiosity. Action bias. I aim creating value using technology and working on projects with purpose.'
          />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://nestoredduardo.me/' />
          <meta property='og:title' content='Nestor Eduardo Mamani Pantoja' />
          <meta
            property='og:description'
            content='Filled by curiosity. Action bias. I aim creating value using technology and working on projects with purpose.'
          />
          <meta
            property='og:image'
            content='https://drive.google.com/thumbnail?id=1LOTJI4k47pcSXTo8Umk63eM_cx_M-xpO'
          />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://nestoredduardo.me/' />
          <meta
            property='twitter:title'
            content='Nestor Eduardo Mamani Pantoja'
          />
          <meta
            property='twitter:description'
            content='Filled by curiosity. Action bias. I aim creating value using technology and working on projects with purpose.'
          />
          <meta
            property='twitter:image'
            content='https://drive.google.com/thumbnail?id=1LOTJI4k47pcSXTo8Umk63eM_cx_M-xpO'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
