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

import { DefaultWorkerBindings } from '../bindings/index.js'
import type { KeyworkSession } from '../sessions/index.js'
import { RequestWithCFProperties } from './common.js'

/**
 * Data associated with a specific incoming request from within a Worker.
 *
 * @remark
 * Much like defining functions in Cloudflare Pages,
 * this interface contains all the data related to a specific incoming HTTP request.
 * Generally, this interface is always generated by `KeyworkRequestHandler`
 * and passed to your subclass' `onRequest` method.
 */
export interface IncomingRequestData<BoundAliases extends {} | null = null> {
  /** The incoming request */
  readonly request: RequestWithCFProperties
  /** The incoming request URL object */
  readonly url: URL
  /** Any bound environment properties defined in your `wrangler.toml` file */
  readonly env: BoundAliases extends null ? DefaultWorkerBindings : BoundAliases & DefaultWorkerBindings
  /** An execution context for running async tasks after the response is sent. */
  readonly context: ExecutionContext
  /** @beta This is under active development. */
  readonly session: KeyworkSession
}

/**
 * An method interface which handles incoming requests from the client,
 * to return a `Response` object.
 *
 * @remark
 * Generally, this interface is implemented by a subclass of `KeyworkRequestHandler`
 * such as `onRequest`, `onGetRequest`, `onPostRequest`, etc.
 */
export type IncomingRequestDataHandler<BoundAliases extends {} | null> = (
  /**
   * Data associated with a specific incoming request from within a Worker.
   *
   * @see {@link IncomingRequestData}
   */
  data: IncomingRequestData<BoundAliases>
) => Response | Promise<Response>
