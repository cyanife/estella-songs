import Image from 'next/image'

import config from '@/config/config.json'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <header className="pt-10">
      <div className="flex justify-center">
        <Image
          className="rounded-full ring-4 ring-white"
          src="/assets/images/avatar.webp"
          alt="avatar"
          width={256}
          height={256}
          priority={true}
        />
      </div>
      <h1 className="text-center text-3xl mt-4 subpixel-antialiased text-white opacity-80 font-semibold">
        {config.title}
      </h1>
      <div className="flex justify-center mt-6">
        <a
          href={`https://live.bilibili.com/${config.liveRoomID}`}
          target="_blank"
        >
          <button className="bg-opacity-20 bg-gray-100 hover:bg-opacity-100 py-1 px-4 font-light rounded-full inline-flex items-center shadow-md">
            <Image
              src="/assets/icons/bilibili.png"
              alt="bilibili"
              width={20}
              height={20}
            />
            <span className="mx-1">直播间</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden={true} />
          </button>
        </a>
      </div>
      <p className="text-center mt-3 text-white opacity-50 hover:opacity-80">
        点击歌名可以复制哦
      </p>
    </header>
  )
}
