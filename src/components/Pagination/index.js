import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import Pagination from "react-js-pagination"
import Paging from './style'

export default ({
  page = 1,
  total = 1,
  onChange = () => {},
  getPageUrl = () => {},
  countPerPage = 10,
  pageLen = 5,
}) => (
  <NamespacesConsumer ns="components">
  {
    t => (
      <Paging>
        <Pagination
          activePage={page}
          totalItemsCount={total}
          onChange={onChange}
      
          itemsCountPerPage={countPerPage}
          pageRangeDisplayed={pageLen}

          getPageUrl={getPageUrl}

          innerClass="pagination"
          activeLinkClass="active"
      
          firstPageText={<span className="fas fa-angle-double-left"><span className="txt">{t('pagination.first')}</span></span>}
          prevPageText={<span className="fas fa-angle-left"><span className="txt">{t('pagination.prev')}</span></span>}
          nextPageText={<span className="fas fa-angle-right"><span className="txt">{t('pagination.next')}</span></span>}
          lastPageText={<span className="fas fa-angle-double-right"><span className="txt">{t('pagination.last')}</span></span>}
        />
      </Paging>
    )
  }
  </NamespacesConsumer>
)