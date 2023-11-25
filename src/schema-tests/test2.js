import Ajv from 'ajv'

const ajv = new Ajv()

const validate = ajv.compile({
  type: 'object',
  properties: {
    select: {
      type: 'number',
      minimum: 10,
    },
  },
})

const valid = validate({
  select: 5,
})

if (!valid) {
  console.log(validate.errors)
}

console.log(valid)
