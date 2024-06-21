import VueMarkdown from 'vue-markdown-render';
import MarkdownContent from '../components/utils/MarkdownContent.vue'
const DEFAULT_SETTINGS = {
  contentDir: "content",
};
let settings = { ...DEFAULT_SETTINGS };
let content = null;

function loadContentFromContentFolder() {
  const files = require.context("@/content", true, /[A-Za-z0-9-_,\s]+\.md$/i);
  const pages = {};
  files.keys().forEach((key) => {
    const path = key.replace(/^\.\//, "").replace(/\.md$/,'').toLowerCase(); //

    pages[path] = { path, content: files(key).default };
  });

  return pages;
}

function constructPath(route) {
  console.log(route);
  // const {lang} = opts;
  let path = route;
  if (path.endsWith("/")) path = `${path}index`;
  path = path.replace(/^[./]{1,2}/, "");
  // if (lang) path = `${path}_${lang}`

  return `${path}`; // if ends with / append index, then add file ending
}

export default {
  install(app, options) {
    const { $router, $i18n } = app.config.globalProperties;
    if (!app) throw new Error("Error accessing App!", { app });
    if (!$router) throw new Error("Error accessing Router!", { $router });
    if (!$i18n) throw new Error("Error accessing I18n!", { $i18n });
    settings = {
      ...settings,
      lang: $i18n.locale,
      ...options,
    };

    function $content(path) {
      const constructedPath = constructPath(path);
      const {locale, fallbackLocale} = app.config.globalProperties.$i18n
      console.debug(`Fetching ${constructedPath} for route ${path}`);
      return content[`${constructedPath}_${locale}`] || content[`${constructedPath}`] || content[`${constructedPath}_${fallbackLocale}`] || content;
    }

    content = loadContentFromContentFolder();
    console.debug("Starting Plugin...", {
      content,
      settings,
      app,
      $router,
      $i18n,
    });
    app.config.globalProperties.$content = (path, opts) =>
      path
        ? $content(path, opts)
        : $content($router.currentRoute.value.fullPath, opts);
    app.component('MarkdownContent',MarkdownContent)
    app.component('VueMarkdown',VueMarkdown)
    // configure the app
  },
};
