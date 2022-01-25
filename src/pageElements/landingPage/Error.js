
export const FormErrors = ({formErrors}) =>

  <div className='' >
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <div className='bg-red-100 border border-red-400 border-l-4 text-red-700 px-4 py-3 mb-3 rounded relative transition duration-500 ease-in-out' role="alert" key={i}>
             <strong class="font-bold pr-2">Huh!!</strong>
             {fieldName} {formErrors[fieldName]}
            </div>
        )        
      } else {
        return '';
      }
    })}
  </div>