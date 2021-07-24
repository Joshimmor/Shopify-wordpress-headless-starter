/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";
import Image from "next/image"
import {client} from "../../Context/ShopifyClientContext";
import styles from "../../styles/store.module.css";

export const getStaticPaths = async () => {
let data = await client.product.fetchAll();
let paths = data.map( n => {
    return{
        params:{id:n.id}
    }
})
return {
    paths,
    fallback:false
}
};
export const getStaticProps = async (context) => {
let id = context.params.id;
let data = await client.product.fetch(id);
    if(!data){
        return{
            notFound: true
        }
    }
    return{
        props: {item: JSON.parse(JSON.stringify(data))}
    }
}
export default function productPage({item}) {
    return (
        <div className={styles.productCol}>
            <div className={styles.productHeader}>
                <Link href={'/shop'}><a>Back</a></Link>
            </div>
            <h1>{item.title}</h1>
            <div className={styles.productImage}>
            <Image
                src={item.images[0].src}
                alt={item.title}
                layout="fill"
                objectFit="contain"
                priority
                />
            </div>
        </div>
    )
};
