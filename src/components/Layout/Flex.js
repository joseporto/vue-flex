const generateBreakpoints = (name, limit, condition) => {

  let conditionArray = [];

  if (Array.isArray('object')) {
    conditionArray = condition;
  } else if(typeof condition === 'string') {
    conditionArray = condition.replace(' ', '').split(',');
  }

  const result = {};
  for (let i = 0; i <= limit; i++) {
    result[`${name}-${i}`] = conditionArray && parseInt(conditionArray[0]) === i;
    result[`${name}-sft-${i}`] = conditionArray && parseInt(conditionArray[1]) === i;
  }

  result[`${name}-row`] = conditionArray.indexOf('row') !== -1;
  result[`${name}-col`] = conditionArray.indexOf('col') !== -1;
  result[`${name}-al-stch`] = conditionArray.indexOf('stretch') !== -1;
  result[`${name}-al-top`] = conditionArray.indexOf('top') !== -1;
  result[`${name}-al-bot`] = conditionArray.indexOf('bottom') !== -1;
  result[`${name}-al-mid`] = conditionArray.indexOf('middle') !== -1;
  result[`${name}-al-bse`] = conditionArray.indexOf('baseline') !== -1;
  result[`${name}-jf-lft`] = conditionArray.indexOf('left') !== -1;
  result[`${name}-jf-rgt`] = conditionArray.indexOf('right') !== -1;
  result[`${name}-jf-ctr`] = conditionArray.indexOf('center') !== -1;
  result[`${name}-jf-bet`] = conditionArray.indexOf('between') !== -1;
  result[`${name}-jf-aro`] = conditionArray.indexOf('around') !== -1;
  result[`${name}-jf-evl`] = conditionArray.indexOf('evenly') !== -1;
  result[`${name}-jf-ini`] = conditionArray.indexOf('initial') !== -1;
  result[`${name}-jf-inh`] = conditionArray.indexOf('inherit') !== -1;
  result[`${name}-fst`] = conditionArray.indexOf('first') !== -1;
  result[`${name}-lst`] = conditionArray.indexOf('last') !== -1;
  result[`${name}-gtr`] = conditionArray.indexOf('gutter') !== -1;
  result[`${name}-nwp`] = conditionArray.indexOf('nowrap') !== -1;
  result[`${name}-gro`] = conditionArray.indexOf('grow') !== -1;
  result[`${name}-rvs`] = conditionArray.indexOf('reverse') !== -1;
  result[`${name}-hdn`] = conditionArray.indexOf('hidden') !== -1;
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
      type: String | Array,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `sm`
     */
    sm: {
      type: String | Array,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `md`
     */
    md: {
      type: String | Array,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `lg`
     */
    lg: {
      type: String | Array,
      default: ''
    },
    /**
     * number of columns and optional shift at breakpoint `xl`
     */
    xl: {
      type: String | Array,
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
