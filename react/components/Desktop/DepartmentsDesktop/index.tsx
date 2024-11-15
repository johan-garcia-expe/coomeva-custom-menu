import React, { useEffect, useState, useRef } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import type { Department } from '../../../models/departments.interface';

import './styles.css'

const CSS_HANDLES_MENU = [
  'container_menu_desktop',
  'container_menu_desktop_ul_departament',
  'container_menu_desktop_ul_departament_item',
  'container_menu_desktop_content',
  'btn_toggle_menu',
  'icon_menu',
  'active',
  'dark_back',
  'view_all',
  "departament",
  "content_departament",
  "content_categories",
  "content_categories__container",
  "image_banner__container",
  "image_banner",
  "categories",
  'categories_large',
  "title_category",
  "sub_menu"
]

interface Props {
  departments: Department[];
}

const DepartmentsDesktop = ({ departments }: Props) => {
  const handles = useCssHandles(CSS_HANDLES_MENU)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [departamentActive, setIsDepartamentActive] = useState<string | number>(-10)
  console.log('propiedades DESKTOP departamento: ',departments)

  const refs = useRef<Array<number>>(new Array(departments ? departments.length : 0));

  useEffect(() => {
    if (!isOpenMenu) {
      setIsDepartamentActive(-10)
    }
  }, [isOpenMenu])

  const hoverDepartament = (indexD: number | string) => {
    Object.keys(refs.current).map((ref, index) => {
      if (indexD === index) {
        // console.log("áctivar: ",ref)
        setIsDepartamentActive(ref)
      }
    })
  }

  return <>
    <div className={isOpenMenu ? handles.dark_back + ' ' + handles.active : handles.dark_back} onMouseEnter={() => (setIsOpenMenu(false))}></div>
    <section className={handles.container_menu_desktop}
      onMouseLeave={() => {
        setIsOpenMenu(false);
        hoverDepartament("");
      }}
    >
      {departments && Object.values(departments).map((departament: any, indexD: any) => (
        <div key={'dep_' + indexD} className={handles.content_departament} >
          <a
            className={`${handles.departament} ${departamentActive == indexD ? handles.active : ''}`}
            // href={departament?.page}
            // onClick={()=>departament?.externalPage?false:(setIsOpenMenu(!isOpenMenu),hoverDepartament(indexD))}
            onMouseEnter={() => (
              departament?.externalPage || !departament?.subMenu || departament?.subMenu?.length == 0
            ) ? (setIsOpenMenu(false), hoverDepartament("")) :  (setIsOpenMenu(true), hoverDepartament(indexD))}
            href={departament?.page  ? departament?.page : "javascript:void(0)"}
            target={!departament?.externalPage ? '_self' : '_blank'}
            ref={(departament: any) => (refs.current[indexD] = departament)}>
            {(departament?.images?.iconActive && !departament?.images?.isOnlyMobile) && (
              <img src={departament?.images?.icon} width="27"/> 
            )} 
            {departament?.text}
          </a>
          <div className={departamentActive == indexD ? handles.active + ' ' + handles.content_categories : handles.content_categories}>
            <div className={handles.content_categories__container}>
              {departament?.subMenu && departament.subMenu.map((category: any, index: number) => (

                <div className={departament.subMenu.length > 4 ? handles.categories_large + ' ' + handles.categories : handles.categories} key={index}>
                  <a className={handles.title_category} href={category?.url}>
                    <img src={category?.images?.icon} />
                    {category?.titleSubMenu}
                  </a>
                  <ul className={handles.sub_menu}>
                    {
                      category?.links && category.links.map((subcategory: any, index: number) => (
                        <li key={index}><a href={subcategory?.page}>{subcategory?.text}</a></li>
                      ))
                    }
                    <li key={index}><a className={handles.view_all} href={category?.url}>Ver todo</a></li>
                  </ul>
                </div>
              ))}
              {(departament.imageBanner) && (
                <div className={handles.categories}>
                  <a className={`${handles.image_banner__container}`} href={departament.imageBanner.href}>
                    <img className={handles.image_banner} src={departament.imageBanner.src} alt={departament.imageBanner.alt} />
                  </a>
                  <a className={handles.view_all} href={departament.imageBanner.href}>Ver curso</a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  </>

};
export default DepartmentsDesktop;