
// This logic is used to provide internationalized access to the articles of the page on a route by route basis
// To access the objects in the language files, rather than a string some additional logic is needed.
// The key is auto derived from the route (including starting '/') and the component name (snake-cased) if not provided
export default {
  computed: {
    i18nPath() {
      const path = this.$props.path || this.$options.name.replace(/Page|View/,'').replace(/(.+)([A-Z])/g,"$1-$2").toLowerCase()
      const route = this.$route.fullPath;
      if (path.startsWith('/')) return path;
      else {
        if (route.endsWith('/'))
          return `${route}${path}`
        return `${route}/${path}`
      }

      // return `${ // the  current route /route/to
      //  this.$props.path?.startsWith('/')?'':this.$route.fullPath
      // }${ // save check for '/'
      //   this.$route.fullPath.endsWith('/')?'':'/'
      // }${ // the name of the component without the 'Page' or 'View' suffix in kebab case /route/to/component-name
      //   this.$props.path || this.$options.name.replace(/Page|View/,'').replace(/(.+[A-Z])/,"-$1").toLowerCase()
      // }`
    },
  }
}