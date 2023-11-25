// const Ajv = require('ajv')
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import localize from 'ajv-i18n'
import customErrors from 'ajv-errors'
const ajv = new Ajv({ allErrors: true })
addFormats(ajv)
customErrors(ajv)

ajv.addFormat('identifier', (data) => {
  console.log('addFormat data ------', data)
  return data === 'hahaha'
})
ajv.addKeyword({
  keyword: 'test',
  macro: (schema, parentSchema) => {
    return {
      minLength: 10,
    }
  },
  // validate: (schema, data) => {
  //   console.log('schema, data', schema, data)
  //   return true
  // },
})
const schema = {
  type: 'object',
  allOf: [
    {
      properties: {
        foo: { type: 'integer' },
        bar: { type: 'string', format: 'email' },
        name: {
          type: 'string',
          format: 'identifier',
        },
        age: {
          // type: 'number',
          test: true,
        },
      },
      additionalProperties: false,
    },
  ],
  required: ['foo'],
  errorMessage: {
    type: 'data should be an object',
    properties: {
      foo: 'data.foo should be integer >= 2',
      bar: '邮件格式不正确',
    },
  },
}

const validate = ajv.compile(schema)
const data = {
  foo: 1,
  name: 'hahaha',
  bar: '222qq.com',
  age: '11',
}

const valid = validate(data)
if (!valid) {
  // localize.zh(validate.errors)
  console.log(validate.errors)
}
