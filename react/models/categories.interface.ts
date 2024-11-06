export interface Image {
	icon?: string;
	iconActive: boolean;
	isOnlyMobile: boolean;
	iconOnHover?: string;
}


export interface SubMenuLink {
	externalPage: boolean;
	titleSubMenu: string;
	url: string;
}

export interface Link {
	externalPage: boolean;
	page?: string;
	text?: string;
	subMenu?: SubMenuLink[];
}

export interface SubMenu {
	images?: Image;
	externalPage: boolean;
	subMenu?: Link[];
	text?: string;
	page?: string;
}

export interface Categories {
	images?: Image;
	text?: string;
	page?: string;
	subMenu?: SubMenu[];
}