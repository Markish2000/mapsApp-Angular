// Angular
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

// Libraries
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(
    -58.7610665386361,
    -34.50965075354209
  );

  mapListeners(): void {
    if (!this.map) throw 'Mapa no inicializado.';

    this.map.on('zoom', (event) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (event) => {
      if (this.map!.getZoom() > 18) {
        this.map!.zoomTo(18);
      }
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();

      const { lng, lat } = this.currentLngLat;
    });
  }

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado.';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: this.zoom,
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomChanged(value: string): void {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
