import { Toolbar, AppBar, Typography, Divider, Grid, Box, IconButton, useMediaQuery } from '@mui/material'
import logo from './assets/Logo.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import img8 from './assets/8.png'
import img9 from './assets/9.png'
import img10 from './assets/10.png'
import img11 from './assets/11.png'
import img13 from './assets/13.png'
import img12 from './assets/12.png'
import img14 from './assets/14.png'
import img15 from './assets/15.png'
import img16 from './assets/16.png'
import img17 from './assets/17.png'
import img18 from './assets/18.png'
import { makeStyles } from '@mui/styles';
import Card from './components/Card'
import Card2 from './components/Card2'
import { text1, text2, text3 } from './utils'
import theme from 'theme'
import ImageBox from 'components/ImageBox'

const useStyles = makeStyles({
  cardImg: {
    borderRadius: 20,
    width: "100%"
  },
  box: {
    width: '100%',
    backgroundImage: `url(${img11})`,
    height: 500,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    marginTop: 36,
    [theme.breakpoints.down('sm')]: {
      height: 700
    }
  },
  box2: {
    width: '100%',
    height: 1000,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundImage: `url(${img18})`,
    [theme.breakpoints.down('sm')]: {
      height: 'auto'
    }
  }
})

function App() {
  const classes = useStyles()
  const xs = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="App">
      <AppBar position="static" sx={{ background: 'white' }}>
        <Toolbar>
          <img src={logo} width={170} style={{ margin: 'auto' }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Typography sx={{ textAlign: 'center', fontWeight: 400, fontSize: 24 }} variant="h5">V A R I E T I E S</Typography>
      <Divider sx={{ width: 100, m: 'auto', background: 'black', mt: 1 }} />
      <Box sx={{ width: { xs: "98%", md: '95%' }, m: 'auto', mt: 3, pb: 5 }}>
        <Grid
          container
          spacing={xs ? 0 : 3}
          sx={{ height: { xs: 'auto', sm: 'auto', md: 800 } }}>
          <Grid item md={6} xs={12} sx={{ mb: { xs: 2 } }}>
            <ImageBox
              img={img6}
              title="Pizza is a savory dish of Italian origin"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
              bg="rgba(52, 38, 121,0.7)" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container spacing={2} sx={{ height: { xs: 1200, sm: 1200, md: 800 } }}>
              <Grid item xs={12} md={6}>
                <ImageBox
                  img={img2}
                  small
                  title="Crispy French Fries"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  bg="rgba(255,255,255,0.4)" />
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageBox
                  img={img3}
                  small
                  title="Paneer Tikka"
                  desc=""
                  bg="rgba(255,255,255,0.4)" />
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageBox
                  img={img4}
                  small
                  title="Macaroon"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  bg="rgba(255,255,255,0.4)" />
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageBox
                  img={img5}
                  small
                  title="Doughnut"
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  bg="rgba(255,255,255,0.4)" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box pt={5} p={xs ? 3 : 10} sx={{ mt: { xs: 10 } }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 18, md: 24 }, textAlign: { xs: 'center', md: 'left' } }}>Indian Cuisine</Typography>
              <Typography variant="body" sx={{ fontWeight: 500, textAlign: { xs: 'center', md: 'left' } }}>{text1}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 18, md: 24 }, textAlign: { xs: 'center', md: 'left' } }}>American Cuisine</Typography>
              <Typography variant="body" sx={{ fontWeight: 500, textAlign: { xs: 'center', md: 'left' } }}>{text2}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 18, md: 24 }, textAlign: { xs: 'center', md: 'left' } }}>Chinese Cuisine</Typography>
              <Typography variant="body" sx={{ fontWeight: 500, textAlign: { xs: 'center', md: 'left' } }}>{text3}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "98%", md: '95%' }, m: 'auto' }}>
        <Toolbar />
        <Typography variant="h5" sx={{ textAlign: 'center', fontSize: 24 }}>
          <p style={{ marginRight: 12, display: 'inline-block', fontWeight: 400 }}>T O P</p>
          <p style={{ display: 'inline-block', fontWeight: 400 }}>C H E F S</p>
        </Typography>
        <Divider sx={{ width: 100, m: 'auto', background: 'black', mb: 10 }} />
        <Box className={classes.box}>
          <Grid container spacing={xs ? 0 : 5} sx={{ width: { xs: '95%', md: '80%' }, m: 'auto', pt: 5 }}>
            <Grid item xs={12} sm={6} md={4}><Card img={img13} title='Eileen Johnson' desc='Executive Chef, USA' /></Grid>
            <Grid item xs={12} sm={6} md={4}><Card img={img12} title='Robert Downey Jr' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' /></Grid>
            <Grid item xs={12} sm={6} md={4}><Card img={img14} title='Amanda Dority' desc='Sous Chef, India' /></Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "98%", md: '95%' }, m: 'auto', pb: 5, pt: 3 }} className={classes.box2}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontSize: 24 }}>
          <p style={{ marginRight: 12, display: 'inline-block', fontWeight: 400 }}>F O O D  </p>
          <p style={{ display: 'inline-block', fontWeight: 400 }}> G U I D E</p>
        </Typography>
        <Divider sx={{ width: 100, m: 'auto', background: 'black', mb: { md: 10 } }} />
        <Grid container spacing={xs ? 0 : 4} sx={{ width: { xs: '100%', md: '90%' }, m: 'auto' }}>
          <Grid item sm={12} md={6}>
            <Card2 img={img9} title="VEGETABLES" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." />
          </Grid>
          <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: { xs: "center", md: 'flex-end' } }}>
            <Card2 img={img7} title="WHOLE GRAINS" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </Grid>
          <Grid item sm={12} md={6}>
            <Card2 img={img8} title="WHOLE GRAINS" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's." />
          </Grid>
          <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: { xs: "center", md: 'flex-end' } }}>
            <Card2 img={img10} title="HEALTHY PROTEIN" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." />
          </Grid>
        </Grid>
      </Box>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', pt: 10, pb: 5 }}>
        <IconButton>
          <img src={img17} style={{ width: 50, height: 50 }} />
        </IconButton>
        <IconButton>
          <img src={img15} style={{ width: 50, height: 50 }} />
        </IconButton>
        <IconButton>
          <img src={img16} style={{ width: 50, height: 50 }} />
        </IconButton>
      </Toolbar>
    </div>
  );
}

export default App;
