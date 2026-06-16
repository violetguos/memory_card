import { styled } from '@mui/material/styles';

const StyledButton = styled('button')(({ theme }) => ({
  textAlign: 'center',
  color: 'orange',
  outline: 'none',
  cursor: 'pointer',
  fontSize: 19,
  marginBottom: 20,
  padding: 20,
  borderRadius: 8,
  fontWeight: 600,
  fontFamily: '"Comic Sans MS"',
  border: 'none',
  width: '100%',
  height: 350,
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
