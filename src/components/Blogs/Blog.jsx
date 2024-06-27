import { Fragment, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Popover,
  Transition,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import User from '../../assets/website/user.jpg'

const posts = [
  {
    id: 1,
    title: 'Understanding Mindfulness',
    href: '#',
    description:
      'Learn about the benefits of mindfulness and how to incorporate it into your daily routine to improve mental clarity and reduce stress.',
    date: 'May 28, 2024',
    datetime: '2024-05-28',
    category: { title: 'Mental Health', href: '#' },
    author: {
      name: 'Auther Name',
      role: 'Mental Health Specialist',
      href: '#',
      imageUrl:
        User,
    },
  },
  {
    id: 2,
    title: 'The Importance of Sleep',
    href: '#',
    description:
      'Discover the vital role sleep plays in mental wellness and get tips on how to improve your sleep hygiene for better overall health.',
    date: 'April 15, 2024',
    datetime: '2024-04-15',
    category: { title: 'Wellness', href: '#' },
    author: {
      name: 'Auther Name',
      role: 'Wellness Coach',
      href: '#',
      imageUrl:
      User,
    },
  },
  {
    id: 3,
    title: 'Healthy Eating for a Healthy Mind',
    href: '#',
    description:
      'Explore how nutrition affects mental health and get practical advice on maintaining a balanced diet to support your mental wellbeing.',
    date: 'March 22, 2024',
    datetime: '2024-03-22',
    category: { title: 'Nutrition', href: '#' },
    author: {
      name: 'Auther Name',
      role: 'Nutritionist',
      href: '#',
      imageUrl:
      User,
    },
  },
  // More posts...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div id='blog' className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover insights and tips on mental wellness from our experts.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
