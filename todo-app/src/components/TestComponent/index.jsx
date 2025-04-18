import React, { Fragment } from 'react'
import { useParams , useLocation, Outlet, Navigate, useNavigate, } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { Product } from '../product';
import { Blog } from '../blog';


export const Test = () => {
    const {id} = useParams();
    const loc = useLocation();
    console.log(loc);

    const navigate = useNavigate()

    function gotoProduct(){
        navigate('product')
    }

    function gotoBlog(){
        navigate('blog')
    }

  return (
    <Fragment>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Use of params
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Id : {id}
          </Typography>
          <Typography variant="body2" className="text-lg font-extrabold " sx={{ color: 'text.secondary' }}>
            Value from Location hook : {JSON.stringify(loc)}
          </Typography>
         
        </CardContent>
      </CardActionArea>
        <Button variant="contained" color="primary" onClick={gotoProduct}>Product</Button>
        <Button variant="contained" color="secondary" onClick={gotoBlog}>Blog</Button>
        
    </Card>
    <Outlet/>
    </Fragment>
  );
}
