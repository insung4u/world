import React, { useEffect } from 'react'
import { useSelector, useActions } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import * as tagsActions from '~/store/modules/tags'

import TagList from '~/components/TagList'

const SideTag = ({ t }) => {
  const { tags } = useSelector(state => state.tags, [])
  const actions = useActions(tagsActions, [])

  useEffect(() => {
    actions.fetch()
  }, [actions])

  return (
    <div className="tag-area">
      <h2 className="title">{t('hotTag')}</h2>
      <TagList tags={tags} />
    </div>
  )
}

export default withNamespaces('home')(SideTag)