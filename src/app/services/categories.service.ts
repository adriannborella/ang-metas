import { Injectable } from '@angular/core';
import { Category } from '../entities/category.entity';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getAll(): Category[] {
    const categories: Category[] = [];

    const personal = new Category('Personal', 'accessibility_new');
    categories.push(personal);

    const professional = new Category('Professional', 'school');
    categories.push(professional);

    const economic = new Category('Economic', 'attach_money');
    categories.push(economic);

    const health = new Category('Health-Care', 'local_hospital');
    categories.push(health);

    const other = new Category('Other', 'scatter_plot');
    categories.push(other);

    return categories;
  }
}
