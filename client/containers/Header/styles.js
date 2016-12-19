import { center, color } from '../../styles'

export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',
    backgroundColor: color.dark,
  },
  left: {
    ...center,
  },
  right: {
    ...center,
  },
  brand: {
    height: '2rem',
    width: '2rem',
    borderRadius: '0.5rem',
    backgroundColor: color.medium,
    marginRight: '1rem',
  },
  title: {
    fontSize: '1.2rem',
  },
  link: {
    fontSize: '1.1rem',
  }
}