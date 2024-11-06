import React, { useContext } from 'react'
import MegaMenuMobile from "./MegaMenuMobile/index";
import { MenuContext } from '../../context/MenuContext';

const MenuMobile = () => { 
    // const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    // const handles = useCssHandles(CSS_HANDLES_MENU)

    const { menu } = useContext(MenuContext);

    // console.log(props)
    console.log('menuProps: ',menu)
  return  (
    <MegaMenuMobile categories={ menu.categories } departments={ menu.departments }/>
  )


};

export default MenuMobile