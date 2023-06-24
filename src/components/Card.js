import React,{ useState } from 'react'


const Card = (props) => {

    const {value, handleEdit, handleDelete } = props;

    const red = '#ff0000'
    const color = '#008000'
  
      const [bg,setBg] = useState(red);
      
      const bgChange=(item)=>{ 
          console.log(item)
          if(bg===red){
            setBg(color);
          }
          else{setBg(red);
          }
      }

  return (
    <>
    <div className='card1'>
    <div className='pic'>
            <img src= "Images/avatar-1.jpg" alt='missing' ></img>
            </div>
            <h3 className='user_name' >{value.name}</h3>
            <div className='content1'>
                <li><i class="fa-regular fa-envelope"></i><span>{value.email}</span></li>
                <li><i class="fa-thin fa-phone-flip fa"></i><span>{value.phone}</span></li>
                <li><i class="fa-sharp fa-light fa-globe fa"></i><span>www.userregister.com</span></li>
            </div>
        </div>

        <div className='card2'>
            <i class="fa-solid fa-heart" style={{color: bg}} onClick={()=>bgChange(value)}></i>
            <i class="fa-thin fa-pen fa" style={{marginLeft: '20px' }} onClick={()=>handleEdit(value)}></i>
            <i class="fa-light fa-trash fa" onClick={()=>handleDelete(value)}></i>   
        </div>
    </>
  )
}

export default Card