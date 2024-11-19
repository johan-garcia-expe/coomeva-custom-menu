import React, { useContext } from 'react'
import MegaMenuMobile from "./MegaMenuMobile/index";
import { MenuContext } from '../../context/MenuContext';

interface Props {
  Login: any
}

const MenuMobile = ({ Login }: Props) => { 
    // const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    // const handles = useCssHandles(CSS_HANDLES_MENU)

    const { menu } = useContext(MenuContext);
    console.log("login",Login)
    // console.log(props)
    console.log('menuProps: ',menu)
  return  (
    <MegaMenuMobile Login={ Login } categories={ menu.categories } departments={ menu.departments }/>
  )


};

export default MenuMobile