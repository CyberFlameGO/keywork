export interface OtherElementAttributes {
  [key: string]: string | number | boolean | null | undefined
}

export type HtmlProps = JSX.IntrinsicElements['html'] & OtherElementAttributes

export type BodyProps = JSX.IntrinsicElements['body'] & OtherElementAttributes

export type LinkProps = JSX.IntrinsicElements['link']

export type MetaProps = JSX.IntrinsicElements['meta']

export interface HelmetTags {
  baseTag: any[]
  linkTags: HTMLLinkElement[]
  metaTags: HTMLMetaElement[]
  noscriptTags: any[]
  scriptTags: HTMLScriptElement[]
  styleTags: HTMLStyleElement[]
}

export interface HelmetProps {
  async?: boolean | undefined
  base?: any
  bodyAttributes?: BodyProps | undefined
  children?: React.ReactNode
  defaultTitle?: string | undefined
  defer?: boolean | undefined
  encodeSpecialCharacters?: boolean | undefined
  htmlAttributes?: HtmlProps | undefined
  onChangeClientState?:
    | ((newState: HelmetPropsToState, addedTags: HelmetTags, removedTags: HelmetTags) => void)
    | undefined
  link?: LinkProps[] | undefined
  meta?: MetaProps[] | undefined
  noscript?: any[] | undefined
  script?: any[] | undefined
  style?: any[] | undefined
  title?: string | undefined
  titleAttributes?: object | undefined
  titleTemplate?: string | undefined
}

/**
 * Used by Helmet.peek()
 */
export type HelmetPropsToState = HelmetTags &
  Pick<
    HelmetProps,
    | 'bodyAttributes'
    | 'defer'
    | 'htmlAttributes'
    | 'onChangeClientState'
    | 'title'
    | 'titleAttributes'
    | 'encodeSpecialCharacters'
  > & {
    encode?: Required<HelmetProps['encodeSpecialCharacters']>
  }

export interface HelmetData {
  base: HelmetDatum
  bodyAttributes: HelmetHTMLBodyDatum
  htmlAttributes: HelmetHTMLElementDatum
  link: HelmetDatum
  meta: HelmetDatum
  noscript: HelmetDatum
  script: HelmetDatum
  style: HelmetDatum
  title: HelmetDatum
  titleAttributes: HelmetDatum
}

export interface HelmetDatum {
  toString(): string
  toComponent(): React.ReactElement[]
}

export interface HelmetHTMLBodyDatum {
  toString(): string
  toComponent(): React.HTMLAttributes<HTMLBodyElement>
}

export interface HelmetHTMLElementDatum {
  toString(): string
  toComponent(): React.HTMLAttributes<HTMLHtmlElement>
}