// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Libraries
import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken =
  'pk.eyJ1IjoibWFya2lzaCIsImEiOiJjbG8xeWxrZ3YwM2M3MmtwOTFvczNmaXI4In0.dlgVuzxffd7uVfKZs7-NFg';

// Components
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

// Modules
import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    ZoomRangePageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}
