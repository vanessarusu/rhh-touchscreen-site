import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { NavigationComponent } from "./app/navigation/navigation.component";
import { TheCommunityComponent } from "./app/views/the-community/the-community.component";
import { HomeDesignComponent } from './app/views/home-design/home-design.component';
import { GalleryComponent } from './app/views/gallery/gallery.component';
import { TheBuilderComponent } from './app/views/the-builder/the-builder.component';
import { RegisterComponent } from './app/views/register/register.component';
import { HomeComponent } from './app/views/home/home.component';
import { SeriesComponent } from './app/views/home-designs/series/series.component';


const routes: Routes = [
	{ 
		path: "",
		component: HomeComponent
	},
	{ 
		path: "the-community",
		component: TheCommunityComponent
	},
	{ 
		path: "home-designs",
		component: HomeDesignComponent
	},
	{
		path: "home-designs/series",
		component: SeriesComponent
	},
	{ 
		path: "gallery",
		component: GalleryComponent
	},
	{ 
		path: "the-builder",
		component: TheBuilderComponent
	},
	{ 
		path: "register",
		component: RegisterComponent
	},
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
