export interface SidebarMenuOptions {
  id:number;
  label: string;
  route: string;
  icon?: string;
}

export class SidebarMenu {
  id:number = 0;
  label: string;
  route: string;
  icon?: string;

  constructor({id, label, route, icon }: SidebarMenuOptions) {
    this.id = id;
    this.label = label;
    this.route = route;
    this.icon = icon;
  }
}

export interface SidebarCategoryOptions {
  title: string;
  menus: SidebarMenu[];
}

export class SidebarCategory {
  title: string;
  menus: SidebarMenu[];

  constructor({ title, menus }: SidebarCategoryOptions) {
    this.title = title;
    this.menus = menus;
  }
}

export class Sidebar {
  categories: SidebarCategory[];

  constructor(categories: SidebarCategory[] = []) {
    this.categories = categories;
  }
}
