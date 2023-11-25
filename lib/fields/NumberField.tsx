import { defineComponent } from 'vue'
import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        const num = Number(target.value)

        if (Number.isNaN(num)) {
          props.onChange(undefined)
        } else {
          props.onChange(num)
        }
      }

      return (
        <>
          <input type="number" value={props.value} onInput={handleChange} />
        </>
      )
    }
  },
})
