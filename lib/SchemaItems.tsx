import { defineComponent } from 'vue'
import { SchemaTypes, FieldPropsDefine } from './types'

import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField'

export default defineComponent({
  name: 'SchemaItems',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props

      // TODO: 如果 type 没有指定，我们需要猜测这个 type

      const type = schema.type

      let Component: any
      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        default:
          console.warn(`${type} is not supported`)
          break
      }
      return <Component {...props} />
    }
  },
})
