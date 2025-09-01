import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'
import { OrderNotFoundPage } from './orderNotFound-page'

export class OrderPage extends BasePage {
  readonly statusButton: Locator
  readonly searchOrderInput: Locator
  readonly searchOrderSubmitButton: Locator
  // add more locators here

  constructor(page: Page) {
    super(page)
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.searchOrderInput = page.getByTestId('searchOrder-input')
    this.searchOrderSubmitButton = page.getByTestId('searchOrder-submitButton')
  }

  async fillOrderIdAndSubmit (orderId: string) {
    await this.statusButton.click()
    await this. fillElement(this.searchOrderInput, orderId)
    await this.clickElement(this.searchOrderSubmitButton)
    return new OrderNotFoundPage(this.page)

  }
}