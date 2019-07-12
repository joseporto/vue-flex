import { isArray } from "util";

const generateBreakpoints = (name, limit, condition) => {
  const conditionArray = isArray(condition) ? condition : [condition]
  // eslint-disable-next-line no-console
  console.info(conditionArray);
  const result = {};
  for (let i = 1; i <= limit; i++) {
    result[`flex__col--${name}-${i}`] = conditionArray && conditionArray[0] === i
    result[`flex__col--${name}-shift-${i}`] = conditionArray && conditionArray[1] === i
  }
  return result
}

export default {
  name: 'Flex',
  inheritAttrs: true,
  props: {
    /**
     * Element grows horizontaly
     */
    row: {
      type: Boolean,
      default: false
    },
    /**
     * Element grows vertically and allows breakpoints
     */
    col: {
      type: Boolean,
      default: false
    },
    /**
     * The HTML tag to be used instead of the default `div`
     */
    tag: {
      type: String,
      default: 'div'
    },
    /**
     * Reverse direction of the flex element (only row and column)
     */
    reverse: {
      type: Boolean,
      default: false
    },
    /**
     * Force column to be shown before other columns
     */
    first: {
      type: Boolean,
      default: false
    },
    /**
     * Force column to be shown after other columns
     */
    last: {
      type: Boolean,
      default: false
    },
    /**
     * Vertical column alignment
     */
    align: {
      type: String,
      validator(value) {
        return [
          'stretch',
          'start',
          'end',
          'center',
          'baseline'
        ].indexOf(value) !== -1
      }
    },
    /**
     * Shortcut for `align="start"`
     */
    top: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `align="center"`
     */
    middle: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `align="end"`
     */
    bottom: {
      type: Boolean,
      default: false
    },
    /**
     * Horizontal column alignment
     */
    justify: {
      type: String,
      validator(value) {
        return [
          'start',
          'end',
          'center',
          'between',
          'around',
          'evenly',
          'initial',
          'inherit'
        ].indexOf(value) !== -1
      }
    },
    /**
     * Shortcut for `justify="start"`
     */
    left: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="center"`
     */
    center: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="end"`
     */
    right: {
      type: Boolean,
      default: false
    },
    /**
      * Shortcut for `justify="between"`
      */
    between: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="around"`
     */
    around: {
      type: Boolean,
      default: false
    },
    /**
     * Simple toggle of flex-grow property
     */
    grow: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent row from wrapping
     */
    nowrap: {
      type: Boolean,
      default: false
    },
    /**
     * Shortcut for `justify="evenly"`
     */
    evenly: {
      type: Boolean,
      default: false
    },
    /**
     * number of columns and optional shift at breakpoint `xs`
     */
    xs: {
      type: Array | Number,
      default: null
    },
    /**
     * number of columns and optional shift at breakpoint `sm`
     */
    sm: {
      type: Array | Number,
      default: null
    },
    /**
     * number of columns and optional shift at breakpoint `md`
     */
    md: {
      type: Array | Number,
      default: null
    },
    /**
     * number of columns and optional shift at breakpoint `lg`
     */
    lg: {
      type: Array | Number,
      default: null
    },
    /**
     * number of columns and optional shift at breakpoint `xl`
     */
    xl: {
      type: Array | Number,
      default: null
    },
    /**
     * Set to apply some debug styling
     */
    debug: {
      type: Boolean,
      default: false
    },
    /**
     * Remove $layout-gutter
     */
    nogutter: {
      type: Boolean,
      default: false
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
      const isContainer = !this.row && !this.col
      const isRow = this.row
      const isColumn = this.col

      let classes = {
        'flex': true
      }

      if (isContainer) {
        classes = Object.assign(classes, {
          'flex__container': true,
          'flex__container--fluid': this.fluid,
          'flex__container--nogutter': this.nogutter,
          'flex__container--debug': this.debug
        })
      }

      if (isRow) {
        classes = Object.assign(classes, {
          'flex__row': true,
          'flex__row--reset': this.resetStyle,
          'flex__row--reverse': this.reverse,
          'flex__row--align-stretch': this.align && this.align === 'strech',
          'flex__row--align-start': (this.align && this.align === 'start') || this.top,
          'flex__row--align-end': (this.align && this.align === 'end') || this.bottom,
          'flex__row--align-center': (this.align && this.align === 'center') || this.middle,
          'flex__row--align-baseline': this.align && this.align === 'baseline',
          'flex__row--justify-start': (this.justify && this.justify === 'start') || this.left,
          'flex__row--justify-end': (this.justify && this.justify === 'end') || this.right,
          'flex__row--justify-center': (this.justify && this.justify === 'center') || this.center,
          'flex__row--justify-between': (this.justify && this.justify === 'between') || this.between,
          'flex__row--justify-around': (this.justify && this.justify === 'around') || this.around,
          'flex__row--justify-evenly': (this.justify && this.justify === 'evenly') || this.evenly,
          'flex__row--justify-initial': this.justify && this.justify === 'initial',
          'flex__row--justify-inherit': this.justify && this.justify === 'inherit',
          'flex__row--grow': this.grow,
          'flex__row--nowrap': this.nowrap,
          'flex__row--nogutter': this.nogutter,
          'flex__row--debug': this.debug
        })
      }

      if (isColumn) {
        classes = Object.assign(classes, {
          'flex__col': true,
          'flex__col--reverse': this.reverse,
          'flex__col--align-stretch': this.align && this.align === 'strech',
          'flex__col--align-start': this.align && this.align === 'start',
          'flex__col--align-end': this.align && this.align === 'end',
          'flex__col--align-center': this.align && this.align === 'center',
          'flex__col--align-baseline': this.align && this.align === 'baseline',
          'flex__col--justify-start': (this.justify && this.justify === 'start') || this.left,
          'flex__col--justify-end': (this.justify && this.justify === 'end') || this.right,
          'flex__col--justify-center': (this.justify && this.justify === 'center') || this.center,
          'flex__col--justify-between': (this.justify && this.justify === 'between') || this.between,
          'flex__col--justify-around': (this.justify && this.justify === 'around') || this.around,
          'flex__col--justify-evenly': (this.justify && this.justify === 'evenly') || this.evenly,
          'flex__col--justify-initial': this.justify && this.justify === 'initial',
          'flex__col--justify-inherit': this.justify && this.justify === 'inherit',
          ...generateBreakpoints('xs', 12, this.xs),
          ...generateBreakpoints('sm', 12, this.sm),
          ...generateBreakpoints('md', 12, this.md),
          ...generateBreakpoints('lg', 12, this.lg),
          ...generateBreakpoints('xl', 12, this.xl),
          'flex__col--first': this.first,
          'flex__col--last': this.last,
          'flex__col--nogutter': this.nogutter,
          'flex__col--debug': this.debug
        })
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
