import React,{ useState } from 'react'
import './myModal.css'

const MyModal = (props) => {

    const { editingData, formData, setFormData, setShowModal } = props;

    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    const [modalValues, setModalValues] = useState({
        name: editingData.name || '',
        phone: editingData.phone || '',
        email: editingData.email || '',
        web: editingData.web || ''
      });

      const handleUpdate = (editedValues)=>{      
        if (nameError || phoneError || emailError) {
          return; // Return early if there are validation errors
        }
        else{         
        const updatedData = formData.map((datum)=> datum === editingData ? 
        {
          name : editedValues.name,
          phone : editedValues.phone,
          email : editedValues.email
        } : datum );
          
        setFormData(updatedData);
        setShowModal(false);
      }
    }

      const handleChange = (e) => {
        const { name, value } = e.target;

        // Validate name field
  if (name === 'name') {
    if (value.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  }

    // Validate phone field
    if (name === 'phone') {
      if (!/^\d{10}$/.test(value)) {
        setPhoneError('Phone number should be 10 digits');
      } else {
        setPhoneError('');
      }
    }

      // Validate email field
  if (name === 'email') {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  }

        setModalValues(prevValues => ({
          ...prevValues,
          [e.target.name]: e.target.value
        }));
      };
      //console.log(modalValues)

  return (
    <>
          <div className='modal-container'>
          <label className='modal_label'>Name :</label>
          <input type='text' name='name' placeholder='Name' value={modalValues.name}
          onChange={handleChange}
          className='modal_input'
          ></input>
          {nameError && <div className='error'>{nameError}</div>}
          <br /><br />

          <label className='modal_label'>Phone :</label>
          <input type='number' name='phone' placeholder='Phone' value={modalValues.phone}
          onChange={handleChange}
          className='modal_input'></input>
          {phoneError && <div className='error'>{phoneError}</div>}
          <br /><br />

          <label className='modal_label'>Email :</label>
          <input type='email' name='email' placeholder='Email' value={modalValues.email}
          onChange={handleChange}
          className='modal_input'></input>
          {emailError && <div className='error'>{emailError}</div>}
          <br /><br />

          <label className='modal_label'>Website :</label>
          <input type='text' name='web' placeholder='Website' value={modalValues.web}
          // style={{width:"9rem",height:"1.5rem", borderRadius:"5px",float:"right",marginRight:"1rem",border:"none"}}
          className='modal_input'
          ></input>
          
          <button onClick={()=>handleUpdate(modalValues)} className='modal_btn' >Update </button>
          </div>
    </>
  )
}

export default MyModal