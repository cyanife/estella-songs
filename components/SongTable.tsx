import { Song } from '@/config/types'

type SongDetailProps = {
  songs: Song[]
  handleClick: (song: Song) => void
}

export default function SongTable({ songs, handleClick }: SongDetailProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>歌名</th>
          <th>歌手</th>
          <th>语言</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {songs.length === 0 ? (
          <tr>
            <td colSpan={4}>歌单里没有诶~隐藏歌单碰碰运气!</td>
          </tr>
        ) : (
          songs.map((song) => (
            <tr key={song.name} onClick={() => handleClick(song)}>
              <td>{song.name}</td>
              <td>{song.artist}</td>
              <td>{song.language}</td>
              <td>
                {song.BVID && (
                  <a
                    href={`https://www.bilibili.com/video/${song.BVID}`}
                    target="_blank"
                  >
                    歌切
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
