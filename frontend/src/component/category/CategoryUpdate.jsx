
// REACT
import React, { useEffect, useState } from 'react'

// LANGUAGE
import { withTranslation } from 'react-i18next'

// ROUTER 
import { useNavigate, useParams } from 'react-router-dom'

// API
import CategoryApi from '../../services/CategoryApi';


// FUNCTION
 function CategoryUpdate({t}) {

  // REDIRECT
  const navigate=useNavigate();

  // STATE
  const [todoContent, setTodoContent] = useState('');
  const [id, setID] = useState(null);

  // PARAMS
    const updateID = useParams();
  
  // USEEFFECT
    useEffect(() => {
      //1.YOL (ID)
      //setID(localStorage.getItem("category_update_id"));
      setID(updateID.id);

      //FIND
      CategoryApi.categoryApiFindById(updateID.id)
      .then((response) => {
        console.log(response.data);
        setTodoContent(response.data.todoContent)
      })
      .catch((err) => {
        console.error(err);
      });
    },[])//end effect
  

  // POST
  const categoryUpdate= async (event)=>{
    // Browser'ın post için durmasını istiyorum
    event.preventDefault();

    // Category object
    const newCategory={
      todoContent
    }
    console.log(newCategory);

    // API
   try {
      const response= await CategoryApi.categoryApiUpdate(id,newCategory)
      if (response.status===200){
        navigate('/category/list');
      }
   } catch (err) {
    console.error(err);
   }
  }

  // RETURN
  return (
    <React.Fragment>
      <form>
        <h2 className="display-3 mt-4">{t('category_update')}</h2>
        <div className="form-group">
          <span>{t('category_name')}</span>
          <input 
          type="text" 
          className="form-control" 
          placeholder={t('category_name')} 
          required={true}
          autoFocus={true}
          id="category_data"
          name="category_data"
          onChange={(event)=>{setTodoContent(event.target.value)}}
          value={todoContent}
          />
          </div>
          <button type='submit' className="btn btn-primary mt-3" onClick={categoryUpdate}>{t('update')}</button>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </React.Fragment>
  ) //end return
} //end fucntion

// i18n wrapper
export default withTranslation()(CategoryUpdate)