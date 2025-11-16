import Card from '@mui/material/Card';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import china from "../src/assets/china.jpg"
import punch from "../src/assets/PUNCH.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import portugal from "../src/assets/portugal.jpg"
import africa from "../src/assets/africa logo.png"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Trending = () => {
  return (
    <div className='bg-gray-100'>
              
          <div className='grid grid-cols-2 '>        
            <div  className='items-center px-5 py-5'>
                <Card className='w-4xl'>
                <div className='flex items-center gap-2 p-4'>
                  <Typography  variant="" className='text-blue-500 text-xl font-light'>
                    Trending / World
                  </Typography>
                  <div className='text-blue-500'>
                    <ArrowForwardIosIcon fontSize='small'/>
                  </div>

                </div>

                  <CardMedia className='w-3xl  h-sm p-4 ml-15'>
                    <img src={china} className='rounded-lg' />
                  </CardMedia>
                  <CardContent>
                      <div className='flex gap-2 pb-2'>
                          <img src={punch} className='rounded-lg w-10 h-sm' />
                        <Typography variant="" className='text-black text-sm'>
                          Punch NewsPapers
                        </Typography>
                      </div>

                      <div className='pb-5'>
                        <Typography variant="" className='text-black text-5xl font-bold '>
                          China warns citizens against travelling to Japan
                        </Typography>
                      </div>

                      <div>
                          <Typography variant="" className='text-black text-l  '>
                            China has advised its citizens to avoid travelling to Japan, following a diplomatic feud 
                            sparked by remarks from Tokyo’s new premier about a hypothetical attack on Taiwan.
                            Japanese Prime Minister Sanae Takaichi told parliament on November 7 that the use of force 
                            against the self-ruled island claimed by China could warrant a military response from Tokyo.
                            On Friday, Beijing said it had summoned Japan’s ambassador, while Tokyo said it had summoned China’s
                            ambassador after an “inappropriate” and now-removed online post.    
                            Tokyo has since said its position on Taiwan, just 100 kilometres (62 miles) from the nearest
                            Japanese island, remains unchanged.
                            In an online post late Friday, China’s embassy in Japan warned its citizens against travelling to the
                            country. “Recently, Japanese leaders have made blatantly provocative remarks regarding Taiwan, severely 
                            damaging the atmosphere for people-to-people exchanges,” the WeChat post said. The situation presents
                          “significant risks to the personal safety and lives of Chinese citizens in Japan,” it added.
                          </Typography>
                      </div>
                      <div className='pt-5'>
                          <Typography variant="" className='text-gray-500 text-sm font-light'>
                            7 hours ago. 15th, November 2025
                          </Typography>
                      </div>
                  </CardContent>         
                </Card>
            </div>

            <div className='ml-auto'>
               <List className='w-70 bg-gray-50'>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Oui Oui"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                          >
                            Sandra Adams
                          </Typography>
                          {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>

            </div>


          </div>

          <div className='p-5 -mt-5'>
                <Card className=' w-70 '>
                <div className='flex items-center gap-2 p-4'>
                  <Typography  variant="" className='text-blue-500 text-xl font-light '>
                    Related News
                  </Typography>
                  <div  className='text-blue-500 '>
                    <ArrowForwardIosIcon fontSize="small"/>
                  </div>
                </div >

                <CardMedia className='w-s h-sm p-4'>
                  <img src={portugal} className='rounded-lg' />
                </CardMedia>
                <CardContent>
                    <div className='flex gap-2 pb-2 -ml-4'>
                        <img src={africa} className='rounded-lg w-8 h-5' />
                       <Typography variant="" className='text-black text-sm'>
                         African Development Bank Group
                      </Typography>
                    </div>

                    <div>

                      <Typography variant="" className='text-black text-xl font-semibold '>
                         African Development Fund and WHO sign a $55 million agreement to strengthen health services in Sudan
                      </Typography>
                    </div>

                    <div className='pt-2'>
                        <Typography variant="" className='text-gray-500 text-sm font-light'>
                          Yesterday
                        </Typography>
                    </div>
                </CardContent>

                <CardActions className='-mt-4'>
                  <button className="text-l text-blue-500 py-1 px-2 ml-2 border border-blue-500 rounded-sm" >Share</button>
                  <button className="text-l text-blue-500 py-1 px-2 border border-blue-500 rounded-sm">Learn More</button>
                </CardActions>
              </Card>
          </div>

    </div>
  )
}

export default Trending