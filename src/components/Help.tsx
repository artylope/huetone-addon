import { FC } from 'react'
import styled from 'styled-components'

export const Help: FC = props => {
  return (
    <Wrapper>
      <h3>Hotkeys</h3>
      <List role="list">
        <li>
          <Key>↑</Key> <Key>↓</Key> <Key>→</Key> <Key>←</Key> — select another
          color
        </li>
        <li>
          <Key>⌘</Key> + <Key>↑</Key> <Key>↓</Key> <Key>→</Key> <Key>←</Key> —
          move rows and columns
        </li>
        <li>
          <Key>⌘</Key> + <Key>⇧</Key> + <Key>↑</Key> <Key>↓</Key> <Key>→</Key>{' '}
          <Key>←</Key> — duplicate rows and columns
        </li>
        <li>
          <Key>L</Key> + <Key>↑</Key> <Key>↓</Key> — change lightness of
          selected color
        </li>
        <li>
          <Key>C</Key> + <Key>↑</Key> <Key>↓</Key> — change chroma of selected
          color
        </li>
        <li>
          <Key>H</Key> + <Key>↑</Key> <Key>↓</Key> — change hue of selected
          color
        </li>
        <li>
          <Key>⌘</Key> + <Key>C</Key> — copy selected color. You can even paste
          it somewhere as HEX
        </li>
        <li>
          <Key>⌘</Key> + <Key>V</Key> — paste color. Just copy color in any
          format and paste it here.
        </li>
        <li>
          Hold <Key>B</Key> — preview palette in greys.
        </li>
      </List>

      <h3>Credits</h3>
      <p>
        Made by <Link href="https://ardov.me">Alexey Ardov</Link>. Contact me if
        you have any suggestions.
      </p>
      <p>
        Huetone is heavily inspired by{' '}
        <Link href="https://stripe.com/blog/accessible-color-systems">
          that Stripe article
        </Link>
        . And it uses the great{' '}
        <Link href="https://github.com/gka/chroma.js">chroma.js</Link> library
        under the hood.
      </p>
      <p>
        Advanced Perceptual Contrast Algorithm (APCA) by Andrew Somers is a
        WCAG 3 working draft and may change later. To learn more visit{' '}
        <Link href="https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup">
          this page
        </Link>{' '}
        or check{' '}
        <Link href="https://github.com/w3c/wcag/issues/695">
          this thread on GitHub
        </Link>
        .
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* display: flex; */
  font-size: 16px;

  > p {
    max-width: 60ch;
    margin-top: 12px;
  }
`
const List = styled.ul`
  padding-left: 0;
  & > li {
    margin-top: 12px;
  }
  & > li:first-child {
    margin-top: 0;
  }
`
const Key = styled.span`
  display: inline-block;
  padding: 0px 0px;
  text-align: center;
  min-width: 28px;
  border-radius: 4px;
  background-color: var(--c-btn-bg);
  border: 1px solid var(--c-divider);
`

const Link = styled.a`
  color: inherit;
  text-decoration-color: var(--c-text-secondary);
  :hover {
    color: var(--c-text-primary);
    text-decoration: none;
  }
`
