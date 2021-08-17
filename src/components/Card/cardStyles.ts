import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    width: 345,
    margin: '20px 5px',
    borderRadius: '10px'
  },
  media: {
    height: 140,
  },
  content: {
    height: 140
  },
  link: {
    color: '#3f51b5',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '0.8125rem',
    fontWeight: 500,
    lineHeight: 1.75,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});