import react from 'react'
import config from '../config/config.json'

export default function Footer() {
  const currentYear = react.useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="text-center py-6 mt-4 text-yellow-600 border-t border-yellow-600 border-opacity-50">
      {/* get current year */}
      Copyright © {currentYear}
      <a
        href={`https://space.bilibili.com/${config.buid}`}
        target="_blank"
        className="no-underline hover:text-blue-400 pl-1"
      >
        @{config.bid}
      </a>
    </footer>
  )
}
