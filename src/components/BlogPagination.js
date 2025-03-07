import React from "react"
import { Link } from "gatsby"

import styles from "./styles/blogPagination.module.scss"

const BlogPagination = ({ page, totalPages }) => (
  <div className={styles.paginationWrapper}>
    <p>
      Page {page} / {totalPages}
    </p>

    <div>
      {page > 1 ? (
        <Link
          to={page === 2 ? `/blog` : `/blog/page/${page - 1}`}
          className={styles.paginationBtn}
        >
          Previous
        </Link>
      ) : (
        <div />
      )}

      {page < totalPages ? (
        <Link to={`/blog/page/${page + 1}/`} className={styles.paginationBtn}>
          Next
        </Link>
      ) : (
        <div />
      )}
    </div>
  </div>
)

export default BlogPagination
