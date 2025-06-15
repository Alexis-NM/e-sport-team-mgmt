import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    let location: Location;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [provideRouter([{ path: 'home', component: AppComponent }])],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
    });

    it('devrait être créé', () => {
        expect(component).toBeTruthy();
    });

    it('devrait afficher le point de sortie du routeur', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const routerOutlet = compiled.querySelector('router-outlet');
        expect(routerOutlet).not.toBeNull();
    });

    it('devrait naviguer vers la page d\'accueil lors du chargement', async () => {
        await router.navigate(['/home']);
        expect(location.path()).toBe('/home');
    });
});
