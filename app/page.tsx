'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Head from 'next/head'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import copy from 'copy-to-clipboard'

import { Language, Song } from '@/config/types'
import songs from '@/config/songs.json'
import config from '@/config/config.json'
import Banner from '@/components/Banner'
import SongTable from '@/components/SongTable'

export default function Home() {
  // 语言
  const [language, setLanguage] = useState<Language>('')
  // 搜索栏
  const [filter, setFilter] = useState<string>('')
  // 回到顶部按钮
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowBackToTop(window.scrollY > 300)
    })
  }, [])

  const filteredSongs: Song[] = songs.filter(
    (song) =>
      (song.name.includes(filter.toLowerCase()) ||
        song.artist.includes(filter.toLowerCase())) &&
      (language ? song.language.includes(language) : true),
  )

  const handleClick = (song: Song) => {
    copy(`点歌 ${song.name}/${song.artist}`)
    toast.success(`${song.name} 已复制到剪贴板!`)
  }

  // 随便听听
  const randomSong = () => {
    const random = Math.floor(Math.random() * songs.length + 1)
    const song = songs[random]
    handleClick(song)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta
          name="keywords"
          content="B站,bilibili,哔哩哔哩,虚拟主播,歌单,vup"
        />
        <meta name="description" content={`${config.title}`} />
      </Head>
      <main>
        <Banner />
        <div className="flex">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
          ></input>
        </div>
        <SongTable songs={filteredSongs} handleClick={handleClick} />
      </main>
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  )
}
