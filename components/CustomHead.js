import Head from "next/head";

export default function CustomHead({ title, description, keywords }) {
    return (
        <Head>
            <meta name="description" content={description} />
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
        </Head>
    );
}
