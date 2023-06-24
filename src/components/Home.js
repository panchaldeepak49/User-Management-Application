import React,{ useState } from 'react'
import Form1 from './Form';
import MyModal from './MyModal';
import Card from './Card';
import './home.css'


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

  

  const handleEdit = (data)=>{
    setEditingData(data)
    setShowModal(true);
  }
    
    
    //console.log(formData);


  return (
    <div className='home'>
     <Form1 handleSubmit={handleSubmit}/>          {/*  passing props to Form */}
    {
        formData.length ? 
        <div className='main1'>
      {
        formData.map((value)=>{
            return(
                <>
                <div className='maincard'>

        <Card value={value} handleEdit={handleEdit} handleDelete={handleDelete}/>

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
          No data to display
          </div>
          </div>
    }
    </div>
  )
}

export default Home