import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Head from 'next/head';

const config: DocsThemeConfig = {
    logo: <span style={{ fontSize: "24px" }}><strong>Tencere</strong> (Test yapıyoruz) </span>,
    project: {
        link: 'https://github.com/heyturkiye58/tencere',
    },
    chat: {
        link: 'https://tencere.feign-wiki.tk/',
    },
    docsRepositoryBase: 'https://github.com/heyturkiye58/tencere',
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Tencere',
            openGraph: {
                type: 'website',
                locale: 'en_IE',
                url: 'https://tencere.feign-wiki.tk',
                site_name: 'Tencere',
            }
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" />
                <style>{`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: "Poppins", sans-serif;
                    }

                `}</style>
            </Head>
        </>
    ),
    footer: {
        component: <></>
    },
    i18n: [
        { locale: 'en', text: 'Tencere tava kuşkana :)' }
    ]
}

export default config;
