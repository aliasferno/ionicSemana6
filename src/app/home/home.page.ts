import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PaginadosPageModule } from '../paginados/paginados.module';
import { PaginadosPage } from '../paginados/paginados.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  isModalOpen = false;
  opciones:string = "";
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
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

  async mostrarToast(text:string, tiempo:number)
  {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: tiempo,
      position: 'top'
    });

    await toast.present();
  }

  verificarRadio()
  {
    this.mostrarToast(this.opciones, 3000);
  }

}
