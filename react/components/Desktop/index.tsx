import React, { useContext } from 'react'
import DepartmentsDesktop from "./DepartmentsDesktop"
import CategoriesDesktop from "./CategoriesDesktop"
import { MenuContext } from '../../context/MenuContext';
// import { useCssHandles } from 'vtex.css-handles';

// const CSS_HANDLES_MENU = [
//     'active',
//     'dark_back',
//     'overlay'
//   ] 

const MenuDesktop = () => { 
    // const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    // const handles = useCssHandles(CSS_HANDLES_MENU)

    const { menu } = useContext(MenuContext);

    console.log('menuProps: ',menu)
  return  (
    <nav>
        <div className='flex'>
            <CategoriesDesktop categories={ menu.categories }/>   
            <DepartmentsDesktop departments={menu.departments}/>
        </div>
    </nav>
  )

};

export default MenuDesktop