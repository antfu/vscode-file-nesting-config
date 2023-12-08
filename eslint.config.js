// @ts-check
import antfu from '@antfu/eslint-config'
import { createSimplePlugin } from 'eslint-factory'

export default antfu(
  {},
  createSimplePlugin({
    include: ['update.mjs'],
    name: 'wildcards-check',
    create(context) {
      return {
        Literal(node) {
          if (typeof node.value !== 'string')
            return
          const parts = node.value.split(',')
          for (const part of parts) {
            if (part.split('*').length > 2) {
              context.report({
                node,
                message: `Only one wildcard is allowed in patterns, but got "${part}"`,
              })
            }
          }
        },
      }
    },
  }),
)
