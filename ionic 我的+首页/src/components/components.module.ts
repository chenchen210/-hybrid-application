import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { BrowserModule } from '@angular/platform-browser';//引入组件
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [AComponent,
    BComponent],
	imports: [//引入
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [AComponent,
    BComponent]
})
export class ComponentsModule {}
