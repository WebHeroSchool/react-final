import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactLogoPng from '../../img/contacts.png';
import styles from './Contacts.module.css';
import contactsTelegramImg from '../../img/teleg.svg';
import contactsGithubImg from '../../img/github.svg';
import contactsInstagramImg from '../../img/insta.svg';
import LogoWHS from '../../img/WHS.png';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Manrope',
  },
  media: {
    height: 260,
   },
 });

export default function MediaCard() {
  const classes = useStyles();
  const textStyles ={
    fontWeight: 600,
    fontFamily: 'Manrope',
    color: '#a09d9d',
    fontSize: '16px',
    lineHeight: '1.7',
    cursor: 'default',
  };
  const headerStyles={
    color:'#695646',
    display: 'flex',
    justifyContent: 'space-around',
    cursor: 'default',
  };
  const footerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ ReactLogoPng }
          title='Contemplative Reptile'
          />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' style={headerStyles}>
            Tatyana Sosnina
            <a href='tg://resolve?domain=Татьяна Соснина' className={styles.contactsTelegram}>
                <img src={contactsTelegramImg} alt='telegram' className={styles.contactsTelegramImg}></img>
                +79539117162
            </a>
          </Typography>
          <Typography variant='body2' color='#000' component='p' style={textStyles}>
          Hello, dear friend!
          <br/>I'm a student of front-end development school <a href='https://webheroschool.ru/'
          alt='WHS' target='_blank'
          rel='noopener noreferrer'
          className={styles.school}
          > WebHeroSchool</a>
           </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={footerStyles}>
          <div className={styles.media}>
              <Button size='small' color='primary'>
                <a href='https://github.com/Tatyana888-star'
                   className={styles.contactsGithub}
                   target='_blank'
                   rel='noopener noreferrer'>
                  <img src={contactsGithubImg}
                       alt='github'
                       className={styles.contactsGithubImg}>
                  </img>
                </a>
              </Button>
              <Button size='small' color='primary'>
                <a href='https://www.instagram.com/tatyana.s.888/'
                   className={styles.contactsInstagram}
                   target='_blank'
                   rel='noopener noreferrer'>
                  <img src={contactsInstagramImg}
                       alt='github'
                       className={styles.contactsInstagramImg}>
                  </img>
                </a>
              </Button>
          </div>
          <img src={LogoWHS} alt='Разработано в WebHeroSchool' className={styles.whsLogo} />
      </CardActions>
    </Card>
  );
}
