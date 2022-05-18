import * as extensions from './extensions/index.js'

export const extensionToMimeType = new Map<string, string>(
  Object.values(extensions).map(({ extension, mimeType }) => {
    return [extension, mimeType]
  })
)