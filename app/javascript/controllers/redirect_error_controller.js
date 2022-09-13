import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['title']

  redirectOnError(event) {

    if(this.titleTarget.value == '' || this.titleTarget.value == undefined) {
      window.location.href = "https://example.com"
    } else {
      this.titleTarget.closest('form').requestSubmit()
    }
  }
}
