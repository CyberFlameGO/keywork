import { ETaggable } from '@keywork/shared'
import isPlainObject from 'lodash.isplainobject'
import { ulid } from 'ulidx'
import type { DeserializationTransformers, PutOrPatchOptions } from './common.mjs'

export interface CreateKeyworkDocumentMetadataOptions {
  /** A POSIX-style, absolute path to a document. */
  absoluteDocPath: string

  /** A POSIX-style, relative path to a document from a collection. */
  relativeDocPath: string

  /** Determines the ULID seed. */
  createdAt: Date

  /** Defaults to text `String` */
  deserializeAs?: DeserializationTransformers

  /**
   * An optional ETag of the value associated with this document.
   *
   * @see `generateETag` via `@keywork/shared`
   */
  etag?: string | null
}

/**
 * Metadata associated with a specific `KeyworkDocument`
 * @remark JSON serializable.
 */
export interface KeyworkDocumentMetadata extends PutOrPatchOptions {
  /** The document's ULID identifier within its collection. */
  id: string
  /** Full path to document. */
  absoluteDocPath: string
  /** Relative path to document from parent collection. */
  relativeDocPath: string
  createdAt: string
  updatedAt: string
  /** Defaults to text `String` */
  deserializeAs: DeserializationTransformers

  /**
   * An optional ETag of the value associated with this document.
   *
   * @see `generateETag` via `@keywork/shared`
   */
  etag: string | null
}

/**
 * Generates a new document metadata.
 */
export function generateDocumentMetadata({
  absoluteDocPath,
  relativeDocPath,
  createdAt,
  deserializeAs = 'text',
  etag = null,
}: CreateKeyworkDocumentMetadataOptions): KeyworkDocumentMetadata {
  const metadata: KeyworkDocumentMetadata = {
    absoluteDocPath,
    relativeDocPath,
    id: ulid(Number(createdAt)),
    createdAt: createdAt.toJSON(),
    updatedAt: createdAt.toJSON(),
    deserializeAs,
    etag,
  }

  return metadata
}

export function parseValueTypeInfo(value: unknown): DeserializationTransformers {
  const valueType = typeof value

  if (valueType === 'object') {
    if (!valueType || isPlainObject(value) || (Array.isArray(value) && value.every((entry) => isPlainObject(entry)))) {
      return 'json'
    }

    if (typeof ReadableStream !== 'undefined' && value instanceof ReadableStream) return 'stream'
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) return 'arrayBuffer'
  }

  return 'text'
}

/**
 * Checks whether a given value and deserialization transformer is ETaggable
 *
 * @param deserializeAs An optional pre-computed `DeserializationTransformers`
 * */
export function isETaggable(
  value: unknown,
  deserializeAs: DeserializationTransformers = parseValueTypeInfo(value)
): value is ETaggable {
  switch (deserializeAs) {
    case 'arrayBuffer':
    case 'text':
    case 'json':
      return true
    case 'stream':
      return false
  }

  return false
}