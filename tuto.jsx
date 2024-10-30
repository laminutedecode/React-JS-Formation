



import {useTransition} from 'react'

export default function tuto() {
  

const [isPending, startTransition] = useTransition();

const handleSubmit = () => {
  startTransition(async () => {
   
  });
};

  return (
    <div>tuto</div>
  )
}
