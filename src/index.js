import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import locale from './locale'

import store from 'store'
import App from 'App'

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem('lang') || (navigator.language === 'ko-KR' ? 'ko' : 'en'),
    resources: {
      en: locale.en,
      ko: locale.ko,
    },
})

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })

const alertOptions = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <ScrollContext>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <I18nextProvider i18n={i18next}>
                <Component />
              </I18nextProvider>
            </AlertProvider>
          </ScrollContext>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

renderApp(App)

if(module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    renderApp(NextApp)
  })
}