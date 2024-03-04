// "use client";
// import React from "react";
// import Image from "next/image";
// import demo from "../../public/demo.png";
// import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import TabsSection from "./TabsSection";

// const Team = () => {
//   return (
//     <div className="flex bg-light px-12 py-12 text-first">
//       {/* Left Image */}
//       <div className="relative pl-40 w-1/2  pr-12 rounded-3xl py-24 ">
//         <div className="z-10 absolute left-20 top-10 ">
//           <Image
//             src={demo}
//             style={{ "border-radius": "30px" }}
//             placeholder="blur"
//             width={150}
//             alt="atila"
//           />
//         </div>
//         <div className="z-10 rounded-2xl">
//           <Image
//             src={demo}
//             style={{ "border-radius": "30px" }}
//             placeholder="blur"
//             width={400}
//             alt="atila"
//           />
//         </div>
//         <div className="z-10 absolute right-20 bottom-10 ">
//           <Image
//             src={demo}
//             style={{ "border-radius": "30px" }}
//             placeholder="blur"
//             width={150}
//             alt="atila"
//           />
//         </div>
//       </div>
//       {/* Right Section */}
//       <div className="w-1/2 bg-light space-y-2 py-24 text-first">
//         <h1 className="text-5xl mb-12 capitalize font-bold">
//           Lorem ipsum dolor sit amet.
//         </h1>
//         <p className="text-lg pb-12">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
//           molestias tempora reiciendis? Ullam dolores veritatis dignissimos
//           reiciendis eum alias eligendi quaerat illo ea veniam.
//         </p>
//         <div>
//           <TabsSection />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },{
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Example() {
  return (
    <div className="bg-first text-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-100">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-100">
                  {post.date}
                </time>
                <Link
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100"
                >
                  {post.category.title}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-gray-100 group-hover:text-gray-600">
                  <Link href={post.href}>
                    <span/>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5  text-sm text-gray-100">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-100">
                    <Link href={post.author.href}>
                      <span/>
                      {post.author.name}
                    </Link>
                  </p>
                  <p className="text-gray-100">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
