import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
// import { BPage } from '../b/b';
// import { ZhucePage } from '../zhuce/zhuce';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = APage;
  // tab5Root = 'BPage';因为前面有引用了他的链接，所以这里不能使用懒加载，冲突了
  // tab5Root = BPage;

  constructor() {

  }
}
