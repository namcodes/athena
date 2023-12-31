import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'pages/about/index.html'),
        teamProfile: resolve(root, 'pages/team-member-profile/index.html'),
        contact: resolve(root, 'pages/contact/index.html'),
        testimonials: resolve(root, 'pages/testimonials/index.html'),
        mainbooking:resolve(root, 'pages/main-booking/index.html'),
        coconutgrove:resolve(root, 'pages/coconut-grove/index.html'),
        miami:resolve(root, 'pages/miami/index.html'),
        privateclass:resolve(root, 'pages/private-class/index.html'),
        semiprivateclass:resolve(root, 'pages/semi-private-class/index.html'),
        groupclass:resolve(root, 'pages/group-class/index.html'),
        videolibrary:resolve(root, 'pages/video-library/index.html'),
        blogroll:resolve(root, 'pages/blogroll/index.html'),
      },
    },
  },
})