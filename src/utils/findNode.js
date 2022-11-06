export const getTopParentNode = (node, untilClassName) => {
  if (node) {
    if (node.classList && node.classList.contains(untilClassName)) {
      return node;
    } else if (node.parentNode) {
      return getTopParentNode(node.parentNode, untilClassName);
    }
  } else {
    return;
  }
};
