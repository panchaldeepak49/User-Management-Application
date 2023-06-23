import React,{ useState } from 'react'
import Form1 from './Form';
import MyModal from './MyModal';
import './home.css'
import { hover } from '@testing-library/user-event/dist/hover';

const Home = () => {
    const [ formData,setFormData ] = useState([]);  //Note- Here formData is primary element 

    const [editingData, setEditingData] = useState({});

    const[showModal,setShowModal] = useState(false);

    const handleSubmit =(values,{ resetForm })=>{
        const newFormData ={
            name: values.name,
            phone: values.phone,
            email: values.email
        }
        setFormData((prevFormData)=>[...prevFormData,newFormData]);
        resetForm();
    }

    const handleDelete = (deletingData)=>{
      const newData = formData.filter((datum)=> datum !== deletingData);
      setFormData(newData);
  }

  // const handleUpdate = (editedValues)=>{               
  //   const updatedData = formData.map((datum)=> datum === editingData ? 
  //   {
  //     name : editedValues.name,
  //     phone : editedValues.phone,
  //     email : editedValues.email
  //   } : datum );
      
  //   setFormData(updatedData);
  //   setShowModal(false);
  // }

  const handleEdit = (data)=>{
    setEditingData(data)
    setShowModal(true);
  }
    
    const red = '#ff0000'
    const color = '#008000'
  
      const [bg,setBg] = useState(red);
      
      
  
      const bgChange=(item)=>{ 
          //console.log(item)
          if(bg===red){
            setBg(color);
          }
          else{setBg(red);
          }
      }
    //console.log(formData);


  return (
    <>
     <Form1 handleSubmit={handleSubmit}/>          {/*  passing props to Form */}
    {
        formData.length ? 
        <div className='main1'>
      {
        formData.map((value)=>{
            return(
                <>
                <div className='maincard'>
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
        { showModal && <MyModal editingData={editingData} formData={formData} 
          setFormData={setFormData} setShowModal={setShowModal} />} 
                                                           {/*  passing props to MyModal */}
        </div>
            </>
            )
        })
      }
      </div>
        
        :
        <div className='main2'>
          <div className='no_data'>
          No data is present
          </div>
          </div>
    }
    </>
  )
}

export default Home