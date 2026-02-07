import { ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  maxVisiblePages?: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}: PaginationProps) => {
  const getPages = (): number[] => {
    const pages: number[] = []
    const half = Math.floor(maxVisiblePages / 2)

    let start = Math.max(1, currentPage - half)
    let end = Math.min(totalPages, start + maxVisiblePages - 1)

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  const pages = getPages()

  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-[#E0EFF6]">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#70908B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={16} className="rotate-180" />
        Previous
      </button>

      {/* Pages */}
      <div className="flex items-center gap-2">
        {pages[0] > 1 && (
          <>
            <PageButton page={1} active={false} onClick={onPageChange} />
            <span className="px-1 text-slate-400">...</span>
          </>
        )}

        {pages.map((page) => (
          <PageButton
            key={page}
            page={page}
            active={page === currentPage}
            onClick={onPageChange}
          />
        ))}

        {pages[pages.length - 1] < totalPages && (
          <>
            <span className="px-1 text-slate-400">...</span>
            <PageButton
              page={totalPages}
              active={false}
              onClick={onPageChange}
            />
          </>
        )}
      </div>

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#70908B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Next
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

export default Pagination
interface PageButtonProps {
  page: number
  active: boolean
  onClick: (page: number) => void
}

const PageButton = ({ page, active, onClick }: PageButtonProps) => {
  return (
    <button
      onClick={() => onClick(page)}
      className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${active
          ? "bg-[#70908B] text-white shadow-md"
          : "bg-[#E0EFF6] text-slate-600 hover:bg-[#70908B] hover:text-white"
        }`}
    >
      {page}
    </button>
  )
}
