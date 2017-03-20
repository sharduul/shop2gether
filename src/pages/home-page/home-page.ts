import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {

    captureDataUrl: string;

  //constructor(public navCtrl: NavController, public navParams: NavParams) {}
  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePagePage');

    this.capture();
  }


    capture() {
        const cameraOptions: CameraOptions = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
        };

        Camera.getPicture(cameraOptions).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;

            console.log(this.captureDataUrl);


        }, (err) => {
            // Handle error
        });
    }


}
