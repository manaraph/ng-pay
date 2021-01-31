import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,

  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

@Injectable({
  providedIn: 'root'
})
export class SwalMixinService {

  constructor() { }

  success(title: string, message?: string) {
    return Toast.fire({
      icon: 'success',
      title,
      text: message
    });
  }
  error(title: string, message?: string) {
    return Toast.fire({
      icon: 'error',
      title,
      text: message
    });
  }
  info(title: string, message?: string) {
    return Toast.fire({
      icon: 'info',
      title,
      text: message
    });
  }
  warning(title: string, message?: string) {
    return Toast.fire({
      icon: 'warning',
      title,
      text: message
    });
  }
}
