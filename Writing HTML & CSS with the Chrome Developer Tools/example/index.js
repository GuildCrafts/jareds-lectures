console.log('hello from index.js')

// console.log('LOOKING FOR TABS', $('.tabs-tab').length)

$(document).on('click', '.tabs-tab', function(event){
  console.log('TAB WAS CLICKED', event.target.innerText)
  // get the tab that was selected / clicked on
  const clickedTab = $(event.target)
  // get the outer most node that wraps our entire component
  const tabsNode = clickedTab.closest('.tabs')
  // removes selected state from all tabs
  tabsNode.find('.tabs-tab').removeAttr('data-selected')
  // adds selected state to the clicked tab
  clickedTab.attr('data-selected', true)
  // gets the unique tab name from the clicked tab
  const tabName = clickedTab.data('tab')
  // removes selectes state from all tab content nodes
  tabsNode.find('.tabs-tab-content').removeAttr('data-selected')
  // gets the tab content for the selected tab
  const tabContentNode = tabsNode.find(
    '.tabs-tab-content[data-tab="'+tabName+'"]'
  )
  // add selected state to the matching content node for the selected tab
  tabContentNode.attr('data-selected', true)
})

