import React, { useEffect, useState, useRef } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css'

import type { Categories } from '../../../models/categories.interface';

const CSS_HANDLES_MENU = [
  "container_menu_desktop_subMenu__header",
  "category_icon",
  "categories_menu",
  'container_menu_desktop',
  'container_menu_desktop_ul_departament',
  'container_menu_desktop_ul_departament_item',
  'container_menu_desktop_content',
  "container_menu_desktop_content__header",
  "container_menu_desktop_content__grid",
  'btn_toggle_menu',
  'close_icon',
  'icon_menu',
  'active',
  'dark_back',
  'view_all',
  'container_menu_desktop_subMenu',
  'container_menu_desktop_subMenu_content',
  'container_menu_desktop_ul_category',
  'container_menu_desktop_ul_category_item',
  'container_menu_desktop_ul_subCategory',
  'container_menu_desktop_ul_subCategory_item',
]

interface Props {
  categories: Categories | null
}

const CategoriesDesktop = ({ categories }: Props) => {
  const handles = useCssHandles(CSS_HANDLES_MENU)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [subCat, setSubCat] = useState<any>(false)
  const [catActiveActive, setIsCatActive] = useState<any>(0)
  // console.log('propiedades DESKTOP: ',props)
  console.log("categories :", categories)
  const refs = useRef<Array<number>>(new Array(categories?.subMenu?.length));


  useEffect(() => {
    if (!isOpenMenu) {
      setIsCatActive(0)
      console.log("catActiveActive", catActiveActive)
    }
  }, [isOpenMenu])

  const changeIcon = (icon: string, index: number) => {
    const icons = document.querySelectorAll('.category_icon')
    icons.forEach((item: any, itemInd: number) => {
      if (itemInd !== index || !icon) return
      console.log("item", item)
      console.log("icon", icon)
      item.src = icon
    })
  }
  const hoverDepartament = (indexD: number | string) => {
    Object.keys(refs.current).map((ref, index) => {
      if (indexD === index) {
        const catConjunt = categories?.subMenu ? categories?.subMenu[indexD] : {}
        if (catConjunt) {
          setIsCatActive(ref)
          // console.log( "catConjunt", catConjunt )
        }
        const subCatSelected = categories?.subMenu ? categories?.subMenu[catActiveActive] : null
        if (subCatSelected) {
          setSubCat(subCatSelected)
        }
      }
    })
  }
  const handleClose = (e: any) => {
    e.preventDefault()
    console.log("cerrar", e)
    setIsOpenMenu(false)
  }

  const getUserName = () => {
    const dataClient = localStorage.getItem("dataClient");
    if(dataClient) {
      const name = JSON.parse( dataClient ).firstName + ','
      return name.toLowerCase();
    }
    return ''

  }

  return <>
    <div className={isOpenMenu ? handles.dark_back + ' ' + handles.active : handles.dark_back}></div>
    <section className={handles.container_menu_desktop}
      onMouseEnter={() => { setIsOpenMenu(true) }}
      onMouseLeave={() => { setIsOpenMenu(false) }}
    >
      <a className={isOpenMenu ? handles.btn_toggle_menu + ' ' + handles.active : handles.btn_toggle_menu} >{categories?.text}</a>
      {/* <p><span>CONTACTO: </span>Bogotá/Chía 419-2525   018000-12881</p> */}
      <div className={isOpenMenu ? handles.container_menu_desktop_content + ' ' + handles.active : handles.container_menu_desktop_content}>
        <div className={`${handles.container_menu_desktop_content__header}`}>
          <span> <b>Hola, <span style={{textTransform: 'capitalize'}}>{getUserName()}</span></b> encuentra todo lo que necesitas en nuestra tienda online </span>
          <button type='button' onClick={handleClose}> <i className={`${handles.close_icon}`} ></i> <span >Cerrar</span></button>
        </div>
        <div className={`${handles.container_menu_desktop_content__grid}`}>
          <ul className={handles.container_menu_desktop_ul_departament}>
            {categories && categories.subMenu?.map((item: any, index: number) => (
              <li key={`cat_${index}`}
                onMouseEnter={(() => { hoverDepartament(index); changeIcon(item?.images?.iconOnHover, index) })}
                // onMouseLeave={(() => {hoverDepartament(index); changeIcon(item?.images?.iconOnHover, index)})} 
                ref={(item: any) => (refs.current[index] = item)}
                className={catActiveActive == index ? handles.container_menu_desktop_ul_departament_item + ' ' + handles.active : handles.container_menu_desktop_ul_departament_item} >
                {(item?.images?.iconActive) && (
                  <img className='category_icon' src={item?.images?.icon} width="27" />
                )}
                {item?.text}
              </li>
            ))}
          </ul>
          <div className={handles.container_menu_desktop_subMenu}>
            <div className={handles.container_menu_desktop_subMenu_content}>
              {
                subCat && (
                  <div className={`flex ${handles.container_menu_desktop_subMenu__header}`}>
                    <span className='mr2'>{subCat && subCat?.text}</span>
                    <a href={subCat?.page ?? '#'}> Ver Todo </a>
                  </div>
                )
              }
              <ul className={handles.container_menu_desktop_ul_category}>
                {subCat && subCat?.subMenu.map((item: any, indexLink1: number) => (
                  <li key={item.text + indexLink1} className={handles.container_menu_desktop_ul_category_item} >
                    <a href={item.page}>{item.text}</a>
                    <ul className={handles.container_menu_desktop_ul_subCategory}>
                      {item?.subMenu.map((link: any, index: number) => (
                        <li key={index} className={handles.container_menu_desktop_ul_subCategory_item}>
                          <a href={link.url}>{link?.titleSubMenu}</a>
                        </li>
                      ))}

                      <li key={`submenuLink${indexLink1}`} className={handles.container_menu_desktop_ul_subCategory_item + ' ' + handles.view_all}><a href={item.page}>Ver todo</a> </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  </>

};
export default CategoriesDesktop;