import { Song } from '@/types'
import { PlayCircleIcon } from '@heroicons/react/20/solid'

type SongDetailProps = {
  songs: Song[]
  handleClick: (song: Song) => void
}

export default function SongTable({ songs, handleClick }: SongDetailProps) {
  return (
    <table className="table-auto my-6 w-full text-center  bg-white bg-opacity-20 rounded-lg border-collapse">
      <thead>
        <tr className="border-b border-white border-opacity-25">
          <th>歌名</th>
          <th>歌手</th>
          <th>类别</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {songs.length === 0 ? (
          <tr className="border-b border-white border-opacity-25 hover:bg-white hover:bg-opacity-40">
            <td colSpan={4}>歌单里没有诶~隐藏歌单碰碰运气!</td>
          </tr>
        ) : (
          songs.map((song, idx) => (
            <tr
              key={`${song.name}-${idx}`}
              onClick={() => handleClick(song)}
              className="border-b border-white border-opacity-25 hover:bg-white hover:bg-opacity-40"
            >
              <td className="font-semibold">{song.name}</td>
              <td>{song.artist}</td>
              <td>{song.category}</td>
              <td>
                {song.BVID && (
                  <a
                    className="cursor-pointer flex justify-center"
                    href={`https://www.bilibili.com/video/${song.BVID}`}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <PlayCircleIcon
                      className="h-5 w-5 text-white opacity-50 hover:opacity-80"
                      aria-hidden={true}
                    />
                  </a>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
