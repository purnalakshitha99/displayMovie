import React, { Component } from "react";

import _ from "lodash";
const Plagination = (props) => {
  const { itemsCount, pageSize, currentPage } = props;
  console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => props.onPageChange(page)}
              style={{ cursor: "pointer" }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Plagination;
