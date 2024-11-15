// import React, { useEffect, useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useCssHandles } from 'vtex.css-handles';
//Models
import type { Categories } from '../../../models/categories.interface';
import type { Department } from '../../../models/departments.interface';
//styles
import './styles.css';

const CSS_HANDLES_MENU = [
  "menu_mobile__header_container",
  "menu_mobile__header_logo",
  "menu_mobile__close_btn",
  'container_menu_mobile',
  'active',
  'back',
  'more',
  'arrow',
  'close',
  'btn_toggle_menu',
  'container_mobile_menu',
  'link_redirect',
  "img_logo",
  'container_departament',
  'mobile_category_li_container',
  'mobile_category_1level',
  'mobile_category_2level',
  'container_category',
  'category_item',
  'container_subCategory',
  'container_subCategory2',
  'subCategory_item'

]
interface Props {
  categories: Categories | null;
  departments: Department[];
}

const MegaMenuMobile = ({ categories, departments }: Props) => {

  console.log('propiedades MOBILE: ', categories, departments)
  const handles = useCssHandles(CSS_HANDLES_MENU)
  const [category, setCategory] = useState<any>(null)
  const [subCategory1, setSubCategory1] = useState<any>(null)
  const [subCategory2, setSubCategory2] = useState<any>(null)
  const [categoryLevelActive, setCategoryLevelActive] = useState<number>(1)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(() => {
    () => {
      setCategory(null)
    }

  }, [isOpenMenu]);

  useEffect(() => {
    console.log("category", category)

  }, [category]);

  useEffect(() => {
    console.log("subCategory1", subCategory1)

  }, [subCategory1]);

  useEffect(() => {
    console.log("subCategory2", subCategory2)

  }, [subCategory2]);

  const handleBtnToggle = () => {
    setIsOpenMenu(!isOpenMenu)
    setCategoryLevelActive(1)
  }

  const handleGoBack = ( level: number ) => {
    setCategoryLevelActive(level)
  }
  const handleSetCategory = (cat: any, level: number ) => {
    if( cat?.subMenu || cat?.links ) {
      setCategory( cat )
      setTimeout(() => {
        setCategoryLevelActive( level )
      },100)
    } else{
      cleanMenu()
    }
  }

  const handleSetSubCategory = (cat: any, level: number ) => {
    if( cat?.subMenu || cat?.links ) {
      setSubCategory1( cat )
      setTimeout(() => {
        setCategoryLevelActive( level )
      },100)
    } else {
      cleanMenu()
    }
  }

  const handleSetSubCategory2 = (cat: any, level: number ) => {
    if( cat?.subMenu?.length || cat?.links?.length ) {
      setSubCategory2( cat )
      setTimeout(() => {
        setCategoryLevelActive( level )
      },100)
    } else {
      cleanMenu()
    }
  }

  const cleanMenu = ( ) => {
    setIsOpenMenu(false)

    setCategory( null )
    setSubCategory1( null )
    setSubCategory2( null )
    setCategoryLevelActive( 1 )
  }

  return (
    <nav className={handles.container_menu_mobile} >
      <a className={isOpenMenu ? handles.btn_toggle_menu + ' ' + handles.active : handles.btn_toggle_menu} onClick={() => handleBtnToggle()}> </a>
      <div className={isOpenMenu ? handles.container_mobile_menu + ' ' + handles.active : handles.container_mobile_menu}>
        <section>
          <div className={`flex ${handles.menu_mobile__header_container}`}> 
            <div className={`${handles.menu_mobile__header_logo}`}><img src='https://coomeva.vtexassets.com/assets/vtex.file-manager-graphql/images/1b109663-e8be-4a6b-9ee4-666c002e4fb1___00ecae8f49aec8b4a8604702f0b342dc.png' alt='Logo Mobile' /> </div>
            <button type='button' className={`${handles.menu_mobile__close_btn}`} onClick={() => cleanMenu()}></button>
          </div>
        </section>
        <ul className={`${categoryLevelActive == 1 && handles.active} ${handles.container_departament}`} >
          <li
            className={`${handles.arrow} ${handles.mobile_category_1level}`}
            onClick={() => handleSetCategory( categories, 2) }
          >
            <div className={`${ handles.mobile_category_li_container }`}>
              <span >
                {categories?.images?.iconActive && <img src={categories?.images?.icon} width="27"/>  }  
                {categories?.text}
              </span>
            </div>
          </li>
          {
            departments && Object.values(departments).map((depa:Department) => (
              <li
                key={depa.text}
                className={`${depa?.subMenu && handles.arrow} ${handles.mobile_category_1level}`}
              >
                <div className={`${ handles.mobile_category_li_container }`}>
                  {
                    (depa?.page && (!depa?.subMenu?.length || !depa?.subMenu)) ?
                    <a href={`${depa?.page}`} target={!depa?.externalPage ?'_self' : '_blank'}>
                      {depa?.images?.iconActive && <img src={depa?.images?.icon} width="27"/>  } 
                      {depa.text}
                    </a> :
                    <span onClick={() => handleSetCategory( depa, 2 ) }>
                      {depa?.images?.iconActive && <img src={depa?.images?.icon} width="27"/>  } 
                      {depa?.text}
                    </span>
                  }
                </div>
              </li>
            ))
          }
        </ul>
        {(isOpenMenu && category) && (
          <ul  className={`${categoryLevelActive == 2 &&  handles.active } ${handles.container_category}`} >
            <li className={handles.subCategory_item + ' ' + handles.back}><span onClick={() => handleGoBack(1)}>{category?.text}</span> <a className={handles.more} href={category.page} >Ver todo</a></li>
            {/* {category?.category?.subMenu?.map((category: SubMenu | Department | SubMenuDepartment, index: number) => ( */}
            {category?.subMenu?.map((category: any, index: number) => (
              <li key={index + '_cate'} className={handles.mobile_category_2level + ' ' + handles.arrow} >
                <div className={`${ handles.mobile_category_li_container }`}>
                  {category?.links ?

                    (category?.page && (!category?.links?.length || !category?.links) ) ?
                    <a href={`${category?.page}`} target={!category?.externalPage ?'_self' : '_blank'}>
                      {category?.images?.iconActive && <img src={category?.images?.icon} width="27"/>  } 
                      {category?.text ?? category?.titleSubMenu}
                    </a> :
                    <span onClick={() => handleSetSubCategory(category, 3)}>
                      {category?.images?.iconActive && <img src={category?.images?.icon} width="27"/>  } 
                      {category?.text ?? category?.titleSubMenu}
                    </span> 
                    :
                    (category?.page && (!category?.subMenu?.length || !category?.subMenu) ) ?
                    <a href={`${category?.page}`} target={!category?.externalPage ?'_self' : '_blank'}>
                      {category?.images?.iconActive && <img src={category?.images?.icon} width="27"/>  } 
                      {category?.text ?? category?.titleSubMenu}
                    </a> :
                    <span onClick={() => handleSetSubCategory(category, 3)}>
                      {category?.images?.iconActive && <img src={category?.images?.icon} width="27"/>  } 
                      {category?.text ?? category?.titleSubMenu}
                    </span>
                  }
                </div>
              </li>
            ))}
          </ul>
        )}
        { (isOpenMenu && subCategory1) && (
          <ul className={`${categoryLevelActive == 3 &&  handles.active } ${handles.container_category}`} >
            <li className={handles.subCategory_item+' '+handles.back}><span onClick={() => handleGoBack(2)} >{subCategory1?.titleSubMenu ?? subCategory1?.text}</span> <a className={handles.more} href={subCategory1.page}>Ver más</a></li>
            {subCategory1?.links && subCategory1?.links.map((link: any, index: number) => (
              <li key={index+'_subcate'} className={handles.subCategory_item+' '+handles.arrow} onClick={() => handleSetSubCategory2( link, 4) }>
                <div className={`${ handles.mobile_category_li_container }`}>
                  {(link?.page && (!link?.subMenu?.length || !link?.subMenu))? <a href={link.page} target={!link?.externalPage ?'_self' : '_blank'}>{link?.text}</a> :<span >{link?.text}</span>}
                </div>
              </li>
            ))}    
            {subCategory1?.subMenu && subCategory1?.subMenu.map((link: any, index: number) => (
              <li key={index+'_subcate'} className={handles.subCategory_item+' '+handles.arrow} onClick={() => handleSetSubCategory2( link, 4) }>
                <div className={`${ handles.mobile_category_li_container }`}>
                  {(link?.page && (!link?.subMenu?.length || !link?.subMenu) )? <a href={link.page} target={!link?.externalPage ?'_self' : '_blank'}>{link?.text}</a> :<span >{link?.text}</span>}
                </div>
              </li>
            ))}     
          </ul>
        )}
        {(isOpenMenu && subCategory2) && (
          <ul className={`${categoryLevelActive == 4 &&  handles.active } ${handles.container_category}`} >
            <li className={handles.subCategory_item+' '+handles.back}>
              <span onClick={() => handleGoBack(3)}>{subCategory2.text}</span> 
              <a className={handles.more} href={subCategory2.page}>Ver más</a>
            </li>
            {subCategory2?.subMenu.map((link: any, index: number)=>(
              <li key={index+'_subcate2'} className={handles.subCategory_item+' '+handles.arrow}>
                <div className={`${ handles.mobile_category_li_container }`}>
                  <a href={link.url} target={!link?.externalPage ?'_self' : '_blank'} onClick={ () => cleanMenu() } >{ link?.titleSubMenu }</a>
                </div>
              </li>))}     
          </ul>
        )}
      </div>
    </nav>
  )
};
export default MegaMenuMobile;
