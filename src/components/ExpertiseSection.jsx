import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import blog from "../assets/blog.png"
import mandir from "../assets/mandir.png"
import press from "../assets/press.jpg"
import publications from "../assets/publications.png"


const expertiseData = [
  {
    title: 'Blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: blog,
  },
  {
    title: 'Publications',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: publications,
  },
  {
    title: 'Visit Local Mandir',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: mandir,
  },
  {
    title: 'Press Release',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: press,
  },
];

export const AreasOfExpertise = () => {
  return (
    <div style={{ overflowX: 'auto', paddingBottom: '20px' }}>
      <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
        {expertiseData.map((item, index) => (
          <Grid item key={index}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              flex: '0 0 auto', 
              width: '320px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                border: 'none'
            }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom fontFamily={"times"}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontFamily={"times"}>
                  {item.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                sx={{ m: 2, maxWidth: "40%", height:"40px" }}
                style={{ borderRadius: "20px", backgroundColor: "#F3911E", fontSize: "12px", textTransform:"none" }}
              >
                Explore Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
