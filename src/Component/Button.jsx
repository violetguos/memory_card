import { styled } from '@mui/material/styles';

const StyledButton = styled('button')(({ theme }) => ({
  textAlign: 'center',
  color: 'orange',
  outline: 'none',
  cursor: 'pointer',
  fontSize: 19,
  padding: 20,
  borderRadius: 8,
  fontWeight: 600,
  fontFamily: '"Comic Sans MS"',
  border: 'none',
  width: '100%',
  height: 350,
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'box-shadow 0.2s, transform 0.2s',
  '&:hover': {
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('md')]: {
    height: '76.5vw',
  },
  [theme.breakpoints.down('sm')]: {
    height: '81vw',
  },
}));

const Figure = styled('figure')(({ theme }) => ({
  height: 227,
  width: 227,
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    height: '72vw',
    width: '72vw',
  },
  [theme.breakpoints.down('sm')]: {
    height: '72vw',
    width: '72vw',
  },
}));

const Img = styled('img')({
  maxHeight: '100%',
  maxWidth: '100%',
});

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick} value={props.value}>
      <Figure>
        <Img src={props.src} alt="doge" />
        <figcaption>doge</figcaption>
      </Figure>
    </StyledButton>
  );
};

export default Button;
