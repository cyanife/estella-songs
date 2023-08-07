import { config } from 'process'

export type Language = '国语' | '日语' | '英语' | '粤语' | '韩语' | ''

export type Song = {
  name: string
  artist: string
  language: string
  BVID: string
}

export type config = {
  title: string
  liveRoomId: string
  footer: string
}
