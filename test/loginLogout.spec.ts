import { test, expect } from '@playwright/test';

// Define a test case for login and logout functionality
test('Login and Logout User functionality', async ({ page }) => {

  // Open the Assignment website
  await page.goto('https://automationexercise.com/');

  // Click on the 'Consent' button to accept cookies
  await page.getByRole('button', { name: 'Consent' }).click();
  
  // Verify page to have a link with name Website for automation on Home page.
  await expect(page.getByRole('link', { name: 'Website for automation'})).toBeVisible();
   
  // Verify page to have a heading with name Features Items on Home page.
  await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();

  // Click on the 'Signup/Login' button to navigate to login page
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  
  // Verify page to have a heading with name Login to your account on Login page.
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

  // Fill in the login form with correct email and incorrect password, then click the 'Login' button
  await page.getByRole('heading', { name: 'Login to your account' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('n98901414@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123!');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Verify page will display the text 'Logged in as Nishi' after successful login
  await expect(page.getByText('Logged in as Nishi')).toBeVisible();

  // Verify page will display link with name Logout after the successful login
  await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();  

  // Click on the 'Logout' button to log out the user
  await page.getByRole('link', { name: ' Logout' }).click();

  // Verify page will display link with name Signup/Login after the successful logout
  await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
});
