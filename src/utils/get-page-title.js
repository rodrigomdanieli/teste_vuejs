import defaultSettings from '@/ext/settings'

const title = defaultSettings.title || 'Admin DBSnoop!'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
