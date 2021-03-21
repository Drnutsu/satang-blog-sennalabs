import React from 'react'
import { DateTime } from 'luxon'

import BlogCard from './index'
import { BlogCardMapperProps } from './interface'

const BlogCardMapper = ({ article, index, isBlue }: BlogCardMapperProps) => (
  <>
    <BlogCard
      slug={article.slug}
      {...(index && { key: article.content.title + index })}
      tag={{
        color: article.content.category.content.color,
        title: article.content.category.content.title,
      }}
      image={article.content.image.filename}
      title={article.content.title}
      intro={article.content.intro}
      blogAuthor={{
        readTime: article.content.read_time,
        photoUrl: article.content.author.content.photo.filename,
        name: article.content.author.content.name,
        publicAt: DateTime.fromISO(article.published_at),
      }}
      isBlue={isBlue}
    />
  </>
)

export default BlogCardMapper
