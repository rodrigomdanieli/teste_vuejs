import defaultSettings from '@/ext/settings'

const title = defaultSettings.title || 'Teste'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
