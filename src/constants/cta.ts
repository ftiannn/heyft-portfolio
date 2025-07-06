export const ctaButtonConfig = {
  projects: { href: '/resume', text: 'View My Background' },
  gallery: { href: '/projects', text: 'View My Technical Work' },
  default: { href: '/projects', text: 'Browse My Work' }
}

export const ctaStyleConfig = {
  light: {
    sectionBg: "bg-transparent",
    cardBg: "bg-gradient-to-r from-primary-pink to-accent-blue text-white",
    btnBg: "bg-white text-primary-pink border-white hover:bg-gray-100"
  },
  dark: {
    sectionBg: "bg-[#181926] dark:bg-[#181926]",
    cardBg: "bg-gradient-to-r from-[#23263a] to-[#181926] text-white",
    btnBg: "bg-white/10 text-white border-white/20 hover:bg-white/20"
  }
} 