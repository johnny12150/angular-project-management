import {Component, OnInit, ViewChild} from '@angular/core';
import {FetchProjectService} from '../fetch-project.service';
import {JsonEditorComponent, JsonEditorOptions} from 'ang-jsoneditor';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  // 設定json editor
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  options = new JsonEditorOptions();
  // 測試用資料
  data = {
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

  public model_list = [];
  model_names = [];

  // 宣告注入的service
  constructor(private fetchModelService: FetchProjectService) {
    this.options.mode = 'code';
    this.options.modes = ['code', 'text', 'tree', 'view'];
    // this.options.schema = schema;
    // 顯示第幾行第幾個字元
    // this.options.statusBar = false;
    // 當資料被edit時
    // this.options.onChange = () => console.log(this.editor.get());
    this.options.onChange = () => this.printChange(this.editor.get());
  }

  ngOnInit() {
    this.fetchModelService.getProjectList()
      .subscribe(project => {
        this.model_list[0] = project;
        this.model_names = this.model_list[0].files;
        console.log(this.model_names);
      });
  }

  printChange(newJSON) {
    console.log(newJSON);
    // todo: 儲存被改過的JSON
  }

}
