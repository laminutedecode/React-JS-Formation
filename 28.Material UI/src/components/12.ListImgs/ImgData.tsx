import {Stack, ImageList, ImageListItem, ImageListItemBar} from '@mui/material'

export default function ImgData() {


  const itemsImgs = [
    {
      title: "Objet 1",
      image: "https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 2",
      image: "https://images.unsplash.com/photo-1707789045435-971e848a914b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 3",
      image: "https://plus.unsplash.com/premium_photo-1708005566035-e8652b784a09?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 4",
      image: "https://images.unsplash.com/photo-1682695798256-28a674122872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 5",
      image: "https://images.unsplash.com/photo-1708086504310-134d8c4005f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 6",
      image: "https://images.unsplash.com/photo-1707879487402-014fa8080bae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 7",
      image: "https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 8",
      image: "https://images.unsplash.com/photo-1707655096635-89387f83f189?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Objet 9",
      image: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];


  return (
    <Stack spacing={2}>
      <ImageList sx={{width: 500}} cols={3} rowHeight={164}>
          {itemsImgs.map(item => (
            <ImageListItem key={item.title} >
              <img src={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2`} loading='lazy'/>
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
      </ImageList>
    </Stack>
  )
}
