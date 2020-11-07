export const utilProps = (props: any) => {
  return `
  ${props.italic ? "font-style:italic" : ""};
  ${props.alignItems ? `display:flex;align-items:${props.alignItems}` : ""};
  ${props.alignSelf ? `align-self:${props.alignSelf}` : ""};
  ${props.justifyContent ? `justify-content:${props.justifyContent}` : ""};
  ${props.wrap ? "flex-wrap:wrap" : ""};
  ${props.flex ? `flex:${props.flex}` : ""};
  ${props.marginBottom ? `margin-bottom:${props.marginBottom}` : ""};
  ${props.marginTop ? `margin-top:${props.marginTop}` : ""};
  ${props.marginRight ? `margin-right:${props.marginRight}` : ""};
  ${props.marginLeft ? `margin-left:${props.marginLeft}` : ""};
  ${props.contentWidth ? ` width: ${props.contentWidth} ` : ""};
  ${props.paddingRight ? ` padding-right: ${props.paddingRight} ` : ""};
  ${props.padding ? ` padding: ${props.padding} ` : ""};
  ${props.minHeight ? ` min-height: ${props.minHeight} ` : ""};
  ${props.maxHeight ? ` max-height: ${props.maxHeight} ` : ""};
  ${props.minWidth ? ` min-width: ${props.minWidth} ` : ""};
  ${props.fontSize ? ` font-size: ${props.fontSize} ` : ""};
  `
}