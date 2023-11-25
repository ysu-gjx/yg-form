import { defineComponent } from 'vue'

import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'StringField',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        props.onChange(target.value)
      }
      return (
        <>
          <input value={props.value} type="text" onInput={handleChange} />
        </>
      )
    }
  },
})
