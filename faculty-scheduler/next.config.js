/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid"
]);

module.exports = withTM({
  env: {
      NEXT_ATLAS_URI: 'mongodb+srv://skylake0106:skylake_cis350@cis350.lnfxwii.mongodb.net/FacultyScheduler?retryWrites=true&w=majority',
  },
  nextConfig,
});