"use client"
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import Image from "next/image.js";

async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "blog"));

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}

const Page = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setBlogData(data);
        }
        fetchData();
    }, []);

    return (
        <div className="bg-blue-900 text-white flex h-full flex-col mx-12 items-center justify-center">
            { blogData.map((blog) => (
                <div key={ blog.id }>
                    <p>{ blog.name }</p>
                    <p>{ new Date(blog.publish_date.seconds * 1000).toLocaleDateString() }</p>
                    <p> { blog.status }  </p>
                    { blog.content.map((item, index) => (
                        <div key={ index }>
                            <p>Type: { item.type }</p>
                            <p>Value: { item.value }</p>
                        </div>
                    )) }

                    
                    {/* <Image width={100} height={100} src={ blog.header_image } /> */}
                </div>
            )) }
        </div>
    );
};

export default Page;
