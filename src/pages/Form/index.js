import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import compose from 'lodash-es/flowRight'
import { Helmet } from "react-helmet"
import API from '~/api'
import validator from 'validator'
import { withAlert } from 'react-alert'

import Page from './style'

const Form = (props) => {
  const { params } = props.match
  const { history, t } = props
  const [ loading, setLoading ] = useState(false)
  const [ sending, setSending ] = useState(false)
  const [ errors, setErrors ] = useState({})
  const [ form, setForm ] = useState({
    slug: '',
    title: '',
    description: '',
    body: '',
    tag: '',
  })

  const { slug, title, description, body, tag } = form

  const { userInfo } = useSelector(state => state.auth, [])

  const req = useRef(API.CancelToken.source())
  
  const fetchArticles = useCallback(async (slug) => {
    try {
      setLoading(true)

      const { data } = await API.Articles.get({
        slug,
        config: { cancelToken: req.current.token },
      })
      const { article } = data

      if(article.author.username !== userInfo.username) {
        props.alert.error(t('errorModifyAuth'))
        history.goBack()
        return
      }

      setLoading(false)
      setForm({
        slug: article.slug,
        title: article.title,
        description: article.description,
        body: article.body,
        tag: article.tagList.join(', ')
      })
    } catch(e) {
      if(e.response && e.response.data.status === '404') {
        // alert('게시물이 없습니다.')
        history.goBack()
      }
    }
  }, [history, props.alert, t, userInfo.username])

  const cancel = useCallback(() => {
    req.current.cancel()
  }, [])

  useEffect(() => {
    if(params.slug) {
      fetchArticles(params.slug)
    }

    return () => {
      cancel()
    }
  }, [fetchArticles, cancel, params.slug])

  const validate = () => {
    const errors = {}

    if(validator.isEmpty(title)) {
      errors.title = t('validate:emptyTitle')
    }

    if(validator.isEmpty(description)) {
      errors.description = t('validate:emptyDescription')
    }

    if(validator.isEmpty(body)) {
      errors.body = t('validate:emptyBody')
    }

    if(Object.keys(errors).length === 0) {
      return true

    } else {
      setErrors(errors)
      return false
    }
  }

  const submitHandle = (e) => {
    const tagList = tag.length ? tag.split(',').map(v => v.trim()) : []

    e.preventDefault()

    if(!validate()) {
      return
    }

    setSending(true)
    setErrors({})

    const method = params.slug ? 'update' : 'create'

    API.Articles[method]({
      article: {
        slug,
        title,
        description,
        body,
        tagList
      }
    }).then(res => {
      // console.log(res)

      setSending(false)
      history.push(`/article/${res.data.article.slug}`)
    }).catch(res => {
      // console.log(res.response.data)

      props.alert.error(t('errorWrite'))
      setSending(false)
    })
  }

  const changeInput = name => e => {
    setForm({
      ...form,
      [name]: e.target.value,
    })
  }

  return loading ?
  <div></div>
  :
  (
    <Page className="container">
      <Helmet title={ slug ? t('headingModify') : t('headingWrite') } />
      <div className="common-form">
        <h2 className="form-title">{ slug ? t('headingModify') : t('headingWrite') }</h2>
        <form onSubmit={submitHandle}>
          <fieldset>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('title')}
                </span>
                <input type="text" placeholder={t('title')} className="txt large block" disabled={sending} value={title} onChange={changeInput('title')} />
              </label>
              { errors.title && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.title}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('description')}
                </span>
                <input type="text" placeholder={t('description')} className="txt large block" disabled={sending} value={description} onChange={changeInput('description')} />
              </label>
              { errors.description && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.description}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('body')}
                </span>
                <textarea cols="60" rows="10" placeholder={t('body')} className="txt large block" disabled={sending} value={body} onChange={changeInput('body')}></textarea>
              </label>
              { errors.body && <p className="input-error"><i className="fas fa-times-circle"></i> {errors.body}</p> }
            </div>
            <div className="form-row">
              <label>
                <span className="form-head">
                  {t('tag')}
                </span>
                <input type="text" placeholder={t('tag')} className="txt large block" disabled={sending} value={tag} onChange={changeInput('tag')} />
              </label>
            </div>
            { sending && <div>{t('sending')}</div> }

            <div className="form-action">
              <button type="submit" className="btn large primary" disabled={sending}>{t('common:write')}</button>{' '}
              <button type="button" className="btn large" disabled={sending} onClick={history.goBack}>{t('common:cancel')}</button>
            </div>
          </fieldset>
        </form>
      </div>
    </Page>
  )
}

export default compose(
  withAlert,
  withNamespaces('form'),
)(Form)