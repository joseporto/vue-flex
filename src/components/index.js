import Flex from './Layout/Flex'
import Guides from './Helpers/Guides'

const VueFlex = {
  install(Vue) {
    Vue.component(Flex.name, Flex)
    Vue.component(Guides.name, Guides)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFlex);
}

export default VueFlex
export { Flex, Guides }

