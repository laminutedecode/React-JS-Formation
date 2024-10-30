import {Stack, Rating} from '@mui/material'
import {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function Ratings() {


  const [review, setReview] = useState<number | null>(null)



  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null)=> {
    setReview(newValue)
    console.log(newValue);
    
  }


  return (
    <Stack spacing={2}>
      <Rating value={review} onChange={handleChange}/>
      <Rating value={review} onChange={handleChange} precision={.5} size='large'/>
      <Rating 
      value={review} 
      onChange={handleChange} 
      precision={.5} 
      size='large' 
      icon={<FavoriteIcon fontSize='inherit' color='error' />}
      emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
      />
   
    </Stack>
  )
}
