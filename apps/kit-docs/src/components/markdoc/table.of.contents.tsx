// Source: https://github.com/shadcn/ui/blob/main/apps/www/components/toc.tsx
// @ts-nocheck
"use client"

import * as React from "react"


export type TableOfContents = {
  length: any
  map: any
  id: string
  title: string
  attributes: { [key: string]: any }
  children?: TableOfContents[]
}

interface TocProps {
  toc: TableOfContents[]
}

interface TreeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string
}

export function TableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc
        ? toc
            .flatMap((item) => [
              `#${item.id}`,
              item?.children?.map((item) => `#${item.id}`),
            ])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  )

  const activeHeading = useActiveItem(itemIds)

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.length ? (
    <ul className='upper-list'>
      {tree.map((item, index) => {
        return (
          <li key={index} className='list'>
            <a
              href={`#${item.id}`}
              className='link'
            >
              {item.title}
            </a>
            {item.children?.length > 0 && level < 3 ? (
              <Tree
                tree={item.children}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
