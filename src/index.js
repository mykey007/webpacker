// alert('hello from webpack')
import { run } from './app/app'
import './app/main.css'
import { AlertService } from './app/alert.service'
import { ComponentService } from './app/component.service'
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);