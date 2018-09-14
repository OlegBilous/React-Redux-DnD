import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getList: null,
  moveCard: ['column', 'item', 'newColumn', 'newItem']
}, {})

export { Types, Creators }
