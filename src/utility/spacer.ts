type SpaceValue = `${number}px` | `${number}%` | 0 | 'auto';

export interface SpacerProps {
  /** Margin - shorthand */
  m?:
    | SpaceValue
    | `${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue} ${SpaceValue}`;
  /** Margin top - individual */
  mt?: SpaceValue;
  /** Margin right - individual */
  mr?: SpaceValue;
  /** Margin bottom - individual */
  mb?: SpaceValue;
  /** Margin left - individual */
  ml?: SpaceValue;
  /** Padding - shorthand */
  p?:
    | SpaceValue
    | `${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue} ${SpaceValue}`;
  /** Padding top - individual */
  pt?: SpaceValue;
  /** Padding right - individual */
  pr?: SpaceValue;
  /** Padding bottom - individual */
  pb?: SpaceValue;
  /** Padding left - individual */
  pl?: SpaceValue;
}

export const spacer = (props: SpacerProps) => ({
  margin: props.m,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
  padding: props.p,
  paddingTop: props.pt,
  paddingRight: props.pr,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
});
