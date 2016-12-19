import { color } from '../../styles'

export default {
  post: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
  },
  votesContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  votesButton: {
    borderStyle: 'none',
    backgroundColor: color.white,
  },
  contentContainer: {
    flex: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  author: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '1rem',
  },
}
