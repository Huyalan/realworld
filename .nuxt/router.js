import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51a01b15 = () => interopDefault(import('../pages/editor/index.vue' /* webpackChunkName: "pages/editor/index" */))
const _3436ba52 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _d9be5752 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _5082cb0b = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _61f528d6 = () => interopDefault(import('../pages/article/components/article-comments.vue' /* webpackChunkName: "pages/article/components/article-comments" */))
const _fac6b532 = () => interopDefault(import('../pages/article/components/article-meta.vue' /* webpackChunkName: "pages/article/components/article-meta" */))
const _b1730bc8 = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _1281483d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _50a3f6bc = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _51a01b15,
    name: "editor"
  }, {
    path: "/login",
    component: _3436ba52,
    name: "login"
  }, {
    path: "/profile",
    component: _d9be5752,
    name: "profile"
  }, {
    path: "/settings",
    component: _5082cb0b,
    name: "settings"
  }, {
    path: "/article/components/article-comments",
    component: _61f528d6,
    name: "article-components-article-comments"
  }, {
    path: "/article/components/article-meta",
    component: _fac6b532,
    name: "article-components-article-meta"
  }, {
    path: "/article/:slug?",
    component: _b1730bc8,
    name: "article-slug"
  }, {
    path: "/",
    component: _1281483d,
    name: "index"
  }, {
    path: "/register",
    component: _50a3f6bc,
    name: "register"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
