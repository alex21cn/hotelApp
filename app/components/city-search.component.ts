import { Component, OnInit, ElementRef } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HotelService } from "../services/hotel.service";
import { City } from '../models/city.interface';
@Component({
    moduleId: module.id,
    selector: 'city-search',
    host: {
        '(document:click)': 'handleClick($event)',
    },    
    templateUrl: '../templates/city-search.template.html',
    //styleUrls: ['city-search.component.css'],
    //providers: [HotelService]
})
export class CitySearchComponent implements OnInit {
    private selectedIdx = -1;
    private cities: City[] = [];
    public query = "";
    private pos: number = -1;
    private opened: boolean = false;
    private selectedItem: any;
    private item: any;    
    public filteredList: City[] = [];

    constructor(private service: HotelService, private element: ElementRef) { }

    ngOnInit(): void {
        this.service.getCities().then(
            cities => this.cities = cities
            );        
    }

filterQuery() {
    this.filteredList = this.cities.filter((el: any) => {
      return el.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    });
  }

  filter(event: any) {

    if (this.query !== '') {
      if (this.opened) {

        if ((event.keyCode >= 48 && event.keyCode <= 57) ||
          (event.keyCode >= 65 && event.keyCode <= 90) ||
          (event.keyCode == 8)) {

          this.pos = 0;
          this.filterQuery();

        } else if (event.keyCode != 38 && event.keyCode != 40 && event.keyCode != 13) {
          this.filteredList = this.cities;
        }
      } else {
        this.filterQuery();
      }
    } else {
      if (this.opened) {
        this.filteredList = this.cities;
      } else {
        this.filteredList = [];
      }
    }

    for (let i = 0; i < this.filteredList.length; i++) {
      this.filteredList[i].selected = false;
    }

    if (this.selectedItem) {
      this.filteredList.map((i) => {
        if (i.name == this.selectedItem.name) {
          this.pos = this.filteredList.indexOf(i);
        }
      })
      this.selectedItem = null;
    }

    // Arrow-key Down
    if (event.keyCode == 40) {
      if (this.pos + 1 != this.filteredList.length)
        this.pos++;
    }

    // Arrow-key Up
    if (event.keyCode == 38) {
      if (this.pos > 0)
        this.pos--;
    }

    if (this.filteredList[this.pos] !== undefined)
      this.filteredList[this.pos].selected = true;

    //enter
    if (event.keyCode == 13) {
      if (this.filteredList[this.pos] !== undefined) {
        this.select(this.filteredList[this.pos]);
      }
    }

    // Handle scroll position of item
    let listGroup = document.getElementById('list-group');
    let listItem = document.getElementById('true');
    if (listItem) {
      listGroup.scrollTop = (listItem.offsetTop - 200);
    }

  }

  select(item: any) {
    this.selectedItem = item;
    this.selectedItem.selected = true;
    this.query = item.name;
    this.filteredList = [];
  }

  showAll(input: any) {
    input.select();

    if (this.filteredList.length > 0) {
      this.opened = false;
      this.filteredList = [];
    } else {
      this.opened = true;
      this.filteredList = this.cities;
    }
    if (this.query === '') {
      this.clearAll();
    }

    this.clearSelects();
  }

  handleKeyDown(event: any) {
    // Prevent default actions of arrows
    if (event.keyCode == 40 || event.keyCode == 38) {
      event.preventDefault();
    }
  }

  clearAll() {
    if (this.filteredList) {
      for (let i = 0; i < this.filteredList.length; i++)
        this.filteredList[i].selected = false;
    }
  }

  /** Remove selected from all cities of the list **/
  clearSelects() {
    if (this.selectedItem) {
      for (let i = 0; i < this.filteredList.length; i++) {
        if (this.filteredList[i].name != this.selectedItem.name)
          this.filteredList[i].selected = false;
      }
    }
  }

  /** Handle outside click to close suggestions**/
  handleClick(event: any) {
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.element.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
      this.opened = false;
    }
  }
}