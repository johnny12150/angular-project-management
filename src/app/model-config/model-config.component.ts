import {Component, OnInit} from '@angular/core';
import doc from '@angular/cli/commands/doc';

@Component({
  selector: 'app-model-config',
  templateUrl: './model-config.component.html',
  styleUrls: ['./model-config.component.css']
})
export class ModelConfigComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // 測試用寫死的config json
    const config = {
      'model': {
        'architecture': 'Full Yolo',
        'input_size': 1344,
        'anchors': [42.00, 0.56, 42.00, 1.78, 42.00, 1.61, 42.00, 1.70, 42.00, 1.48],
        'max_box_per_image': 20,
        'labels': ['text']
      },
      'train': {
        'train_image_folder': 'generate_xml_8/lines/',
        'train_annot_folder': 'generate_xml_8/xml/',

        'train_times': 10,
        'pretrained_weights': '',
        'batch_size': 2,
        'learning_rate': 1e-5,
        'nb_epoch': 1000,
        'warmup_epochs': 0,

        'object_scale': 5.0,
        'no_object_scale': 1.0,
        'coord_scale': 1.0,
        'class_scale': 1.0,

        'saved_weights_name': 'text_42_new_combination1.h5',
        'debug': true
      },

      'valid': {
        'valid_image_folder': '',
        'valid_annot_folder': '',

        'valid_times': 1
      }
    };
    // 要顯示的地方
    const textarea = document.getElementById('myTextarea');
    // avoid TS2339 error, @ref: https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
    textarea['value'] = JSON.stringify(config, undefined, 4);

  }

  // 嘗試angular json viewer, @ref: https://stackblitz.com/edit/angular-json-editor?file=src%2Fapp%2Fapp.component.ts

}
