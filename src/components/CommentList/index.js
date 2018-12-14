import React from 'react'
import { Link } from 'react-router-dom'
import { NamespacesConsumer } from 'react-i18next'

import CommentList from './style'

export default ({ slug, comments, deleteComment }) => (
  <NamespacesConsumer ns="components">
  {
    t => (
      <CommentList>
      {
        comments.length ?
        comments.map(v => (
          <li key={v.id}>
            <Link to={`/@${v.author.username}`} className="img">
              <img src={v.author.image ? v.author.image : `${process.env.PUBLIC_URL}/assets/profile-dummy.jpg` } alt="" />
            </Link>
            <div className="wrap">
              <div className="info">
                <Link to={`/@${v.author.username}`} className="name">{v.author.username}</Link>
                <span className="date">{new Date(v.createdAt).toDateString()}</span>
              </div>
              <button type="button" className="del" onClick={() => { deleteComment(slug, v.id) }}>
                <i className="far fa-trash-alt"></i> <span className="hide">{t('common:delete')}</span>
              </button>
              <div className="content">
                {v.body}
              </div>
            </div>
          </li>
        )) : 
        <li className="no-item">
          {t('comment.noItem')}
        </li>
      }
      </CommentList>
    )
  }
  </NamespacesConsumer>
)