import React from 'react'
import { useMenuContext_80 } from '../MenuContext'

const Category_80 = () => {
  const {categories,filterItems} = useMenuContext_80();
  return (
    <div className="btn-container">
        { categories.map((category, index) => {
            return(
                <button key={index} type="button" 
                        className="filter-btn" 
                        onClick={() => filterItems(category) }>{category}
                </button>
            )
        })}
    </div>
    
  )
}

export default Category_80;
