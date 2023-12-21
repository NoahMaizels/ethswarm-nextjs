import * as React from "react";
function RedistributionIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 23,
    height: 26,
    viewBox: "0 0 23 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M1.35938 7.20806V18.7921L11.3796 24.5842L21.3998 18.7921V7.20806L11.3796 1.41602L1.35938 7.20806ZM11.3796 23.5416L2.2861 18.2709V15.1432L11.3796 20.4139L20.4731 15.1432V18.2709L11.3796 23.5416ZM20.4731 14.0427L11.3796 19.3134L2.2861 14.0427V7.72934L11.3796 2.45858L20.4731 7.72934V14.0427Z",
    fill: "#F6F7F9",
    stroke: "currentColor",
    strokeWidth: 0.6,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.6524 15.4002C14.5923 15.4002 14.4722 15.4002 14.4121 15.3437L11.4688 13.8744L8.52546 15.3437C8.34525 15.4002 8.16505 15.4002 7.98484 15.2872C7.80464 15.1742 7.74457 15.0046 7.80464 14.8351L8.34525 11.7271L5.94253 9.52319C5.82239 9.41017 5.76233 9.24064 5.82239 9.07111C5.88246 8.90158 6.06267 8.78856 6.24287 8.73205L9.54662 8.27997L11.0483 5.45449C11.2285 5.11543 11.7691 5.11543 11.9493 5.45449L13.451 8.27997L16.7548 8.73205C16.935 8.73205 17.1152 8.90158 17.1753 9.07111C17.2353 9.24064 17.1753 9.41017 17.0551 9.52319L14.6524 11.7271L15.193 14.8351C15.2531 15.0046 15.1329 15.1742 15.0128 15.2872C14.8927 15.3437 14.7725 15.4002 14.6524 15.4002ZM7.38416 9.52319L9.24627 11.2185C9.36641 11.3315 9.42648 11.501 9.36641 11.614L8.94593 14.044L11.2285 12.9138C11.3487 12.8573 11.5289 12.8573 11.7091 12.9138L13.9917 14.044L13.5712 11.6706C13.5712 11.501 13.5712 11.388 13.6913 11.275L15.5534 9.5797L12.9705 9.24064C12.7903 9.24064 12.6702 9.12762 12.6101 8.95809L11.4688 6.75421L10.3275 8.95809C10.2674 9.07111 10.0872 9.18413 9.96709 9.24064L7.38416 9.52319Z",
    fill: "#F6F7F9",
    stroke: "currentColor",
    strokeWidth: 0.3,
    strokeLinejoin: "round"
  }));
}
const ForwardRef = React.forwardRef(RedistributionIcon);
export default ForwardRef;