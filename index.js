const puppeteer = require('puppeteer')
const companyName = process.env.COMPANY_NAME
const userName = process.env.USER_NAME
const password = process.env.PASSWORD

let click_selector
switch (process.argv[2]) {
  case 'start':
    click_selector = '.attendance-card-time-stamp-clock-in'
    break
  case 'end':
    click_selector = '.attendance-card-time-stamp-clock-out'
    break
  default:
    process.exit(1)
}

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

;(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.goto('https://attendance.moneyforward.com/employee_session/new')
  await page.type(
    'input#employee_session_form_office_account_name',
    companyName
  )
  await page.type('input#employee_session_form_account_name_or_email', userName)
  await page.type('input#employee_session_form_password', password)
  await Promise.all([
    page.waitForNavigation(),
    page.click('form input[type=submit]')
  ])
  await page.goto('https://attendance.moneyforward.com/my_page')
  await page.waitFor(getRandomTime(10, 4000))
  await Promise.all([page.click(click_selector)])
  await browser.close()
})()
