const {$} = require('wdio/globals')
class RuanganPage {
  get mainView() {
    return $('div.app-content');
  }

  get mejaInput() {
    return $('[name="meja"]');
  }

  get coverInput() {
    return $('[name="cover"]');
  }

  get descriptionInput() {
    return $('[name="description"]');
  }

  get submitButton() {
    return $('#tombol_simpan');
  }

  open() {
    browser.url('http://127.0.0.1:8000/admin/ruangan');
  }
}

export default new RuanganPage();