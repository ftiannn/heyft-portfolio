'use client'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export const useAnalytics = () => {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }

  const trackDownload = (fileName: string) => {
    trackEvent('download', 'file', fileName)
  }

  const trackSocialClick = (platform: string) => {
    trackEvent('click', 'social', platform)
  }

  const trackProjectView = (projectName: string) => {
    trackEvent('view', 'project', projectName)
  }

  const trackContactClick = (method: string) => {
    trackEvent('click', 'contact', method)
  }

  const trackResumeDownload = () => {
    trackEvent('download', 'resume', 'cv.pdf')
  }

  const trackModalOpen = (modalType: string, modalName?: string) => {
    trackEvent('open', 'modal', modalName || modalType)
  }

  const trackModalClose = (modalType: string, modalName?: string) => {
    trackEvent('close', 'modal', modalName || modalType)
  }

  const trackNavigation = (fromPage: string, toPage: string) => {
    trackEvent('navigate', 'page', `${fromPage}_to_${toPage}`)
  }

  const trackExternalLink = (linkType: string, destination: string) => {
    trackEvent('click', 'external_link', `${linkType}_${destination}`)
  }

  const trackButtonClick = (buttonType: string, buttonName: string) => {
    trackEvent('click', 'button', `${buttonType}_${buttonName}`)
  }

  const trackFormInteraction = (formType: string, action: string) => {
    trackEvent(action, 'form', formType)
  }

  return {
    trackEvent,
    trackPageView,
    trackDownload,
    trackSocialClick,
    trackProjectView,
    trackContactClick,
    trackResumeDownload,
    trackModalOpen,
    trackModalClose,
    trackNavigation,
    trackExternalLink,
    trackButtonClick,
    trackFormInteraction,
  }
} 