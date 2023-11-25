import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes, FieldPropsDefine } from './types'

import SchemaItems from './SchemaItems.tsx'

export default defineComponent({
  name: 'SchemaForm',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const handleChange = (v: any) => {
        props.onChange(v)
      }
      const { schema, value } = props

      return (
        <SchemaItems schema={schema} value={value} onChange={handleChange} />
      )
    }
  },
})
