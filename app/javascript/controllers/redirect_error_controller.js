import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['form', 'title']

  redirectOnError(event) {
    if(this.titleTarget.value == '' || this.titleTarget.value == undefined) {
      this.formTarget.dataset.turbo = false
    }
    this.formTarget.requestSubmit()
  }
}
