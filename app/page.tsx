'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Head from 'next/head'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import copy from 'copy-to-clipboard'

import { Song, FilterValue } from '@/types'
import songs from '@/config/songs.json'
import config from '@/config/config.json'
import Banner from '@/components/Banner'
import SongTable from '@/components/SongTable'
import Filter from '@/components/Filter'

import styles from './page.module.css'

export default function Home() {
  // 搜索栏
  const [filter, setFilter] = useState<FilterValue>({
    category: '',
    keyword: '',
  })
  // 回到顶部按钮
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowBackToTop(window.scrollY > 300)
    })
  }, [])

  const categories = React.useMemo(
    () =>
      songs
        .reduce((acc: string[], song: Song) => {
          if (!acc.includes(song.category)) {
            acc.push(song.category)
          }
          return acc
        }, [])
        .sort(),
    [],
  )

  const filteredSongs: Song[] = songs.filter(
    (song) =>
      (song.name.includes(filter.keyword.toLowerCase()) ||
        song.artist.includes(filter.keyword.toLowerCase())) &&
      (filter.category ? song.category === filter.category : true),
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
    <div className="bg-[url('/assets/images/background.webp')] bg-no-repeat bg-center bg-fixed bg-cover">
      <Head>
        <title>{config.title}</title>
        <meta
          name="keywords"
          content="B站,bilibili,哔哩哔哩,虚拟主播,歌单,vup"
        />
        <meta name="description" content={`${config.title}`} />
      </Head>
      <div className="container mx-auto px-4">
        <Banner />
        <Filter
          categories={categories}
          filter={filter}
          setFilter={setFilter}
          onRandom={randomSong}
        />
        <SongTable songs={filteredSongs} handleClick={handleClick} />
      </div>
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </div>
  )
}
