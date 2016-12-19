import { color } from '../../styles'

export default {
  posts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '50rem',
  },
  title: {
    flex: 1,
    color: color.medium,
    letterSpacing: '0.1rem',
  },
  list: {
    flex: 1,
  },
}
