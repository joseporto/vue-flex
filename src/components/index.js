import Container from './Layout/Container'
import Row from './Layout/Row'
import Column from './Layout/Column'
import Guides from './Helpers/Guides'

const VueFlex = {
  install (Vue) {
    Vue.component(Container.name, Container)
    Vue.component(Row.name, Row)
    Vue.component(Column.name, Column)
    Vue.component(Guides.name, Guides)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFlex);
}

export default VueFlex
export {Container, Row, Column, Guides}

