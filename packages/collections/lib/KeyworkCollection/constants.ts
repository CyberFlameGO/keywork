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

import { resolveDocPath } from '@keywork/utils'

/** Key to a collection's documents. */
export const COLLECTION_KEY = '__COLLECTION'

/** Key to a collection's namespace. */
export const DOCUMENTS_KEY = resolveDocPath('__DOCUMENTS')

/** Key to a collection's known index prefixes. */
export const COLLECTION_INDEX_PREFIXES = resolveDocPath(COLLECTION_KEY, '__INDEX_BY')

/** Key to a collection's default indexing by ID. */
export const INDEXES_ID_PREFIX = resolveDocPath(COLLECTION_INDEX_PREFIXES, '__ID')

/** Key to a collection's default indexing by ID. */
export const INDEXES_DOCUMENT_PATH_PREFIX = resolveDocPath(COLLECTION_INDEX_PREFIXES, '__DOCUMENT_PATH')
