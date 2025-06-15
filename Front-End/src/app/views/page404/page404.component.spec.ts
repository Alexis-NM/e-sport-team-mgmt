import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page404 } from './page404.component';
import { provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('Page404', () => {
    let component: Page404;
    let fixture: ComponentFixture<Page404>;
    let router: Router;
    let location: Location;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Page404],
            providers: [provideRouter([{ path: 'home', component: Page404 }])],
        }).compileComponents();

        fixture = TestBed.createComponent(Page404);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
    });

    it('devrait être créé', () => {
        expect(component).toBeTruthy();
    });

    it('devrait afficher le message 404', () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const h1 = compiled.querySelector('h1');
        const p = compiled.querySelector('p');
        expect(h1).not.toBeNull();
        expect(h1?.textContent).toContain('404 - Page Non Trouvée');
        expect(p).not.toBeNull();
        expect(p?.textContent).toContain(
            "Oups... La page que vous recherchez n'existe pas !"
        );
    });

    it('devrait avoir un lien vers la page d\'accueil', async () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const link = compiled.querySelector('a');
        expect(link).not.toBeNull();
        expect(link?.getAttribute('routerLink')).toBe('/home');

        if (link) {
            link.click();
            await fixture.whenStable();
            expect(location.path()).toBe('/home');
        }
    });
});
