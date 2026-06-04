import { test, expect } from '@playwright/test';

// Define a test case for search product functionality
test('Search Product functionality', async ({ page }) => {

  // Open the Assignment website
  await page.goto('https://automationexercise.com/');

  // Click on the 'Consent' button to accept cookies
  await page.getByRole('button', { name: 'Consent' }).click();
  
  // Verify page to have a link with name Website for automation on Home page.
  await expect(page.getByRole('link', { name: 'Website for automation'})).toBeVisible();
    
  // Verify page to have a heading with name Features Items on Home page.
  await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();

  // Click on the 'Products' button to navigate to products page
  await page.getByRole('link', { name: ' Products' }).click();

  // Verify page to have a heading with name All Products on products page.
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();

  // Fill in the search form with product name and click the search button
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Blue Top');
  await page.locator('#submit_search').click();

  // Verify page to have a link with name View Product after searching
  await expect(page.getByRole('link', { name: ' View Product' })).toBeVisible();

  // Click on the 'View Product' button to view the product details
  await page.getByRole('link', { name: ' View Product' }).click();

  // Verify page to have a heading with name Blue Top on product details page.
  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
  
  // Click on the 'Blue Top' heading to view the product details
  await page.getByRole('heading', { name: 'Blue Top' }).click();

  // Verify page to have a heading with name Blue Top on product details page.
  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
 });
