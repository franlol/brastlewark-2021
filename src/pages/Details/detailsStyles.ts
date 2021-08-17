import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'column',

    margin: '40px auto',
    borderRadius: '10px',
    maxWidth: 900,
  },
  media: {
    height: 400,
    width: '100%',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    margin: 'auto 0 0 auto'
  },
  link: {
    color: '#3f51b5',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: 'inherit',
    fontWeight: 500,
    lineHeight: 1.75,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});