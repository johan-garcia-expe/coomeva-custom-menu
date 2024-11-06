export interface Image {
	icon?: string;
	iconActive: boolean;
	isOnlyMobile: boolean;
	iconOnHover?: string;
}

export interface Link {
	externalPage: boolean;
	text: string;
}

export interface SubMenuDepartment {
	images?: Image;
	externalPage: boolean;
	checkSubMenu?: boolean;
	links?: Link[];
	titleSubMenu?: string;
	url?: string;
	page?: string;
	text?:string;
	
}

export interface Department {
	imageBanner?: ImageBanner;
	images?:Image;
	externalPage?: boolean;
	checkIcon?: boolean;
	checkSubMenu?: boolean;
	subMenu: SubMenuDepartment[];
	text?: string;
	titleSubMenu?: string;
	page?: string;
	url?: string;
}

export type ImageBanner = {
	src: string;
	alt: string;
	href: string;
}
