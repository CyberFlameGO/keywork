import type { Buffer } from 'buffer'
import { NormalizedBufferEncoding } from '../encoding.js'

export interface IStringDecoder {
  encoding: NonNullable<NormalizedBufferEncoding>

  /**
   * Returns a decoded string, ensuring that any incomplete multibyte characters at
   * the end of the `Buffer`, or `TypedArray`, or `DataView` are omitted from the
   * returned string and stored in an internal buffer for the next call to`stringDecoder.write()` or `stringDecoder.end()`.
   * @since v0.1.99
   * @param buffer A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode.
   */
  write(buffer: Buffer): string
  /**
   * Returns any remaining input stored in the internal buffer as a string. Bytes
   * representing incomplete UTF-8 and UTF-16 characters will be replaced with
   * substitution characters appropriate for the character encoding.
   *
   * If the `buffer` argument is provided, one final call to `stringDecoder.write()`is performed before returning the remaining input.
   * After `end()` is called, the `stringDecoder` object can be reused for new input.
   * @since v0.9.3
   * @param buffer A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode.
   */
  end(buffer?: Buffer): string
}