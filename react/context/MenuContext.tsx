import React, { ReactChild, ReactChildren, createContext, useState } from 'react';
import type { Department } from '../models/departments.interface';
import type { Categories } from '../models/categories.interface';

interface AuxProps {
  children: ReactChild | ReactChildren;
  submenus: any[];
  menuCategoriesV1: any;
}

interface StateProps {
  menu: Menu,
  changeMenu: (p: any) => void;
}

type Menu = {
  departments: Department[] ;
  categories: Categories | null;
}

const inititalState: StateProps = {
  menu: {
    departments: [],
    categories: null
  },
  changeMenu: (p: any) => { console.log(p) }
}

export const MenuContext = createContext(inititalState);

export const MenuProvider = ({ children, submenus, menuCategoriesV1 }: AuxProps) => {


  const [menu, setMenu] = useState<Menu>({
    departments: { ...submenus },
    categories: { ...menuCategoriesV1 }
  });
  const changeMenu = (menu: any) => setMenu(menu);

  const contextState: StateProps = {
    menu,
    changeMenu
  }
  return (
    <MenuContext.Provider value={contextState}>{children}</MenuContext.Provider>
  )
}

MenuProvider.schema = {
  title: 'Admin menú',
  type: 'object',
  properties: {
    submenus: {
      title: "Menú Departamentos",
      type: "array",
      minItems: 0,
      maxItems: 10,
      default: undefined,
      items: {
        title: "Nombre Departamento",
        type: "object",
        properties: {
          __editorItemTitle: {
            default: 'Submenu Item',
            title: "cambiar nombre de item",
            type: "string"
          },
          externalPage: {
            title: "Link Externo?",
            description: "",
            type: "boolean",
            default: false,
          },
          text: {
            title: "Texto",
            description: "",
            type: "string",
          },
          page: {
            title: "URL de página",
            description: "",
            type: "string",
          },
          imageBanner: {
            title: "Image Banner desktop",
            description: "Banner cuando el submenu tiene menos de 4 columnas",
            type: "object",
            properties: {
              src: {
                type: 'string',
                title: 'URL',
                description: 'URL de la imagen del banner'
              },
              alt: {
                type: 'string',
                title: 'Texto Alternativo del banner',
              },
              href: {
                type: 'string',
                title: 'Ruta de producto',
                description: 'Redirección del banner'
              }
            },
          },
          images: {
            title: "Imagen de Categoría",
            type: "object",
            properties: {
              icon: {
                title: "Categoría icon",
                description: "Tamaño de la icon: 27x27px",
                type: "string",
                widget: {
                  "ui:widget": "image-uploader",
                },
              },
              // iconOnHover: {
              //   title: "Icono de categoría en hover",
              //   description: "Tamaño de la icon: 27x27px",
              //   type: "string",
              //   widget: {
              //     "ui:widget": "image-uploader",
              //   },
              // },
              iconActive: {
                title: "Icono activo",
                description: "Icono Activo ?",
                type: "boolean",
                default: true
              },
              isOnlyMobile: {
                title: "El icono solo se muestra en mobile ?",
                description: "Icono Activo ?",
                type: "boolean",
                default: true
              }
            },
          },
          subMenu: {
            title: "Áreas",
            type: "array",
            items: {
              title: "Área Item",
              type: "object",
              properties: {
                __editorItemTitle: {
                  default: 'Área Item',
                  title: "Nombre de item",
                  type: "string"
                },
                titleSubMenu: {
                  title: "Subtitulo",
                  description: "",
                  type: "string",
                },
                externalPage: {
                  title: "Link Externo?",
                  description: "",
                  type: "boolean",
                  default: false,
                },
                url: {
                  title: "URL del área",
                  description: "",
                  type: "string",
                },
                images: {
                  title: "Imagen de Categoría",
                  type: "object",
                  properties: {
                    icon: {
                      title: "Categoría icon",
                      description: "Tamaño de la icon: 27x27px",
                      type: "string",
                      widget: {
                        "ui:widget": "image-uploader",
                      },
                    },
                    // iconOnHover: {
                    //   title: "Icono de categoría en hover",
                    //   description: "Tamaño de la icon: 27x27px",
                    //   type: "string",
                    //   widget: {
                    //     "ui:widget": "image-uploader",
                    //   },
                    // },
                    iconActive: {
                      title: "Icono activo",
                      description: "Icono Activo ?",
                      type: "boolean",
                      default: true
                    },
                    isOnlyMobile: {
                      title: "El icono solo se muestra en mobile ?",
                      description: "Icono Activo ?",
                      type: "boolean",
                      default: true
                    }
                  },
                },
                links: {
                  title: "Links SubMenu",
                  description: "",
                  type: "array",
                  default: [],
                  items: {
                    title: "SubMenu Item",
                    type: "object",
                    properties: {
                      __editorItemTitle: {
                        default: '',
                        title: "Nombre de submenu item",
                        type: "string"
                      },
                      text: {
                        title: "Texto",
                        description: "",
                        type: "string",
                      },
                      externalPage: {
                        title: "¿Enlace externo?",
                        description: "",
                        type: "boolean",
                        default: false,
                      },
                      page: {
                        title: "URL",
                        description: "",
                        type: "string",
                      }
                    },
                  },
                },
              },
              default: {},
            },
            default: [],
          },
        },
      },
    },
    menuCategoriesV1: {
        title: "Menu de categorías",
        type: "object",
        properties: {
          // externalPage: {
          //   title: "Link Externo?",
          //   description: "",
          //   type: "boolean",
          //   default: false,
          // },
          text: {
            title: "Texto",
            description: "",
            type: "string",
          },
          // page: {
          //   title: "URL",
          //   description: "",
          //   type: "string",
          // },
          images: {
            title: "Imagen de Categoría",
            type: "object",
            properties: {
              icon: {
                title: "Categoría icon",
                description: "Tamaño de la icon: 27x27px",
                type: "string",
                widget: {
                  "ui:widget": "image-uploader",
                },
              },
              // iconOnHover: {
              //   title: "Icono de categoría en hover",
              //   description: "Tamaño de la icon: 27x27px",
              //   type: "string",
              //   widget: {
              //     "ui:widget": "image-uploader",
              //   },
              // },
              iconActive: {
                title: "Icono activo",
                description: "Icono Activo ?",
                type: "boolean",
                default: true
              }
            },
          },
          subMenu: {
            title: "Categoría SubMenu",
            type: "array",
            items: {
              title: "Cabecera",
              type: "object",
              properties: {
                __editorItemTitle: { // now change name is available
                  default: 'Categoría',
                  title: 'Cambiar nombre categoría',
                  type: 'string'
               },
                titleSubMenu: {
                  title: "Título",
                  description: "",
                  type: "string",
                },
                externalPage: {
                  title: "Link Externo?",
                  description: "",
                  type: "boolean",
                  default: false,
                },
                images: {
                  title: "Imagen de SubCategoría",
                  type: "object",
                  properties: {
                    icon: {
                      title: "SubCategoría icon",
                      description: "Tamaño de la icon: 27x27px",
                      type: "string",
                      widget: {
                        "ui:widget": "image-uploader",
                      },
                    },
                    // iconOnHover: {
                    //   title: "SubCategoría icon en hover",
                    //   description: "Tamaño de la icon: 27x27px",
                    //   type: "string",
                    //   widget: {
                    //     "ui:widget": "image-uploader",
                    //   },
                    // },
                    iconActive: {
                      title: "Icono activo",
                      description: "Icono Activo ?",
                      type: "boolean",
                      default: true
                    },
                    isOnlyMobile: {
                      title: "El icono solo se muestra en mobile ?",
                      description: "Icono Activo ?",
                      type: "boolean",
                      default: true
                    }
                  },
                },
                page: {
                  title: "URL de redirección",
                  description: "",
                  type: "string",
                },
                subMenu: {
                  title: "Links SubMenu",
                  description: "",
                  type: "array",
                  default: [],
                  items: {
                    title: "SubMenu Link 2",
                    type: "object",
                    properties: {
                      text: {
                        title: "Texto",
                        description: "",
                        type: "string",
                      },

                      externalPage: {
                        title: "¿Enlace externo?",
                        description: "",
                        type: "boolean",
                        default: false,
                      },
                      page: {
                        title: "URL",
                        description: "",
                        type: "string",
                      },
                      subMenu: {
                        title: "Categoría SubMenu 2",
                        type: "array",
                        items: {
                          title: "Cabecera",
                          type: "object",
                          properties: {
                            titleSubMenu: {
                              title: "Título",
                              description: "",
                              type: "string",
                            },
                            externalPage: {
                              title: "Link Externo?",
                              description: "",
                              type: "boolean",
                              default: false,
                            },
                            url: {
                              title: "URL",
                              description: "",
                              type: "string",
                            },
                          },
                          default: {},
                        },
                        default: [],
                      },
                    },
                  },
                },
              },
              default: {},
            },
            default: [],
          },
        },
    },
  },
}
export default MenuProvider;