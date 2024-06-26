import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
      private meta: Meta,
      private title: Title
    ) { }

  updateMetaTag(name: string, content: string, type: 'name' | 'property'): void {
    this.meta.updateTag({ [type]: name, content: content });
  }

  setMetaTag(name: string, content: string, type: 'name' | 'property'): void {
    this.updateMetaTag(name, content, type);
  }

  setOgTitle(title: string): void {
    this.updateMetaTag('og:title', title, 'property');
  }

  setOgDescription(description: string): void {
    this.updateMetaTag('og:description', description, 'property');
  }

  setOgImage(imageUrl: string): void {
    this.updateMetaTag('og:image', imageUrl, 'property');
  }

  setTwitterTitle(title: string): void {
    this.updateMetaTag('twitter:title', title, 'name');
  }

  setTwitterDescription(description: string): void {
    this.updateMetaTag('twitter:description', description, 'name');
  }

  setTwitterImage(imageUrl: string): void {
    this.updateMetaTag('twitter:image', imageUrl, 'name');
  }

  setKeywords(keywords: string[]): void {
    this.updateMetaTag('keywords', keywords.join(', '), 'name');
  }

  setMetaTags(metaTags: { name: string, content: string, type: 'name' | 'property' }[]): void {
    metaTags.forEach(tag => this.updateMetaTag(tag.name, tag.content, tag.type));
  }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }
}
