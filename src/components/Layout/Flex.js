import { isArray } from 'util';

const generateBreakpoints = (name, limit, condition) => {

  let conditionArray = [];

  if (isArray(condition)) {
    conditionArray = condition;
  } else if(typeof condition === 'string') {
    conditionArray = condition.replace(' ', '').split(',');
  }

  // eslint-disable-next-line no-console
  console.info(conditionArray, typeof condition);

  const result = {};
  for (let i = 1; i <= limit; i++) {
    result[`${name}-${i}`] = conditionArray && parseInt(conditionArray[0]) === i;
    result[`${name}-shift-${i}`] = conditionArray && parseInt(conditionArray[1]) === i;
  }

  result[`${name}-row`] = condition.indexOf('row') !== -1;
  result[`${name}-col`] = condition.indexOf('col') !== -1;
  result[`${name}-align-stretch`] = condition.indexOf('stretch') !== -1;
  result[`${name}-align-start`] = condition.indexOf('top') !== -1;
  result[`${name}-align-end`] = condition.indexOf('bottom') !== -1;
  result[`${name}-align-center`] = condition.indexOf('middle') !== -1;
  result[`${name}-align-baseline`] = condition.indexOf('baseline') !== -1;
  result[`${name}-justify-start`] = condition.indexOf('left') !== -1;
  result[`${name}-justify-end`] = condition.indexOf('right') !== -1;
  result[`${name}-justify-center`] = condition.indexOf('center') !== -1;
  result[`${name}-justify-between`] = condition.indexOf('between') !== -1;
  result[`${name}-justify-around`] = condition.indexOf('around') !== -1;
  result[`${name}-justify-evenly`] = condition.indexOf('evenly') !== -1;
  result[`${name}-justify-initial`] = condition.indexOf('initial') !== -1;
  result[`${name}-justify-inherit`] = condition.indexOf('inherit') !== -1;
  result[`${name}-first`] = condition.indexOf('first') !== -1;
  result[`${name}-last`] = condition.indexOf('last') !== -1;
  result[`${name}-gutter`] = condition.indexOf('gutter') !== -1;
  result[`${name}-nowrap`] = condition.indexOf('nowrap') !== -1;
  result[`${name}-grow`] = condition.indexOf('grow') !== -1;
  result[`${name}-reverse`] = condition.indexOf('reverse') !== -1;
  result[`${name}-hidden`] = condition.indexOf('hidden') !== -1;
  return result
}

export default {
  name: 'Flex',
  inheritAttrs: true,
  props: {
    /**
     * The HTML tag to be used instead of the default `div`
     */
    tag: {
      type: String,
      default: 'div'
    },
    /**
     * number of columns and optional shift at breakpoint `xs`
     */
    xs: {
      type: Array | String,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `sm`
     */
    sm: {
      type: Array | String,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `md`
     */
    md: {
      type: Array | String,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `lg`
     */
    lg: {
      type: Array | String,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `xl`
     */
    xl: {
      type: Array | String,
      default: ''
    },
    /**
     * Set to apply some debug styling
     */
    debug: {
      type: Boolean,
      default: false
    },
    /**
     * Apply $layout-gutter
     */
    gutter: {
      type: Boolean,
      default: null
    },
    /**
     * Disregard $layout-max-width
     */
    fluid: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    classes() {
      // const isContainer = !this.row && !this.col
      const {xs, sm, md, lg, xl} = this;

      const isContainer = xs === '' && sm === '' && md === '' && lg === '' && xl === '';
      const isRow = this.row
      const isColumn = this.col

      let classes = {
        flex: true
      }

      if (isContainer) {
        classes = Object.assign(classes, {
          container: true,
          fluid: this.fluid,
          gutter: this.gutter,
        })
      } else {
        classes = Object.assign(classes, {
          ...generateBreakpoints('xs', 12, this.xs),
          ...generateBreakpoints('sm', 12, this.sm),
          ...generateBreakpoints('md', 12, this.md),
          ...generateBreakpoints('lg', 12, this.lg),
          ...generateBreakpoints('xl', 12, this.xl),
        })
      }

      Object.assign(classes, {
        debug: this.debug,
      })

      if (isRow) {
        classes = Object.assign(classes, {
          row: true,
        })
      }

      if (isColumn) {
        classes = Object.assign(classes, {
          col: true,
        });
      }
      return classes
    },
  },
  render(createElement) {
    const tag = this.transition ? 'transition-group' : this.tag

    const attrs = {
      attrs: this.$attrs,
      on: this.$listeners,
      class: this.classes
    }

    if (this.transition) {
      attrs.name = this.transition
      attrs.tag = this.tag
    }

    return createElement(
      tag, attrs, this.$slots.default)
  }
}
