import Image from 'next/image'

import config from '@/config/config.json'

export default function Banner() {
  return (
    <div>
      <Image
        src="/assets/images/avatar.webp"
        alt="avatar"
        width={256}
        height={256}
      />
      <h1>{config.title}</h1>
      <div>
        <a
          href={`https://live.bilibili.com/${config.liveRoomID}`}
          target="_blank"
        >
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <Image
              src="/assets/icons/bilibili.png"
              alt="bilibili"
              className="mr-1"
              width={20}
              height={20}
            />
            <span>直播间</span>
          </button>
        </a>
      </div>

      <p>轻点歌名可以复制哦</p>
    </div>
  )
}
