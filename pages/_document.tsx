import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script
                        data-ad-client="ca-pub-6369096563909122"
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                </body>
            </Html>
        );
    }
}
