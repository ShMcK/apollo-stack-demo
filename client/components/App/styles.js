import { color } from '../../styles'

export default {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  side: {
    flex: 1,
  },
  main: {
    flex: 3,
    padding: '1rem',
    backgroundColor: color.light,
    height: '100%',
  },
}
