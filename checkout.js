function selectSaleItems(items) {
  return items.filter(isDiscounted)
}

function isDiscounted(items) {
  return items.discount > 0
}

module.exports = selectSaleItems
