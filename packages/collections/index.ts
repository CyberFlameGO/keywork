/**
 * @file This file is part of the Keywork project.
 * @copyright Nirrius, LLC. All rights reserved.
 * @author Teffen Ellis, et al.
 * @license AGPL-3.0
 *
 * @remarks Keywork is free software for non-commercial purposes.
 * You can be released from the requirements of the license by purchasing a commercial license.
 * Buying such a license is mandatory as soon as you develop commercial activities
 * involving the Keywork software without disclosing the source code of your own applications.
 *
 * @see LICENSE.md in the project root for further licensing information.
 */

/**
 * ### `@keywork/collections` (Beta)
 *
 * ![npm (scoped)](https://img.shields.io/npm/v/@keywork/collections)
 * ![npm](https://img.shields.io/npm/dm/@keywork/collections)
 *
 * The missing piece that unlocks the full power of storing and querying data from your Worker.
 *
 * - A NoSQL _eventually-consistent_ ODM for Cloudflare's [Worker KV](https://developers.cloudflare.com/workers/runtime-apis/kv/).
 * - An API reminiscent of Firebase and MongoDB, perfect for migrating your existing backend to Cloudflare's network.
 * - Extends Worker KV's API without abstracting away important details.
 *
 * @packageDocumentation
 * @module
 */

export * from './lib/common.js'
export * from './lib/KeyworkCollection.js'
export * from './lib/KeyworkCollection/common.js'
export * from './lib/KeyworkDatabase.js'
export * from './lib/KeyworkDocumentMetadata.js'
export * from './lib/KeyworkDocumentReference.js'
export * from './lib/KeyworkDocumentSnapshot.js'
