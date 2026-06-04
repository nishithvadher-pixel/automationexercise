import { test, expect } from '@playwright/test';

// Define a test case for search product functionality
test('View Product, Add to Cart and View Cart functionality', async ({ page }) => {

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

  // Select the first product and click on the 'View Product' button to view the product details
  await page.getByRole('link', { name: ' View Product' }).first().click();
 
  // Verify page to have a link with name View Cart after adding the product to the cart
  await expect(page.getByRole('button', { name: ' Add to cart' })).toBeVisible();
  
  // Click on the 'Add to cart' button to add the product to the cart
  await page.getByRole('button', { name: ' Add to cart' }).click();
  
  // Verify page to have a heading with name Added! after adding the product to the cart
  await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();

  // Verify page to have a link with name View Cart after adding the product to the cart
  await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
  
  // Click on the 'View Cart' link to view the items in the cart
  await page.getByRole('link', { name: 'View Cart' }).click();

  // Verify that the shopping cart page is displayed with the correct heading
  await expect(page.getByText('Shopping Cart')).toBeVisible();
});

