import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PaginadosPageModule } from '../paginados/paginados.module';
import { PaginadosPage } from '../paginados/paginados.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  isModalOpen = false;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  irp2n(){
    this.navCtrl.navigateForward('/paginados');
  }
  irp2r(){
    this.router.navigate(['/paginados']);
  }

  llamarModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async llamarModalDos() {

      const modal = await this.modalCtrl.create({
        component: PaginadosPage,
      });
      return await modal.present();
  }

}
